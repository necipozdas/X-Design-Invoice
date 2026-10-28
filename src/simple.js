
// Simple invoice: client, items, pricing, totals, notes, save and print.
$('planNav').hidden=true;document.querySelector('.viewtabs').hidden=true;$('planPanel').hidden=true;$('paymentSection').hidden=true;
const noPlanPrint=$('print').onclick;$('print').onclick=()=>{const native=window.print;window.print=()=>{const area=$('printArea');area.querySelectorAll('.printattachment').forEach(n=>n.remove());native.call(window)};try{noPlanPrint()}finally{window.print=native}};
$('sample').textContent='Load sample invoice';
document.querySelector('.heading p').textContent='Simple invoices. Clear pricing.';
const cleanRead=read;read=function(){const d=cleanRead();const old=invoices.find(i=>i.id===current);d.payments=old?.payments||[];d.phases=old?.phases||[];return d};
baseline=JSON.stringify(read());

// Use the current app brand on printed invoices.
const latestLogoPrint=$('print').onclick;$('print').onclick=()=>{const native=window.print;window.print=()=>{const top=$('printArea').querySelector('.phead>div');if(top){const brand=document.querySelector('aside .brand').cloneNode(true);brand.removeAttribute('href');brand.classList.add('invoice-brand');top.replaceChildren(brand);const legal=document.createElement('p');legal.textContent='Legal company name: X design LLC';top.append(legal);const address=document.createElement('div');address.style.whiteSpace='pre-line';address.textContent=$('companyAddress').value;top.append(address);const email=document.createElement('p');email.textContent=$('companyEmail').value;top.append(email)}native.call(window)};try{latestLogoPrint()}finally{window.print=native}};

// Explicit saved invoice history, refreshed from this browser's storage.
const historyDialog=document.createElement('dialog');historyDialog.className='invoice-history';historyDialog.innerHTML='<div class="history-top"><h2>Saved invoices</h2><button type="button" id="closeHistory">Close</button></div><p id="historyStatus" role="status"></p><div id="historyRows"></div>';
document.body.append(historyDialog);$('closeHistory').onclick=()=>historyDialog.close();
function readStoredInvoices(){const value=localStorage.getItem(KEY);const data=value?JSON.parse(value):[];if(!Array.isArray(data))throw Error('Invalid saved invoice history');return data}
function showInvoiceHistory(){try{invoices=readStoredInvoices();$('search').value='';render();$('historyStatus').textContent=invoices.length?invoices.length+' saved invoice'+(invoices.length===1?'':'s')+' in this browser. Select one to edit.':'No saved invoices found in this app copy. If you saved in another open tab or app file, open that tab and use Export backup, then Import backup here.';$('historyRows').innerHTML=invoices.map((d,i)=>'<button type="button" class="history-entry" data-history="'+i+'"><span><b>'+esc(d.number)+'</b><small>'+esc(d.client)+'</small></span><span>'+money(totals(d).total)+'<small>'+esc(d.status)+'</small></span></button>').join('');document.querySelectorAll('[data-history]').forEach(b=>b.onclick=()=>{const selected=invoices[Number(b.dataset.history)];historyDialog.close();switchTo(selected)});historyDialog.showModal()}catch(error){toast('Cannot read saved history in this browser. Your stored data has not been changed.')}}
$('all').onclick=showInvoiceHistory;
window.addEventListener('storage',e=>{if(e.key===KEY){try{invoices=readStoredInvoices();render()}catch{}}});
