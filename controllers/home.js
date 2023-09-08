exports.contactus = (req,res)=>{
    res.render('contactus', {
        pageTitle: 'contact us',
        path: '/contactus'
      });
}
exports.success = (req,res)=>{
    res.render('success', {
        pageTitle: 'Success',
        path: '/success'
      });
}