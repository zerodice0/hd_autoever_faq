import styles from '@/widgets/process_info/ui/process_info.module.css';

import type { ProcessInfoModel } from "@/widgets/process_info/model/process_info_model";

export function ProcessInfoStep(
  {
    className,
    title,
    description,
  }: ProcessInfoModel
) {
  return (
    <li>
      <i className={`${styles.ic} ${styles[className]}`}></i>
      <span>
        <strong>{title}</strong>
        <em>{description}</em>
      </span>
    </li>
  );
}

export function ProcessInfo({ title, processInfoData }: { title: string, processInfoData: ProcessInfoModel[] }) {
  return (
    <>
      <h2 className={styles.heading2}>{title}</h2>
      <ol className={styles.processInfo}>
        {processInfoData.map((data, index) => (
          <ProcessInfoStep key={index} {...data} />
        ))}
      </ol>
    </>
  );
}