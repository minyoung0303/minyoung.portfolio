import { useState } from 'react';
import './css/Projects.css';

function Projects() {
  const [preview, setPreview] = useState({ image: null, projectIndex: null });

  const base = import.meta.env.BASE_URL;

  const openImageModal = (img, idx) =>
    setPreview({ image: img, projectIndex: idx });
  const closeImageModal = () =>
    setPreview({ image: null, projectIndex: null });

  const projects = [
    {
      title: '예약보드 (YeyakBo)',
      subtitle: '프리랜서 프로젝트 · 스크린골프 매장 실사용 중',
      period: '2026.08 — 운영 중',
      type: 'Solo',
      summary:
        '스크린골프 매장 카운터용 예약 관리 프로그램입니다. 수기 장부에서 생기던 종료 시각 오산과 타석 중복 예약을 자동 계산과 저장 단계 차단으로 해결했습니다.',
      role: [
        { label: '예약 계산', text: '인원 × 게임 수로 종료 시각 자동 계산' },
        { label: '중복 차단', text: '겹침 검사와 저장을 한 트랜잭션으로 처리' },
        { label: '실시간 동기화', text: '카운터 PC를 매장 내 서버로 두고 SSE로 폰·태블릿에 전파' },
        { label: '접근 제어', text: 'PIN(scrypt 해시) · 시도 제한 · CSRF 차단' },
        { label: 'AI 활용', text: 'AI로 구현하고 자동 점검 80항목으로 검증' },
      ],
      result: [
        '매장 실사용 중 · 직원 3명, 하루 약 20팀 이상',
        '동시 저장 5회 중 1건만 성공 검증',
        'push마다 CI 검증, 태그 푸시 시 설치파일 자동 릴리스',
      ],
      tech: ['TypeScript', 'Node.js', 'node:sqlite', 'SSE', 'React', 'Electron', 'Vite', 'GitHub Actions'],
      images: [
        `${base}images/yeyakbo-board.png`,
        `${base}images/yeyakbo-new-reservation.png`,
        `${base}images/yeyakbo-phone-slots.png`,
      ],
      solvingCase: 'Case 05',
      github: 'https://github.com/minyoung0303/screengolf-reservation-board',
      release:
        'https://github.com/minyoung0303/screengolf-reservation-board/releases/latest',
    },
    {
      title: '냉장고 해방일지',
      subtitle: '팀 프로젝트 · 제5회 K-Digital Hackathon',
      period: '2023.09 — 2023.11',
      type: 'Team',
      summary:
        '영수증·냉장고 재료 관리를 기반으로 레시피를 공유하는 웹 서비스입니다. 백엔드에서 ERD 설계와 인증을 맡았습니다.',
      role: [
        '백엔드 ERD 및 아키텍처 설계 (팀 리뷰를 거쳐 개정)',
        'JWT 기반 인증/인가 구현으로 사용자별 데이터 접근 범위 분리',
      ],
      result: '해커톤 기간 안에 ERD 설계와 인증 구현을 마쳐 MVP 완성에 기여',
      tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'JWT', 'Docker', 'AWS'],
      images: [
        `${base}images/ndjango-erd1.png`,
        `${base}images/ndjango-architecture.png`,
        `${base}images/ndjango-erd-final.png`,
      ],
      github: 'https://github.com/minyoung0303/KDT_Hackathon',
    },
    {
      title: 'Chatbot 중고 거래 플랫폼',
      subtitle: '팀 프로젝트 · ESTsoft 백엔드 캠프',
      period: '2023.07 — 2023.08',
      type: 'Team',
      summary:
        'AI 챗봇이 상담을 도와주는 중고 거래 서비스입니다. 팀 리더로서 형상 관리와 백엔드 안정화를 함께 맡았습니다.',
      role: [
        '팀 리더 · GitHub 브랜치 전략 수립과 병합 충돌 정리, 코드 리뷰 진행',
        '실시간 채팅 및 거래 API 안정화',
        'WebSocket 통합과 캐싱 레이어 도입, 반복 조회 쿼리에 인덱스 추가',
      ],
      result:
        '반복 조회를 캐시로, 대기 시간을 WebSocket으로 분리하면서 "어디를 캐시하고 어디를 쿼리로 풀어야 하는지"에 대한 판단 기준을 얻었습니다.',
      tech: ['Django', 'PostgreSQL', 'Python', 'WebSocket', 'OpenAI API', 'Docker', 'AWS'],
      images: [
        `${base}images/preview-jhc1.png`,
        `${base}images/preview-jhc2.png`,
      ],
      github: 'https://github.com/minyoung0303/JHC',
    },
    {
      title: 'MYLOG',
      subtitle: '팀 프로젝트',
      period: '2023.06 — 2023.07',
      type: 'Team',
      summary:
        '개인 일정과 기록을 관리하는 웹 블로그 애플리케이션입니다. 데이터가 쌓이며 느려진 검색을 쿼리 관점에서 개선했습니다.',
      role: [
        '팀 리더 · GitHub 버전 관리 및 운영 중 Hotfix 대응',
        '검색 기능 구현 및 느린 요청 원인 추적',
        '실행 계획을 확인해 LIKE 조회를 PostgreSQL Full-Text Search로 전환',
        '무거운 단일 쿼리를 목적별로 분할해 인덱스를 타도록 재작성',
      ],
      result: '검색 응답 속도 2배 향상',
      solvingCase: 'Case 01',
      tech: ['Python', 'Django', 'PostgreSQL', 'Full-Text Search', 'JavaScript', 'Docker'],
      images: [],
      github: 'https://github.com/minyoung0303/MYLOG',
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">주요 프로젝트</h2>
          <p className="section-lead">
            데이터 구조 설계와 API 구현, 성능 개선을 직접 담당한
            프로젝트입니다. 각 항목은 무엇을 맡았고 무엇이 달라졌는지를
            기준으로 정리했습니다.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, idx) => (
            <article className="project-card" key={idx}>
              <header className="project-head">
                <div className="project-head-main">
                  <span className={`project-type ${project.type.toLowerCase()}`}>
                    {project.type}
                  </span>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
                <span className="project-period">{project.period}</span>
              </header>

              <p className="project-summary">{project.summary}</p>

              <div className="project-body">
                <div className="project-role">
                  <h4 className="project-label">담당 역할</h4>
                  <ul>
                    {project.role.map((item, i) =>
                      typeof item === 'string' ? (
                        <li key={i}>{item}</li>
                      ) : (
                        <li key={i}>
                          <strong className="project-role-label">
                            {item.label}
                          </strong>
                          {item.text}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="project-result">
                  <h4 className="project-label">성과</h4>
                  {Array.isArray(project.result) ? (
                    <ul className="project-result-list">
                      {project.result.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{project.result}</p>
                  )}
                  {project.solvingCase && (
                    <a className="project-solving-link" href="#problem-solving">
                      문제 해결 경험 {project.solvingCase}에서 원인 분석 과정
                      보기 →
                    </a>
                  )}
                </div>
              </div>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fa-brands fa-github" aria-hidden="true"></i>
                  <span>GitHub</span>
                </a>
                {project.release && (
                  <a
                    href={project.release}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="fa-solid fa-download" aria-hidden="true"></i>
                    <span>설치파일</span>
                  </a>
                )}
              </div>

              {project.images.length > 0 && (
                <div className="project-thumbs">
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      className="project-thumb"
                      onClick={() => openImageModal(img, idx)}
                      aria-label={`${project.title} 이미지 ${i + 1} 확대`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}

              {preview.image && preview.projectIndex === idx && (
                <div className="image-preview-overlay" onClick={closeImageModal}>
                  <div
                    className="image-preview-box"
                    onClick={(e) => e.stopPropagation()}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Project Image Preview"
                  >
                    <button
                      type="button"
                      className="image-preview-close"
                      onClick={closeImageModal}
                      aria-label="Close preview"
                    >
                      ×
                    </button>
                    <img
                      src={preview.image}
                      alt={`${project.title} preview`}
                      className="image-preview-img"
                    />
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
