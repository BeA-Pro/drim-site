import React, { useState } from 'react'

function Inquiry() {

  const [name, setName] = useState('');
  const [emailLocalPart, setEmailLocalPart] = useState('');
  const [emailDomainPart, setEmailDomainPart] = useState('');
  const [contactPart1, setContactPart1] = useState('');
  const [contactPart2, setContactPart2] = useState('');
  const [contactPart3, setContactPart3] = useState('');

  const [emailTitle, setEmailTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);


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

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = `${emailLocalPart}@${emailDomainPart}`;
    console.log('Submitted email:', email);
    console.log(file);
    // 여기에 폼 제출 로직 추가
  };
  return (
    <div className="inquiry-wrapper">
      <div className="inquiry-title">시공문의</div>
      <section className="inquiry-info">
        <div className="inquiry-info-left">
          <p className="inquiry-info-title">고객 정보</p>
          <p className="inquiry-info-require">• 전체 필수 입력</p>
        </div>
        <div className="inquiry-info-right">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" placeholder='이름을 입력해주세요.' value={name}
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
                  value={contactPart1}
                  onChange={(e) => setContactPart1(e.target.value)}
                  required
                  style={{ width: '30%' }}
                />
                <span style={{ margin: '0 5px' }}>-</span>
                <input
                  type="text"
                  id="contactPart2"
                  placeholder=""
                  value={contactPart2}
                  onChange={(e) => setContactPart2(e.target.value)}
                  required
                  style={{ width: '35%' }}
                />
                <span style={{ margin: '0 5px' }}>-</span>
                <input
                  type="text"
                  id="contactPart3"
                  placeholder=""
                  value={contactPart3}
                  onChange={(e) => setContactPart3(e.target.value)}
                  required
                  style={{ width: '35%' }}
                />
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="inquiry-info">
        <div className="inquiry-info-left">
          <p className="inquiry-info-title">시공 문의 내용</p>
          <p className="inquiry-info-require">• 표시 필수 입력</p>
        </div>
        <div className="inquiry-info-right">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="category">문의 분류 •</label>
              <select id="category" value={category} onChange={handleCategoryChange} required>
                <option value="" disabled>선택하세요</option>
                <option value="건축사업">건축사업</option>
                <option value="리모델링사업">리모델링사업</option>
                <option value="인테리어사업">인테리어사업</option>
                <option value="기타">기타</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="emailTitle">제목 •</label>
              <div style={{ display: 'flex' }}>
                <input
                  type="text"
                  value={emailTitle}
                  onChange={(e) => setEmailTitle(e.target.value)}
                  style={{ width: "100%" }}
                  placeholder="제목을 입력해주세요."
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="content">문의 내용 • </label>
              <textarea
                id="content"
                value={content}
                onChange={handleContentChange}
                placeholder="문의 내용을 입력하세요. (2000자 이내)"
                maxLength="2000"
                rows="10"
                required
                style={{ width: '100%' }}
              />
              <div style={{ textAlign: 'right', marginTop: '5px' }}>{contentLength}/2000</div>
            </div>
            <div className="form-group">
              <label htmlFor="file">파일 첨부</label>
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,image/*"
                required
              />
            </div>
          </form>
        </div>
      </section>
      <button>제출</button>
    </div>
  )
}

function MobileInquiry() {
  return (
    <div className="inquiry-wrapper">Inquiry</div>
  )
}

export { Inquiry, MobileInquiry }