import styles from '@/widgets/app_info/ui/app_info.module.css';

export function AppInfo() {
  return (
    <div className={styles.appInfo}>
      <h2>
        <em>기아 비즈 App</em> 지금 만나보세요!
      </h2>
      <a href="https://play.google.com/store/apps/details?id=kor.mop.user.app" 
          target="_blank" className={styles.gp} rel="noreferrer">
        Google Play
      </a>
      <a href="https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794" 
          target="_blank" className={styles.as} rel="noreferrer">
        App Store
      </a>
    </div>
  );
}