const FBCustomerService = () => {
  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: 'v9.0',
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');

  return (
    <>
      <div id="fb-root"></div>

      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="101936375048706"
        theme_color="#6699cc"
        logged_in_greeting="Hi! 有什麼我可以幫的上忙的地方？"
        logged_out_greeting="Hi! 有什麼我可以幫的上忙的地方？"
      ></div>
    </>
  );
};
export default FBCustomerService;
