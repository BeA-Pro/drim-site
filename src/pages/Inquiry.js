import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import InquiryImage from '../asset/images/inquiry_image.png';

function Inquiry() {
  const formRef = useRef();  // 폼 요소를 참조하기 위한 useRef 사용

  const [name, setName] = useState('');
  const [emailLocalPart, setEmailLocalPart] = useState('');
  const [emailDomainPart, setEmailDomainPart] = useState('');
  const [contactPart1, setContactPart1] = useState('');
  const [contactPart2, setContactPart2] = useState('');
  const [contactPart3, setContactPart3] = useState('');
  const [category, setCategory] = useState('');
  const [emailTitle, setEmailTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentLength, setContentLength] = useState(0);

  const handleContentChange = (event) => {
    const newContent = event.target.value;
    if (newContent.length <= 2000) {
      setContent(newContent);
      setContentLength(newContent.length);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(process.env.REACT_APP_SERVICE_ID)
    // console.log(process.env.REACT_APP_TEMPLATE_ID)
    // console.log(process.env.REACT_APP_PUBLICKEY)
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLICKEY)
      .then((response) => {
        alert("성공적으로 이메일이 전송되었습니다.");
        window.location.reload();
      }, (error) => {
        console.log(error);
        alert("이메일 전송이 실패되었습니다.");
      });
  };

  return (
    <div className="inquiry-wrapper">
      <img className="main-image" src={InquiryImage} alt="inquiryImage" />
      <div className="inquiry-title">시공문의</div>
      <section className="inquiry-info">
        <div className="inquiry-info-left">
          <p className="inquiry-info-title">문의 정보</p>
          <p className="inquiry-info-require">• 전체 필수 입력</p>
        </div>
        <div className="inquiry-info-right">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" placeholder='이름을 입력해주세요.' name="name" value={name}
                onChange={(e) => setName(e.target.value)}
                required />
            </div>
            <div className="form-group">
              <label htmlFor="emailLocalPart">이메일</label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="text"
                  id="emailLocalPart"
                  placeholder="이메일을 입력해주세요."
                  name="emailLocalPart"
                  value={emailLocalPart}
                  onChange={(e) => setEmailLocalPart(e.target.value)}
                  style={{ width: '100%' }}
                  required
                />
                <span style={{ margin: '0 5px' }}>@</span>
                <input
                  type="text"
                  id="emailDomainPart"
                  list="emailDomains"
                  placeholder="example.com"
                  name="emailDomainPart"
                  value={emailDomainPart}
                  onChange={(e) => setEmailDomainPart(e.target.value)}
                  style={{ width: '100%' }}
                  required
                />
                <datalist id="emailDomains">
                  <option value="gmail.com">gmail.com</option>
                  <option value="naver.com">naver.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="hanmail.net">hanmail.net</option>
                </datalist>
              </div>
            </div>
            <div className="form-group">
              <label>연락처</label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="text"
                  id="contactPart1"
                  placeholder=""
                  name="contactPart1"
                  value={contactPart1}
                  onChange={(e) => setContactPart1(e.target.value)}
                  style={{ width: '30%' }}
                  required
                />
                <span style={{ margin: '0 5px' }}>-</span>
                <input
                  type="text"
                  id="contactPart2"
                  placeholder=""
                  name="contactPart2"
                  value={contactPart2}
                  onChange={(e) => setContactPart2(e.target.value)}
                  style={{ width: '35%' }}
                  required
                />
                <span style={{ margin: '0 5px' }}>-</span>
                <input
                  type="text"
                  id="contactPart3"
                  placeholder=""
                  name="contactPart3"
                  value={contactPart3}
                  onChange={(e) => setContactPart3(e.target.value)}

                  style={{ width: '35%' }}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category">문의 분류</label>
              <select id="category" name="category" value={category} onChange={handleCategoryChange} required>
                <option value="" disabled>선택하세요</option>
                <option value="건축사업">건축사업</option>
                <option value="리모델링사업">리모델링사업</option>
                <option value="인테리어사업">인테리어사업</option>
                <option value="기타">기타</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="emailTitle">제목</label>
              <div style={{ display: 'flex' }}>
                <input
                  type="text"
                  id="emailTitle"
                  name="emailTitle"
                  value={emailTitle}
                  onChange={(e) => setEmailTitle(e.target.value)}
                  style={{ width: "100%" }}
                  placeholder="제목을 입력해주세요."
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="content">문의 내용</label>
              <textarea
                id="content"
                name="content"
                value={content}
                onChange={handleContentChange}
                placeholder="문의 내용을 입력하세요. (2000자 이내)"
                maxLength="2000"
                rows="10"

                style={{ width: '100%' }}
                required
              />
              <div style={{ textAlign: 'right', marginTop: '5px' }}>{contentLength}/2000</div>
            </div>
            {/*
            <div className="form-group" style={{ marginBottom: '0' }}>
              <label htmlFor="content">파일 첨부</label>
              <div className="inquiry-file-wrapper">
                <span className="inquiry-file-name" >{fileName}</span>
                <input className="inquiry-file-file" id="upload1" type="file" onChange={handleFileChange} />
                <label className="inquiry-file-label" htmlFor="upload1">파일선택</label>
              </div>
            </div>
            */}
            <div className="inquiry-submit-button-wrapper">
              <button type="submit" className="inquiry-submit-button">문의하기</button>
            </div>

          </form>
        </div>
      </section>
    </div>
  );
}


