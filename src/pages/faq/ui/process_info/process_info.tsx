import type { ProcessInfoModel } from "@/pages/faq/model/process_info_model";
import { ProcessInfoData } from "@/pages/faq/model/process_info_data";
import '@/pages/faq/ui/process_info/process_info.css';

export function ProcessInfoStep(
  {
    className,
    title,
    description,
  }: ProcessInfoModel
) {
  return (
    <li>
      <i className={className}></i>
      <span>
        <strong>{title}</strong>
      </span>
      <em>{description}</em>
    </li>
  );
}

export function ProcessInfo() {
  return (
    <>
      <h2 className="heading-2">이용 프로세스 안내</h2>
      <ol className="process-info">
        {ProcessInfoData.map((processInfo) => (
          <ProcessInfoStep key={processInfo.title} {...processInfo} />
        ))}
      </ol>
    </>
  );
}