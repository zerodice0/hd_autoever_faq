import type { ProcessInfoModel } from "@/widgets/process_info/model/process_info_model";
import '@/widgets/process_info/ui/process_info.css';

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
        <em>{description}</em>
      </span>
    </li>
  );
}

export function ProcessInfo({ title, processInfoData }: { title: string, processInfoData: ProcessInfoModel[] }) {
  return (
    <>
      <h2 className="heading-2">{title}</h2>
      <ol className="process-info">
        {processInfoData.map((data, index) => (
          <ProcessInfoStep key={index} {...data} />
        ))}
      </ol>
    </>
  );
}