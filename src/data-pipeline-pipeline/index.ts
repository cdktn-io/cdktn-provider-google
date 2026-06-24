/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataPipelinePipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#deletion_policy DataPipelinePipeline#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#display_name DataPipelinePipeline#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#id DataPipelinePipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * "The pipeline name. For example': 'projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID."
  * "- PROJECT_ID can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see Identifying projects."
  * "LOCATION_ID is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling google.cloud.location.Locations.ListLocations. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in App Engine regions."
  * "PIPELINE_ID is the ID of the pipeline. Must be unique for the selected project and location."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#name DataPipelinePipeline#name}
  */
  readonly name: string;
  /**
  * The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation.
  * An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#pipeline_sources DataPipelinePipeline#pipeline_sources}
  */
  readonly pipelineSources?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#project DataPipelinePipeline#project}
  */
  readonly project?: string;
  /**
  * A reference to the region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#region DataPipelinePipeline#region}
  */
  readonly region?: string;
  /**
  * Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#scheduler_service_account_email DataPipelinePipeline#scheduler_service_account_email}
  */
  readonly schedulerServiceAccountEmail?: string;
  /**
  * The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through pipelines.patch requests.
  * https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#state Possible values: ["STATE_UNSPECIFIED", "STATE_RESUMING", "STATE_ACTIVE", "STATE_STOPPING", "STATE_ARCHIVED", "STATE_PAUSED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#state DataPipelinePipeline#state}
  */
  readonly state: string;
  /**
  * The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.
  * https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#pipelinetype Possible values: ["PIPELINE_TYPE_UNSPECIFIED", "PIPELINE_TYPE_BATCH", "PIPELINE_TYPE_STREAMING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#type DataPipelinePipeline#type}
  */
  readonly type: string;
  /**
  * schedule_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#schedule_info DataPipelinePipeline#schedule_info}
  */
  readonly scheduleInfo?: DataPipelinePipelineScheduleInfo;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#timeouts DataPipelinePipeline#timeouts}
  */
  readonly timeouts?: DataPipelinePipelineTimeouts;
  /**
  * workload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#workload DataPipelinePipeline#workload}
  */
  readonly workload?: DataPipelinePipelineWorkload;
}
export interface DataPipelinePipelineScheduleInfo {
  /**
  * Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#schedule DataPipelinePipeline#schedule}
  */
  readonly schedule?: string;
  /**
  * Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#time_zone DataPipelinePipeline#time_zone}
  */
  readonly timeZone?: string;
}

export function dataPipelinePipelineScheduleInfoToTerraform(struct?: DataPipelinePipelineScheduleInfoOutputReference | DataPipelinePipelineScheduleInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schedule: cdktn.stringToTerraform(struct!.schedule),
    time_zone: cdktn.stringToTerraform(struct!.timeZone),
  }
}


export function dataPipelinePipelineScheduleInfoToHclTerraform(struct?: DataPipelinePipelineScheduleInfoOutputReference | DataPipelinePipelineScheduleInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schedule: {
      value: cdktn.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktn.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPipelinePipelineScheduleInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPipelinePipelineScheduleInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPipelinePipelineScheduleInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schedule = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schedule = value.schedule;
      this._timeZone = value.timeZone;
    }
  }

  // next_job_time - computed: true, optional: false, required: false
  public get nextJobTime() {
    return this.getStringAttribute('next_job_time');
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface DataPipelinePipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#create DataPipelinePipeline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#delete DataPipelinePipeline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}
  */
  readonly update?: string;
}

export function dataPipelinePipelineTimeoutsToTerraform(struct?: DataPipelinePipelineTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function dataPipelinePipelineTimeoutsToHclTerraform(struct?: DataPipelinePipelineTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPipelinePipelineTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPipelinePipelineTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPipelinePipelineTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment {
  /**
  * Additional experiment flags for the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#additional_experiments DataPipelinePipeline#additional_experiments}
  */
  readonly additionalExperiments?: string[];
  /**
  * Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
  * 'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
  * 'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#additional_user_labels DataPipelinePipeline#additional_user_labels}
  */
  readonly additionalUserLabels?: { [key: string]: string };
  /**
  * Whether to enable Streaming Engine for the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#enable_streaming_engine DataPipelinePipeline#enable_streaming_engine}
  */
  readonly enableStreamingEngine?: boolean | cdktn.IResolvable;
  /**
  * Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs
  * https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexResourceSchedulingGoal Possible values: ["FLEXRS_UNSPECIFIED", "FLEXRS_SPEED_OPTIMIZED", "FLEXRS_COST_OPTIMIZED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#flexrs_goal DataPipelinePipeline#flexrs_goal}
  */
  readonly flexrsGoal?: string;
  /**
  * Configuration for VM IPs.
  * https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#ip_configuration DataPipelinePipeline#ip_configuration}
  */
  readonly ipConfiguration?: string;
  /**
  * 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#kms_key_name DataPipelinePipeline#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * The machine type to use for the job. Defaults to the value from the template if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#machine_type DataPipelinePipeline#machine_type}
  */
  readonly machineType?: string;
  /**
  * The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#max_workers DataPipelinePipeline#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#network DataPipelinePipeline#network}
  */
  readonly network?: string;
  /**
  * The initial number of Compute Engine instances for the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#num_workers DataPipelinePipeline#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * The email address of the service account to run the job as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#service_account_email DataPipelinePipeline#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#subnetwork DataPipelinePipeline#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#temp_location DataPipelinePipeline#temp_location}
  */
  readonly tempLocation?: string;
  /**
  * The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#worker_region DataPipelinePipeline#worker_region}
  */
  readonly workerRegion?: string;
  /**
  * The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#worker_zone DataPipelinePipeline#worker_zone}
  */
  readonly workerZone?: string;
  /**
  * The Compute Engine availability zone for launching worker instances to run your pipeline. In the future, workerZone will take precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#zone DataPipelinePipeline#zone}
  */
  readonly zone?: string;
}

export function dataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentToTerraform(struct?: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference | DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_experiments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.additionalExperiments),
    additional_user_labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.additionalUserLabels),
    enable_streaming_engine: cdktn.booleanToTerraform(struct!.enableStreamingEngine),
    flexrs_goal: cdktn.stringToTerraform(struct!.flexrsGoal),
    ip_configuration: cdktn.stringToTerraform(struct!.ipConfiguration),
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
    machine_type: cdktn.stringToTerraform(struct!.machineType),
    max_workers: cdktn.numberToTerraform(struct!.maxWorkers),
    network: cdktn.stringToTerraform(struct!.network),
    num_workers: cdktn.numberToTerraform(struct!.numWorkers),
    service_account_email: cdktn.stringToTerraform(struct!.serviceAccountEmail),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
    temp_location: cdktn.stringToTerraform(struct!.tempLocation),
    worker_region: cdktn.stringToTerraform(struct!.workerRegion),
    worker_zone: cdktn.stringToTerraform(struct!.workerZone),
    zone: cdktn.stringToTerraform(struct!.zone),
  }
}


