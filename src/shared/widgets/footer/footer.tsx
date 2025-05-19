import './footer.css'

function Footer() {
  const onClickPrivacyPolicy = () => {
    window.open('https://privacy.kia.com/overview/full-policy', '_self');
  }

  return (
    <footer>
      <div className="inner">
        <div className="information">
          <span className="util">
            <button type="button" onClick={onClickPrivacyPolicy}><b>개인정보 처리방침</b></button>
            <button type="button">이용약관</button>
          </span>
          <address>
            <span>서울특별시 서초구 헌릉로 12 <em>기아㈜</em></span>
            <br />
            <span>대표: <i>송호성, 최준영</i></span>
            <br />
            <span>사업자등록번호: <i>119-81-02316</i></span>
            <br />
            <span>제휴문의: <a href="mailto:kiabiz@kia.com">kiabiz@kia.com</a></span>
          </address>
        </div>
        <p className="copyright">© 2023 KIA CORP. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;