function MobileInquiry() {
  const formRef = useRef();  // 폼 요소를 참조하기 위한 useRef 사용
  const [name, setName] = useState('');
  const [emailLocalPart, setEmailLocalPart] = useState('');
  const [emailDomainPart, setEmailDomainPart] = useState('');
  const [contactPart1, setContactPart1] = useState('');
  const [contactPart2, setContactPart2] = useState('');
  const [contactPart3, setContactPart3] = useState('');
  const [category, setCategory] = useState('');
  const [emailTitle, setEmailTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentLength, setContentLength] = useState(0);

  const handleContentChange = (event) => {
    const newContent = event.target.value;
    if (newContent.length <= 2000) {
      setContent(newContent);
      setContentLength(newContent.length);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLICKEY)
      .then((response) => {
        alert("성공적으로 이메일이 전송되었습니다.");
        window.location.reload();
      }, (error) => {
        console.log(error);
        alert("이메일 전송이 실패되었습니다.");
      });
  };

  return (
    <div className="inquiry-wrapper">
      <img className="main-image" src={InquiryImage} alt="inquiryImage" />
      <div className="inquiry-title">시공문의</div>
      <section className="inquiry-info">
        <p className="inquiry-info-title">문의 정보</p>
        <p className="inquiry-info-require">• 전체 필수 입력</p>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" placeholder='이름을 입력해주세요.' name="name" value={name}
              onChange={(e) => setName(e.target.value)}
              required />
          </div>
          <div className="form-group">
            <label htmlFor="emailLocalPart">이메일</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                id="emailLocalPart"
                placeholder="이메일을 입력해주세요."
                name="emailLocalPart"
                value={emailLocalPart}
                onChange={(e) => setEmailLocalPart(e.target.value)}
                style={{ width: '100%' }}
                required
              />
              <span style={{ margin: '0 5px' }}>@</span>
              <input
                type="text"
                id="emailDomainPart"
                list="emailDomains"
                placeholder="example.com"
                name="emailDomainPart"
                value={emailDomainPart}
                onChange={(e) => setEmailDomainPart(e.target.value)}
                style={{ width: '100%' }}
                required
              />
              <datalist id="emailDomains">
                <option value="gmail.com">gmail.com</option>
                <option value="naver.com">naver.com</option>
                <option value="daum.net">daum.net</option>
                <option value="hanmail.net">hanmail.net</option>
              </datalist>
            </div>
          </div>
          <div className="form-group">
            <label>연락처</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                id="contactPart1"
                placeholder=""
                name="contactPart1"
                value={contactPart1}
                onChange={(e) => setContactPart1(e.target.value)}
                style={{ width: '30%' }}
                required
              />
              <span style={{ margin: '0 5px' }}>-</span>
              <input
                type="text"
                id="contactPart2"
                placeholder=""
                name="contactPart2"
                value={contactPart2}
                onChange={(e) => setContactPart2(e.target.value)}
                style={{ width: '35%' }}
                required
              />
              <span style={{ margin: '0 5px' }}>-</span>
              <input
                type="text"
                id="contactPart3"
                placeholder=""
                name="contactPart3"
                value={contactPart3}
                onChange={(e) => setContactPart3(e.target.value)}

                style={{ width: '35%' }}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="category">문의 분류</label>
            <select id="category" name="category" value={category} onChange={handleCategoryChange} required>
              <option value="" disabled>선택하세요</option>
              <option value="건축사업">건축사업</option>
              <option value="리모델링사업">리모델링사업</option>
              <option value="인테리어사업">인테리어사업</option>
              <option value="기타">기타</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="emailTitle">제목</label>
            <div style={{ display: 'flex' }}>
              <input
                type="text"
                id="emailTitle"
                name="emailTitle"
                value={emailTitle}
                onChange={(e) => setEmailTitle(e.target.value)}
                style={{ width: "100%" }}
                placeholder="제목을 입력해주세요."
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="content">문의 내용</label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={handleContentChange}
              placeholder="문의 내용을 입력하세요. (2000자 이내)"
              maxLength="2000"
              rows="10"

              style={{ width: '100%' }}
              required
            />
            <div style={{ textAlign: 'right', marginTop: '5px' }}>{contentLength}/2000</div>
          </div>
          {/*
          <div className="form-group" style={{ marginBottom: '0' }}>
            <label htmlFor="content">파일 첨부</label>
            <div className="inquiry-file-wrapper">
              <span className="inquiry-file-name" >{fileName}</span>
              <input className="inquiry-file-file" id="upload1" type="file" onChange={handleFileChange} />
              <label className="inquiry-file-label" htmlFor="upload1">파일선택</label>
            </div>
          </div>
          */}
          <div className="inquiry-submit-button-wrapper">
            <button type="submit" className="inquiry-submit-button">문의하기</button>
          </div>

        </form>
      </section>
    </div>
  );
}

export { Inquiry, MobileInquiry }