export function dataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentToHclTerraform(struct?: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference | DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_experiments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.additionalExperiments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_user_labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.additionalUserLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enable_streaming_engine: {
      value: cdktn.booleanToHclTerraform(struct!.enableStreamingEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flexrs_goal: {
      value: cdktn.stringToHclTerraform(struct!.flexrsGoal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_configuration: {
      value: cdktn.stringToHclTerraform(struct!.ipConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktn.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_workers: {
      value: cdktn.numberToHclTerraform(struct!.maxWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_workers: {
      value: cdktn.numberToHclTerraform(struct!.numWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktn.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temp_location: {
      value: cdktn.stringToHclTerraform(struct!.tempLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_region: {
      value: cdktn.stringToHclTerraform(struct!.workerRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_zone: {
      value: cdktn.stringToHclTerraform(struct!.workerZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktn.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalExperiments !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalExperiments = this._additionalExperiments;
    }
    if (this._additionalUserLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalUserLabels = this._additionalUserLabels;
    }
    if (this._enableStreamingEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStreamingEngine = this._enableStreamingEngine;
    }
    if (this._flexrsGoal !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexrsGoal = this._flexrsGoal;
    }
    if (this._ipConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfiguration = this._ipConfiguration;
    }
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._maxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkers = this._maxWorkers;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._numWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numWorkers = this._numWorkers;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._tempLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempLocation = this._tempLocation;
    }
    if (this._workerRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerRegion = this._workerRegion;
    }
    if (this._workerZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerZone = this._workerZone;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalExperiments = undefined;
      this._additionalUserLabels = undefined;
      this._enableStreamingEngine = undefined;
      this._flexrsGoal = undefined;
      this._ipConfiguration = undefined;
      this._kmsKeyName = undefined;
      this._machineType = undefined;
      this._maxWorkers = undefined;
      this._network = undefined;
      this._numWorkers = undefined;
      this._serviceAccountEmail = undefined;
      this._subnetwork = undefined;
      this._tempLocation = undefined;
      this._workerRegion = undefined;
      this._workerZone = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalExperiments = value.additionalExperiments;
      this._additionalUserLabels = value.additionalUserLabels;
      this._enableStreamingEngine = value.enableStreamingEngine;
      this._flexrsGoal = value.flexrsGoal;
      this._ipConfiguration = value.ipConfiguration;
      this._kmsKeyName = value.kmsKeyName;
      this._machineType = value.machineType;
      this._maxWorkers = value.maxWorkers;
      this._network = value.network;
      this._numWorkers = value.numWorkers;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._subnetwork = value.subnetwork;
      this._tempLocation = value.tempLocation;
      this._workerRegion = value.workerRegion;
      this._workerZone = value.workerZone;
      this._zone = value.zone;
    }
  }

  // additional_experiments - computed: false, optional: true, required: false
  private _additionalExperiments?: string[]; 
  public get additionalExperiments() {
    return this.getListAttribute('additional_experiments');
  }
  public set additionalExperiments(value: string[]) {
    this._additionalExperiments = value;
  }
  public resetAdditionalExperiments() {
    this._additionalExperiments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExperimentsInput() {
    return this._additionalExperiments;
  }

  // additional_user_labels - computed: false, optional: true, required: false
  private _additionalUserLabels?: { [key: string]: string }; 
  public get additionalUserLabels() {
    return this.getStringMapAttribute('additional_user_labels');
  }
  public set additionalUserLabels(value: { [key: string]: string }) {
    this._additionalUserLabels = value;
  }
  public resetAdditionalUserLabels() {
    this._additionalUserLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalUserLabelsInput() {
    return this._additionalUserLabels;
  }

  // enable_streaming_engine - computed: false, optional: true, required: false
  private _enableStreamingEngine?: boolean | cdktn.IResolvable; 
  public get enableStreamingEngine() {
    return this.getBooleanAttribute('enable_streaming_engine');
  }
  public set enableStreamingEngine(value: boolean | cdktn.IResolvable) {
    this._enableStreamingEngine = value;
  }
  public resetEnableStreamingEngine() {
    this._enableStreamingEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStreamingEngineInput() {
    return this._enableStreamingEngine;
  }

  // flexrs_goal - computed: false, optional: true, required: false
  private _flexrsGoal?: string; 
  public get flexrsGoal() {
    return this.getStringAttribute('flexrs_goal');
  }
  public set flexrsGoal(value: string) {
    this._flexrsGoal = value;
  }
  public resetFlexrsGoal() {
    this._flexrsGoal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexrsGoalInput() {
    return this._flexrsGoal;
  }

  // ip_configuration - computed: false, optional: true, required: false
  private _ipConfiguration?: string; 
  public get ipConfiguration() {
    return this.getStringAttribute('ip_configuration');
  }
  public set ipConfiguration(value: string) {
    this._ipConfiguration = value;
  }
  public resetIpConfiguration() {
    this._ipConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration;
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // num_workers - computed: false, optional: true, required: false
  private _numWorkers?: number; 
  public get numWorkers() {
    return this.getNumberAttribute('num_workers');
  }
  public set numWorkers(value: number) {
    this._numWorkers = value;
  }
  public resetNumWorkers() {
    this._numWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWorkersInput() {
    return this._numWorkers;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // temp_location - computed: false, optional: true, required: false
  private _tempLocation?: string; 
  public get tempLocation() {
    return this.getStringAttribute('temp_location');
  }
  public set tempLocation(value: string) {
    this._tempLocation = value;
  }
  public resetTempLocation() {
    this._tempLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempLocationInput() {
    return this._tempLocation;
  }

  // worker_region - computed: false, optional: true, required: false
  private _workerRegion?: string; 
  public get workerRegion() {
    return this.getStringAttribute('worker_region');
  }
  public set workerRegion(value: string) {
    this._workerRegion = value;
  }
  public resetWorkerRegion() {
    this._workerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerRegionInput() {
    return this._workerRegion;
  }

  // worker_zone - computed: false, optional: true, required: false
  private _workerZone?: string; 
  public get workerZone() {
    return this.getStringAttribute('worker_zone');
  }
  public set workerZone(value: string) {
    this._workerZone = value;
  }
  public resetWorkerZone() {
    this._workerZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerZoneInput() {
    return this._workerZone;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter {
  /**
  * Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#container_spec_gcs_path DataPipelinePipeline#container_spec_gcs_path}
  */
  readonly containerSpecGcsPath?: string;
  /**
  * The job name to use for the created job. For an update job request, the job name should be the same as the existing running job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#job_name DataPipelinePipeline#job_name}
  */
  readonly jobName: string;
  /**
  * Launch options for this Flex Template job. This is a common set of options across languages and templates. This should not be used to pass job parameters.
  * 'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#launch_options DataPipelinePipeline#launch_options}
  */
  readonly launchOptions?: { [key: string]: string };
  /**
  * 'The parameters for the Flex Template. Example: {"numWorkers":"5"}'
  * 'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#parameters DataPipelinePipeline#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * 'Use this to pass transform name mappings for streaming update jobs. Example: {"oldTransformName":"newTransformName",...}'
  * 'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#transform_name_mappings DataPipelinePipeline#transform_name_mappings}
  */
  readonly transformNameMappings?: { [key: string]: string };
  /**
  * Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}
  */
  readonly update?: boolean | cdktn.IResolvable;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#environment DataPipelinePipeline#environment}
  */
  readonly environment?: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment;
}

export function dataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterToTerraform(struct?: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference | DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_spec_gcs_path: cdktn.stringToTerraform(struct!.containerSpecGcsPath),
    job_name: cdktn.stringToTerraform(struct!.jobName),
    launch_options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.launchOptions),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    transform_name_mappings: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.transformNameMappings),
    update: cdktn.booleanToTerraform(struct!.update),
    environment: dataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentToTerraform(struct!.environment),
  }
}


export function dataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterToHclTerraform(struct?: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference | DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_spec_gcs_path: {
      value: cdktn.stringToHclTerraform(struct!.containerSpecGcsPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_name: {
      value: cdktn.stringToHclTerraform(struct!.jobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_options: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.launchOptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    transform_name_mappings: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.transformNameMappings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    update: {
      value: cdktn.booleanToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment: {
      value: dataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentToHclTerraform(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerSpecGcsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerSpecGcsPath = this._containerSpecGcsPath;
    }
    if (this._jobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobName = this._jobName;
    }
    if (this._launchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchOptions = this._launchOptions;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._transformNameMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformNameMappings = this._transformNameMappings;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerSpecGcsPath = undefined;
      this._jobName = undefined;
      this._launchOptions = undefined;
      this._parameters = undefined;
      this._transformNameMappings = undefined;
      this._update = undefined;
      this._environment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerSpecGcsPath = value.containerSpecGcsPath;
      this._jobName = value.jobName;
      this._launchOptions = value.launchOptions;
      this._parameters = value.parameters;
      this._transformNameMappings = value.transformNameMappings;
      this._update = value.update;
      this._environment.internalValue = value.environment;
    }
  }

  // container_spec_gcs_path - computed: false, optional: true, required: false
  private _containerSpecGcsPath?: string; 
  public get containerSpecGcsPath() {
    return this.getStringAttribute('container_spec_gcs_path');
  }
  public set containerSpecGcsPath(value: string) {
    this._containerSpecGcsPath = value;
  }
  public resetContainerSpecGcsPath() {
    this._containerSpecGcsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSpecGcsPathInput() {
    return this._containerSpecGcsPath;
  }

  // job_name - computed: false, optional: false, required: true
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // launch_options - computed: false, optional: true, required: false
  private _launchOptions?: { [key: string]: string }; 
  public get launchOptions() {
    return this.getStringMapAttribute('launch_options');
  }
  public set launchOptions(value: { [key: string]: string }) {
    this._launchOptions = value;
  }
  public resetLaunchOptions() {
    this._launchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchOptionsInput() {
    return this._launchOptions;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // transform_name_mappings - computed: false, optional: true, required: false
  private _transformNameMappings?: { [key: string]: string }; 
  public get transformNameMappings() {
    return this.getStringMapAttribute('transform_name_mappings');
  }
  public set transformNameMappings(value: { [key: string]: string }) {
    this._transformNameMappings = value;
  }
  public resetTransformNameMappings() {
    this._transformNameMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformNameMappingsInput() {
    return this._transformNameMappings;
  }

  // update - computed: false, optional: true, required: false
  private _update?: boolean | cdktn.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktn.IResolvable) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }
}
export interface DataPipelinePipelineWorkloadDataflowFlexTemplateRequest {
  /**
  * The regional endpoint to which to direct the request. For example, us-central1, us-west1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#location DataPipelinePipeline#location}
  */
  readonly location: string;
  /**
  * The ID of the Cloud Platform project that the job belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#project_id DataPipelinePipeline#project_id}
  */
  readonly projectId: string;
  /**
  * If true, the request is validated but not actually executed. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#validate_only DataPipelinePipeline#validate_only}
  */
  readonly validateOnly?: boolean | cdktn.IResolvable;
  /**
  * launch_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#launch_parameter DataPipelinePipeline#launch_parameter}
  */
  readonly launchParameter: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter;
}

export function dataPipelinePipelineWorkloadDataflowFlexTemplateRequestToTerraform(struct?: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference | DataPipelinePipelineWorkloadDataflowFlexTemplateRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    location: cdktn.stringToTerraform(struct!.location),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    validate_only: cdktn.booleanToTerraform(struct!.validateOnly),
    launch_parameter: dataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterToTerraform(struct!.launchParameter),
  }
}


export function dataPipelinePipelineWorkloadDataflowFlexTemplateRequestToHclTerraform(struct?: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference | DataPipelinePipelineWorkloadDataflowFlexTemplateRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate_only: {
      value: cdktn.booleanToHclTerraform(struct!.validateOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    launch_parameter: {
      value: dataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterToHclTerraform(struct!.launchParameter),
      isBlock: true,
      type: "list",
      storageClassType: "DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPipelinePipelineWorkloadDataflowFlexTemplateRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._validateOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateOnly = this._validateOnly;
    }
    if (this._launchParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchParameter = this._launchParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPipelinePipelineWorkloadDataflowFlexTemplateRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._projectId = undefined;
      this._validateOnly = undefined;
      this._launchParameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._projectId = value.projectId;
      this._validateOnly = value.validateOnly;
      this._launchParameter.internalValue = value.launchParameter;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // validate_only - computed: false, optional: true, required: false
  private _validateOnly?: boolean | cdktn.IResolvable; 
  public get validateOnly() {
    return this.getBooleanAttribute('validate_only');
  }
  public set validateOnly(value: boolean | cdktn.IResolvable) {
    this._validateOnly = value;
  }
  public resetValidateOnly() {
    this._validateOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateOnlyInput() {
    return this._validateOnly;
  }

  // launch_parameter - computed: false, optional: false, required: true
  private _launchParameter = new DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference(this, "launch_parameter");
  public get launchParameter() {
    return this._launchParameter;
  }
  public putLaunchParameter(value: DataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter) {
    this._launchParameter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchParameterInput() {
    return this._launchParameter.internalValue;
  }
}
export interface DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment {
  /**
  * Additional experiment flags for the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#additional_experiments DataPipelinePipeline#additional_experiments}
  */
  readonly additionalExperiments?: string[];
  /**
  * Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
  * 'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
  * 'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#additional_user_labels DataPipelinePipeline#additional_user_labels}
  */
  readonly additionalUserLabels?: { [key: string]: string };
  /**
  * Whether to bypass the safety checks for the job's temporary directory. Use with caution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#bypass_temp_dir_validation DataPipelinePipeline#bypass_temp_dir_validation}
  */
  readonly bypassTempDirValidation?: boolean | cdktn.IResolvable;
  /**
  * Whether to enable Streaming Engine for the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#enable_streaming_engine DataPipelinePipeline#enable_streaming_engine}
  */
  readonly enableStreamingEngine?: boolean | cdktn.IResolvable;
  /**
  * Configuration for VM IPs.
  * https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#ip_configuration DataPipelinePipeline#ip_configuration}
  */
  readonly ipConfiguration?: string;
  /**
  * 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#kms_key_name DataPipelinePipeline#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * The machine type to use for the job. Defaults to the value from the template if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#machine_type DataPipelinePipeline#machine_type}
  */
  readonly machineType?: string;
  /**
  * The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#max_workers DataPipelinePipeline#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#network DataPipelinePipeline#network}
  */
  readonly network?: string;
  /**
  * The initial number of Compute Engine instances for the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#num_workers DataPipelinePipeline#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * The email address of the service account to run the job as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#service_account_email DataPipelinePipeline#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#subnetwork DataPipelinePipeline#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#temp_location DataPipelinePipeline#temp_location}
  */
  readonly tempLocation?: string;
  /**
  * The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#worker_region DataPipelinePipeline#worker_region}
  */
  readonly workerRegion?: string;
  /**
  * The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#worker_zone DataPipelinePipeline#worker_zone}
  */
  readonly workerZone?: string;
  /**
  * The Compute Engine availability zone for launching worker instances to run your pipeline. In the future, workerZone will take precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#zone DataPipelinePipeline#zone}
  */
  readonly zone?: string;
}

export function dataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentToTerraform(struct?: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference | DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_experiments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.additionalExperiments),
    additional_user_labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.additionalUserLabels),
    bypass_temp_dir_validation: cdktn.booleanToTerraform(struct!.bypassTempDirValidation),
    enable_streaming_engine: cdktn.booleanToTerraform(struct!.enableStreamingEngine),
    ip_configuration: cdktn.stringToTerraform(struct!.ipConfiguration),
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
    machine_type: cdktn.stringToTerraform(struct!.machineType),
    max_workers: cdktn.numberToTerraform(struct!.maxWorkers),
    network: cdktn.stringToTerraform(struct!.network),
    num_workers: cdktn.numberToTerraform(struct!.numWorkers),
    service_account_email: cdktn.stringToTerraform(struct!.serviceAccountEmail),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
    temp_location: cdktn.stringToTerraform(struct!.tempLocation),
    worker_region: cdktn.stringToTerraform(struct!.workerRegion),
    worker_zone: cdktn.stringToTerraform(struct!.workerZone),
    zone: cdktn.stringToTerraform(struct!.zone),
  }
}


export function dataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentToHclTerraform(struct?: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference | DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_experiments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.additionalExperiments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_user_labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.additionalUserLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    bypass_temp_dir_validation: {
      value: cdktn.booleanToHclTerraform(struct!.bypassTempDirValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_streaming_engine: {
      value: cdktn.booleanToHclTerraform(struct!.enableStreamingEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_configuration: {
      value: cdktn.stringToHclTerraform(struct!.ipConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktn.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_workers: {
      value: cdktn.numberToHclTerraform(struct!.maxWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_workers: {
      value: cdktn.numberToHclTerraform(struct!.numWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktn.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temp_location: {
      value: cdktn.stringToHclTerraform(struct!.tempLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_region: {
      value: cdktn.stringToHclTerraform(struct!.workerRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_zone: {
      value: cdktn.stringToHclTerraform(struct!.workerZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktn.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalExperiments !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalExperiments = this._additionalExperiments;
    }
    if (this._additionalUserLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalUserLabels = this._additionalUserLabels;
    }
    if (this._bypassTempDirValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassTempDirValidation = this._bypassTempDirValidation;
    }
    if (this._enableStreamingEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStreamingEngine = this._enableStreamingEngine;
    }
    if (this._ipConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfiguration = this._ipConfiguration;
    }
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._maxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkers = this._maxWorkers;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._numWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numWorkers = this._numWorkers;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._tempLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempLocation = this._tempLocation;
    }
    if (this._workerRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerRegion = this._workerRegion;
    }
    if (this._workerZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerZone = this._workerZone;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalExperiments = undefined;
      this._additionalUserLabels = undefined;
      this._bypassTempDirValidation = undefined;
      this._enableStreamingEngine = undefined;
      this._ipConfiguration = undefined;
      this._kmsKeyName = undefined;
      this._machineType = undefined;
      this._maxWorkers = undefined;
      this._network = undefined;
      this._numWorkers = undefined;
      this._serviceAccountEmail = undefined;
      this._subnetwork = undefined;
      this._tempLocation = undefined;
      this._workerRegion = undefined;
      this._workerZone = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalExperiments = value.additionalExperiments;
      this._additionalUserLabels = value.additionalUserLabels;
      this._bypassTempDirValidation = value.bypassTempDirValidation;
      this._enableStreamingEngine = value.enableStreamingEngine;
      this._ipConfiguration = value.ipConfiguration;
      this._kmsKeyName = value.kmsKeyName;
      this._machineType = value.machineType;
      this._maxWorkers = value.maxWorkers;
      this._network = value.network;
      this._numWorkers = value.numWorkers;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._subnetwork = value.subnetwork;
      this._tempLocation = value.tempLocation;
      this._workerRegion = value.workerRegion;
      this._workerZone = value.workerZone;
      this._zone = value.zone;
    }
  }

  // additional_experiments - computed: false, optional: true, required: false
  private _additionalExperiments?: string[]; 
  public get additionalExperiments() {
    return this.getListAttribute('additional_experiments');
  }
  public set additionalExperiments(value: string[]) {
    this._additionalExperiments = value;
  }
  public resetAdditionalExperiments() {
    this._additionalExperiments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExperimentsInput() {
    return this._additionalExperiments;
  }

  // additional_user_labels - computed: false, optional: true, required: false
  private _additionalUserLabels?: { [key: string]: string }; 
  public get additionalUserLabels() {
    return this.getStringMapAttribute('additional_user_labels');
  }
  public set additionalUserLabels(value: { [key: string]: string }) {
    this._additionalUserLabels = value;
  }
  public resetAdditionalUserLabels() {
    this._additionalUserLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalUserLabelsInput() {
    return this._additionalUserLabels;
  }

  // bypass_temp_dir_validation - computed: false, optional: true, required: false
  private _bypassTempDirValidation?: boolean | cdktn.IResolvable; 
  public get bypassTempDirValidation() {
    return this.getBooleanAttribute('bypass_temp_dir_validation');
  }
  public set bypassTempDirValidation(value: boolean | cdktn.IResolvable) {
    this._bypassTempDirValidation = value;
  }
  public resetBypassTempDirValidation() {
    this._bypassTempDirValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassTempDirValidationInput() {
    return this._bypassTempDirValidation;
  }

  // enable_streaming_engine - computed: false, optional: true, required: false
  private _enableStreamingEngine?: boolean | cdktn.IResolvable; 
  public get enableStreamingEngine() {
    return this.getBooleanAttribute('enable_streaming_engine');
  }
  public set enableStreamingEngine(value: boolean | cdktn.IResolvable) {
    this._enableStreamingEngine = value;
  }
  public resetEnableStreamingEngine() {
    this._enableStreamingEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStreamingEngineInput() {
    return this._enableStreamingEngine;
  }

  // ip_configuration - computed: false, optional: true, required: false
  private _ipConfiguration?: string; 
  public get ipConfiguration() {
    return this.getStringAttribute('ip_configuration');
  }
  public set ipConfiguration(value: string) {
    this._ipConfiguration = value;
  }
  public resetIpConfiguration() {
    this._ipConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration;
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // num_workers - computed: false, optional: true, required: false
  private _numWorkers?: number; 
  public get numWorkers() {
    return this.getNumberAttribute('num_workers');
  }
  public set numWorkers(value: number) {
    this._numWorkers = value;
  }
  public resetNumWorkers() {
    this._numWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWorkersInput() {
    return this._numWorkers;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // temp_location - computed: false, optional: true, required: false
  private _tempLocation?: string; 
  public get tempLocation() {
    return this.getStringAttribute('temp_location');
  }
  public set tempLocation(value: string) {
    this._tempLocation = value;
  }
  public resetTempLocation() {
    this._tempLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempLocationInput() {
    return this._tempLocation;
  }

  // worker_region - computed: false, optional: true, required: false
  private _workerRegion?: string; 
  public get workerRegion() {
    return this.getStringAttribute('worker_region');
  }
  public set workerRegion(value: string) {
    this._workerRegion = value;
  }
  public resetWorkerRegion() {
    this._workerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerRegionInput() {
    return this._workerRegion;
  }

  // worker_zone - computed: false, optional: true, required: false
  private _workerZone?: string; 
  public get workerZone() {
    return this.getStringAttribute('worker_zone');
  }
  public set workerZone(value: string) {
    this._workerZone = value;
  }
  public resetWorkerZone() {
    this._workerZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerZoneInput() {
    return this._workerZone;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters {
  /**
  * The job name to use for the created job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#job_name DataPipelinePipeline#job_name}
  */
  readonly jobName: string;
  /**
  * The runtime parameters to pass to the job.
  * 'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#parameters DataPipelinePipeline#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. Only applicable when updating a pipeline.
  * 'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#transform_name_mapping DataPipelinePipeline#transform_name_mapping}
  */
  readonly transformNameMapping?: { [key: string]: string };
  /**
  * If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#update DataPipelinePipeline#update}
  */
  readonly update?: boolean | cdktn.IResolvable;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#environment DataPipelinePipeline#environment}
  */
  readonly environment?: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment;
}

export function dataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersToTerraform(struct?: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference | DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_name: cdktn.stringToTerraform(struct!.jobName),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    transform_name_mapping: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.transformNameMapping),
    update: cdktn.booleanToTerraform(struct!.update),
    environment: dataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentToTerraform(struct!.environment),
  }
}


export function dataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersToHclTerraform(struct?: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference | DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_name: {
      value: cdktn.stringToHclTerraform(struct!.jobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    transform_name_mapping: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.transformNameMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    update: {
      value: cdktn.booleanToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment: {
      value: dataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentToHclTerraform(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobName = this._jobName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._transformNameMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformNameMapping = this._transformNameMapping;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobName = undefined;
      this._parameters = undefined;
      this._transformNameMapping = undefined;
      this._update = undefined;
      this._environment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobName = value.jobName;
      this._parameters = value.parameters;
      this._transformNameMapping = value.transformNameMapping;
      this._update = value.update;
      this._environment.internalValue = value.environment;
    }
  }

  // job_name - computed: false, optional: false, required: true
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // transform_name_mapping - computed: false, optional: true, required: false
  private _transformNameMapping?: { [key: string]: string }; 
  public get transformNameMapping() {
    return this.getStringMapAttribute('transform_name_mapping');
  }
  public set transformNameMapping(value: { [key: string]: string }) {
    this._transformNameMapping = value;
  }
  public resetTransformNameMapping() {
    this._transformNameMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformNameMappingInput() {
    return this._transformNameMapping;
  }

  // update - computed: false, optional: true, required: false
  private _update?: boolean | cdktn.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktn.IResolvable) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }
}
export interface DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest {
  /**
  * A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with 'gs://'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#gcs_path DataPipelinePipeline#gcs_path}
  */
  readonly gcsPath?: string;
  /**
  * The regional endpoint to which to direct the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#location DataPipelinePipeline#location}
  */
  readonly location?: string;
  /**
  * The ID of the Cloud Platform project that the job belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#project_id DataPipelinePipeline#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#validate_only DataPipelinePipeline#validate_only}
  */
  readonly validateOnly?: boolean | cdktn.IResolvable;
  /**
  * launch_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#launch_parameters DataPipelinePipeline#launch_parameters}
  */
  readonly launchParameters?: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters;
}

export function dataPipelinePipelineWorkloadDataflowLaunchTemplateRequestToTerraform(struct?: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference | DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gcs_path: cdktn.stringToTerraform(struct!.gcsPath),
    location: cdktn.stringToTerraform(struct!.location),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    validate_only: cdktn.booleanToTerraform(struct!.validateOnly),
    launch_parameters: dataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersToTerraform(struct!.launchParameters),
  }
}


export function dataPipelinePipelineWorkloadDataflowLaunchTemplateRequestToHclTerraform(struct?: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference | DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gcs_path: {
      value: cdktn.stringToHclTerraform(struct!.gcsPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate_only: {
      value: cdktn.booleanToHclTerraform(struct!.validateOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    launch_parameters: {
      value: dataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersToHclTerraform(struct!.launchParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsPath = this._gcsPath;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._validateOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateOnly = this._validateOnly;
    }
    if (this._launchParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchParameters = this._launchParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcsPath = undefined;
      this._location = undefined;
      this._projectId = undefined;
      this._validateOnly = undefined;
      this._launchParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcsPath = value.gcsPath;
      this._location = value.location;
      this._projectId = value.projectId;
      this._validateOnly = value.validateOnly;
      this._launchParameters.internalValue = value.launchParameters;
    }
  }

  // gcs_path - computed: false, optional: true, required: false
  private _gcsPath?: string; 
  public get gcsPath() {
    return this.getStringAttribute('gcs_path');
  }
  public set gcsPath(value: string) {
    this._gcsPath = value;
  }
  public resetGcsPath() {
    this._gcsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsPathInput() {
    return this._gcsPath;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // validate_only - computed: false, optional: true, required: false
  private _validateOnly?: boolean | cdktn.IResolvable; 
  public get validateOnly() {
    return this.getBooleanAttribute('validate_only');
  }
  public set validateOnly(value: boolean | cdktn.IResolvable) {
    this._validateOnly = value;
  }
  public resetValidateOnly() {
    this._validateOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateOnlyInput() {
    return this._validateOnly;
  }

  // launch_parameters - computed: false, optional: true, required: false
  private _launchParameters = new DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference(this, "launch_parameters");
  public get launchParameters() {
    return this._launchParameters;
  }
  public putLaunchParameters(value: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters) {
    this._launchParameters.internalValue = value;
  }
  public resetLaunchParameters() {
    this._launchParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchParametersInput() {
    return this._launchParameters.internalValue;
  }
}
export interface DataPipelinePipelineWorkload {
  /**
  * dataflow_flex_template_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#dataflow_flex_template_request DataPipelinePipeline#dataflow_flex_template_request}
  */
  readonly dataflowFlexTemplateRequest?: DataPipelinePipelineWorkloadDataflowFlexTemplateRequest;
  /**
  * dataflow_launch_template_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#dataflow_launch_template_request DataPipelinePipeline#dataflow_launch_template_request}
  */
  readonly dataflowLaunchTemplateRequest?: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest;
}

export function dataPipelinePipelineWorkloadToTerraform(struct?: DataPipelinePipelineWorkloadOutputReference | DataPipelinePipelineWorkload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataflow_flex_template_request: dataPipelinePipelineWorkloadDataflowFlexTemplateRequestToTerraform(struct!.dataflowFlexTemplateRequest),
    dataflow_launch_template_request: dataPipelinePipelineWorkloadDataflowLaunchTemplateRequestToTerraform(struct!.dataflowLaunchTemplateRequest),
  }
}


export function dataPipelinePipelineWorkloadToHclTerraform(struct?: DataPipelinePipelineWorkloadOutputReference | DataPipelinePipelineWorkload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataflow_flex_template_request: {
      value: dataPipelinePipelineWorkloadDataflowFlexTemplateRequestToHclTerraform(struct!.dataflowFlexTemplateRequest),
      isBlock: true,
      type: "list",
      storageClassType: "DataPipelinePipelineWorkloadDataflowFlexTemplateRequestList",
    },
    dataflow_launch_template_request: {
      value: dataPipelinePipelineWorkloadDataflowLaunchTemplateRequestToHclTerraform(struct!.dataflowLaunchTemplateRequest),
      isBlock: true,
      type: "list",
      storageClassType: "DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPipelinePipelineWorkloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataPipelinePipelineWorkload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataflowFlexTemplateRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataflowFlexTemplateRequest = this._dataflowFlexTemplateRequest?.internalValue;
    }
    if (this._dataflowLaunchTemplateRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataflowLaunchTemplateRequest = this._dataflowLaunchTemplateRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPipelinePipelineWorkload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataflowFlexTemplateRequest.internalValue = undefined;
      this._dataflowLaunchTemplateRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataflowFlexTemplateRequest.internalValue = value.dataflowFlexTemplateRequest;
      this._dataflowLaunchTemplateRequest.internalValue = value.dataflowLaunchTemplateRequest;
    }
  }

  // dataflow_flex_template_request - computed: false, optional: true, required: false
  private _dataflowFlexTemplateRequest = new DataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference(this, "dataflow_flex_template_request");
  public get dataflowFlexTemplateRequest() {
    return this._dataflowFlexTemplateRequest;
  }
  public putDataflowFlexTemplateRequest(value: DataPipelinePipelineWorkloadDataflowFlexTemplateRequest) {
    this._dataflowFlexTemplateRequest.internalValue = value;
  }
  public resetDataflowFlexTemplateRequest() {
    this._dataflowFlexTemplateRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowFlexTemplateRequestInput() {
    return this._dataflowFlexTemplateRequest.internalValue;
  }

  // dataflow_launch_template_request - computed: false, optional: true, required: false
  private _dataflowLaunchTemplateRequest = new DataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference(this, "dataflow_launch_template_request");
  public get dataflowLaunchTemplateRequest() {
    return this._dataflowLaunchTemplateRequest;
  }
  public putDataflowLaunchTemplateRequest(value: DataPipelinePipelineWorkloadDataflowLaunchTemplateRequest) {
    this._dataflowLaunchTemplateRequest.internalValue = value;
  }
  public resetDataflowLaunchTemplateRequest() {
    this._dataflowLaunchTemplateRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowLaunchTemplateRequestInput() {
    return this._dataflowLaunchTemplateRequest.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline google_data_pipeline_pipeline}
*/
export class DataPipelinePipeline extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_pipeline_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataPipelinePipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPipelinePipeline to import
  * @param importFromId The id of the existing DataPipelinePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPipelinePipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_data_pipeline_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/data_pipeline_pipeline google_data_pipeline_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPipelinePipelineConfig
  */
  public constructor(scope: Construct, id: string, config: DataPipelinePipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_pipeline_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.38.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._pipelineSources = config.pipelineSources;
    this._project = config.project;
    this._region = config.region;
    this._schedulerServiceAccountEmail = config.schedulerServiceAccountEmail;
    this._state = config.state;
    this._type = config.type;
    this._scheduleInfo.internalValue = config.scheduleInfo;
    this._timeouts.internalValue = config.timeouts;
    this._workload.internalValue = config.workload;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // job_count - computed: true, optional: false, required: false
  public get jobCount() {
    return this.getNumberAttribute('job_count');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pipeline_sources - computed: false, optional: true, required: false
  private _pipelineSources?: { [key: string]: string }; 
  public get pipelineSources() {
    return this.getStringMapAttribute('pipeline_sources');
  }
  public set pipelineSources(value: { [key: string]: string }) {
    this._pipelineSources = value;
  }
  public resetPipelineSources() {
    this._pipelineSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineSourcesInput() {
    return this._pipelineSources;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // scheduler_service_account_email - computed: true, optional: true, required: false
  private _schedulerServiceAccountEmail?: string; 
  public get schedulerServiceAccountEmail() {
    return this.getStringAttribute('scheduler_service_account_email');
  }
  public set schedulerServiceAccountEmail(value: string) {
    this._schedulerServiceAccountEmail = value;
  }
  public resetSchedulerServiceAccountEmail() {
    this._schedulerServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerServiceAccountEmailInput() {
    return this._schedulerServiceAccountEmail;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // schedule_info - computed: false, optional: true, required: false
  private _scheduleInfo = new DataPipelinePipelineScheduleInfoOutputReference(this, "schedule_info");
  public get scheduleInfo() {
    return this._scheduleInfo;
  }
  public putScheduleInfo(value: DataPipelinePipelineScheduleInfo) {
    this._scheduleInfo.internalValue = value;
  }
  public resetScheduleInfo() {
    this._scheduleInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInfoInput() {
    return this._scheduleInfo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataPipelinePipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataPipelinePipelineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workload - computed: false, optional: true, required: false
  private _workload = new DataPipelinePipelineWorkloadOutputReference(this, "workload");
  public get workload() {
    return this._workload;
  }
  public putWorkload(value: DataPipelinePipelineWorkload) {
    this._workload.internalValue = value;
  }
  public resetWorkload() {
    this._workload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      pipeline_sources: cdktn.hashMapper(cdktn.stringToTerraform)(this._pipelineSources),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      scheduler_service_account_email: cdktn.stringToTerraform(this._schedulerServiceAccountEmail),
      state: cdktn.stringToTerraform(this._state),
      type: cdktn.stringToTerraform(this._type),
      schedule_info: dataPipelinePipelineScheduleInfoToTerraform(this._scheduleInfo.internalValue),
      timeouts: dataPipelinePipelineTimeoutsToTerraform(this._timeouts.internalValue),
      workload: dataPipelinePipelineWorkloadToTerraform(this._workload.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_sources: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._pipelineSources),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler_service_account_email: {
        value: cdktn.stringToHclTerraform(this._schedulerServiceAccountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktn.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_info: {
        value: dataPipelinePipelineScheduleInfoToHclTerraform(this._scheduleInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPipelinePipelineScheduleInfoList",
      },
      timeouts: {
        value: dataPipelinePipelineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPipelinePipelineTimeouts",
      },
      workload: {
        value: dataPipelinePipelineWorkloadToHclTerraform(this._workload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPipelinePipelineWorkloadList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
