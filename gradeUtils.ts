export function computeAverage(
  prelim: number,
  midterm: number,
  final: number
): number {
  return (prelim + midterm + final) / 3;
}

export enum EnrollmentStatus {
  Passing = "PASSING",
  Probation = "PROBATION"
}

export default function getStatus(
  average: number
): EnrollmentStatus {
  return average >= 75
    ? EnrollmentStatus.Passing
    : EnrollmentStatus.Probation;
}