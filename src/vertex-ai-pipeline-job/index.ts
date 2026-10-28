/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VertexAiPipelineJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_pipeline_job.html.markdown for specifics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#deletion_policy VertexAiPipelineJob#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The display name of the Pipeline. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#display_name VertexAiPipelineJob#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#id VertexAiPipelineJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels with user-defined metadata to organize PipelineJob.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#labels VertexAiPipelineJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The full name of the Compute Engine network to which the Pipeline Job's workload should be peered. For example, 'projects/12345/global/networks/myVPC'. Format is of the form 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is a network name. Private services access must already be configured for the network. Pipeline job will apply the network configuration to the Google Cloud resources being launched, if applied, such as Vertex AI Training or Dataflow job. If left unspecified, the workload is not peered with any network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#network VertexAiPipelineJob#network}
  */
  readonly network?: string;
  /**
  * The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. If not provided, an ID will be automatically generated.
  * This value should be less than 128 characters, and valid characters are '/[a-z][0-9]-/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#pipeline_job_id VertexAiPipelineJob#pipeline_job_id}
  */
  readonly pipelineJobId?: string;
  /**
  * The spec of the pipeline. This is a JSON object that describes the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#pipeline_spec VertexAiPipelineJob#pipeline_spec}
  */
  readonly pipelineSpec?: string;
  /**
  * Whether to do component level validations before job creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#preflight_validations VertexAiPipelineJob#preflight_validations}
  */
  readonly preflightValidations?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#project VertexAiPipelineJob#project}
  */
  readonly project?: string;
  /**
  * The region of the pipeline job. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#region VertexAiPipelineJob#region}
  */
  readonly region?: string;
  /**
  * A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload. If set, we will deploy the Pipeline Job's workload within the provided ip ranges. Otherwise, the job will be deployed to any ip ranges under the provided VPC network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#reserved_ip_ranges VertexAiPipelineJob#reserved_ip_ranges}
  */
  readonly reservedIpRanges?: string[];
  /**
  * The service account that the pipeline workload runs as. If not specified, the Compute Engine default service account in the project will be used. Users starting the pipeline must have the iam.serviceAccounts.actAs permission on this service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#service_account VertexAiPipelineJob#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#template_uri VertexAiPipelineJob#template_uri}
  */
  readonly templateUri?: string;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#encryption_spec VertexAiPipelineJob#encryption_spec}
  */
  readonly encryptionSpec?: VertexAiPipelineJobEncryptionSpec;
  /**
  * psc_interface_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#psc_interface_config VertexAiPipelineJob#psc_interface_config}
  */
  readonly pscInterfaceConfig?: VertexAiPipelineJobPscInterfaceConfig;
  /**
  * runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#runtime_config VertexAiPipelineJob#runtime_config}
  */
  readonly runtimeConfig?: VertexAiPipelineJobRuntimeConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#timeouts VertexAiPipelineJob#timeouts}
  */
  readonly timeouts?: VertexAiPipelineJobTimeouts;
}
export interface VertexAiPipelineJobError {
}

export function vertexAiPipelineJobErrorToTerraform(struct?: VertexAiPipelineJobError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiPipelineJobErrorToHclTerraform(struct?: VertexAiPipelineJobError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiPipelineJobErrorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiPipelineJobError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiPipelineJobError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktn.StringMapList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class VertexAiPipelineJobErrorList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiPipelineJobErrorOutputReference {
    return new VertexAiPipelineJobErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiPipelineJobJobDetailPipelineContext {
}

export function vertexAiPipelineJobJobDetailPipelineContextToTerraform(struct?: VertexAiPipelineJobJobDetailPipelineContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiPipelineJobJobDetailPipelineContextToHclTerraform(struct?: VertexAiPipelineJobJobDetailPipelineContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiPipelineJobJobDetailPipelineContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiPipelineJobJobDetailPipelineContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiPipelineJobJobDetailPipelineContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktn.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_contexts - computed: true, optional: false, required: false
  public get parentContexts() {
    return this.getListAttribute('parent_contexts');
  }

  // schema_title - computed: true, optional: false, required: false
  public get schemaTitle() {
    return this.getStringAttribute('schema_title');
  }

  // schema_version - computed: true, optional: false, required: false
  public get schemaVersion() {
    return this.getStringAttribute('schema_version');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class VertexAiPipelineJobJobDetailPipelineContextList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiPipelineJobJobDetailPipelineContextOutputReference {
    return new VertexAiPipelineJobJobDetailPipelineContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiPipelineJobJobDetailPipelineRunContext {
}

export function vertexAiPipelineJobJobDetailPipelineRunContextToTerraform(struct?: VertexAiPipelineJobJobDetailPipelineRunContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiPipelineJobJobDetailPipelineRunContextToHclTerraform(struct?: VertexAiPipelineJobJobDetailPipelineRunContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiPipelineJobJobDetailPipelineRunContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiPipelineJobJobDetailPipelineRunContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiPipelineJobJobDetailPipelineRunContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktn.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_contexts - computed: true, optional: false, required: false
  public get parentContexts() {
    return this.getListAttribute('parent_contexts');
  }

  // schema_title - computed: true, optional: false, required: false
  public get schemaTitle() {
    return this.getStringAttribute('schema_title');
  }

  // schema_version - computed: true, optional: false, required: false
  public get schemaVersion() {
    return this.getStringAttribute('schema_version');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class VertexAiPipelineJobJobDetailPipelineRunContextList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiPipelineJobJobDetailPipelineRunContextOutputReference {
    return new VertexAiPipelineJobJobDetailPipelineRunContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiPipelineJobJobDetailTaskDetailsError {
}

export function vertexAiPipelineJobJobDetailTaskDetailsErrorToTerraform(struct?: VertexAiPipelineJobJobDetailTaskDetailsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiPipelineJobJobDetailTaskDetailsErrorToHclTerraform(struct?: VertexAiPipelineJobJobDetailTaskDetailsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiPipelineJobJobDetailTaskDetailsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiPipelineJobJobDetailTaskDetailsError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class VertexAiPipelineJobJobDetailTaskDetailsErrorList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference {
    return new VertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiPipelineJobJobDetailTaskDetails {
}

export function vertexAiPipelineJobJobDetailTaskDetailsToTerraform(struct?: VertexAiPipelineJobJobDetailTaskDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiPipelineJobJobDetailTaskDetailsToHclTerraform(struct?: VertexAiPipelineJobJobDetailTaskDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiPipelineJobJobDetailTaskDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiPipelineJobJobDetailTaskDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiPipelineJobJobDetailTaskDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // error - computed: true, optional: false, required: false
  private _error = new VertexAiPipelineJobJobDetailTaskDetailsErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // parent_task_id - computed: true, optional: false, required: false
  public get parentTaskId() {
    return this.getStringAttribute('parent_task_id');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }

  // task_unique_name - computed: true, optional: false, required: false
  public get taskUniqueName() {
    return this.getStringAttribute('task_unique_name');
  }
}

export class VertexAiPipelineJobJobDetailTaskDetailsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiPipelineJobJobDetailTaskDetailsOutputReference {
    return new VertexAiPipelineJobJobDetailTaskDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiPipelineJobJobDetail {
}

export function vertexAiPipelineJobJobDetailToTerraform(struct?: VertexAiPipelineJobJobDetail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiPipelineJobJobDetailToHclTerraform(struct?: VertexAiPipelineJobJobDetail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiPipelineJobJobDetailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiPipelineJobJobDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiPipelineJobJobDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pipeline_context - computed: true, optional: false, required: false
  private _pipelineContext = new VertexAiPipelineJobJobDetailPipelineContextList(this, "pipeline_context", false);
  public get pipelineContext() {
    return this._pipelineContext;
  }

  // pipeline_run_context - computed: true, optional: false, required: false
  private _pipelineRunContext = new VertexAiPipelineJobJobDetailPipelineRunContextList(this, "pipeline_run_context", false);
  public get pipelineRunContext() {
    return this._pipelineRunContext;
  }

  // task_details - computed: true, optional: false, required: false
  private _taskDetails = new VertexAiPipelineJobJobDetailTaskDetailsList(this, "task_details", false);
  public get taskDetails() {
    return this._taskDetails;
  }
}

export class VertexAiPipelineJobJobDetailList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiPipelineJobJobDetailOutputReference {
    return new VertexAiPipelineJobJobDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiPipelineJobTemplateMetadata {
}

export function vertexAiPipelineJobTemplateMetadataToTerraform(struct?: VertexAiPipelineJobTemplateMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiPipelineJobTemplateMetadataToHclTerraform(struct?: VertexAiPipelineJobTemplateMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiPipelineJobTemplateMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiPipelineJobTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiPipelineJobTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class VertexAiPipelineJobTemplateMetadataList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiPipelineJobTemplateMetadataOutputReference {
    return new VertexAiPipelineJobTemplateMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiPipelineJobEncryptionSpec {
  /**
  * The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#kms_key_name VertexAiPipelineJob#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function vertexAiPipelineJobEncryptionSpecToTerraform(struct?: VertexAiPipelineJobEncryptionSpecOutputReference | VertexAiPipelineJobEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function vertexAiPipelineJobEncryptionSpecToHclTerraform(struct?: VertexAiPipelineJobEncryptionSpecOutputReference | VertexAiPipelineJobEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiPipelineJobEncryptionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiPipelineJobEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiPipelineJobEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs {
  /**
  * The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#domain VertexAiPipelineJob#domain}
  */
  readonly domain: string;
  /**
  * The VPC network name in the targetProject where the DNS zone specified by domain is visible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#target_network VertexAiPipelineJob#target_network}
  */
  readonly targetNetwork: string;
  /**
  * The project ID hosting the Cloud DNS managed zone that contains the above domain. The Vertex AI Service Agent must be granted the dns.peer role on this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#target_project VertexAiPipelineJob#target_project}
  */
  readonly targetProject: string;
}

export function vertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsToTerraform(struct?: VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
    target_network: cdktn.stringToTerraform(struct!.targetNetwork),
    target_project: cdktn.stringToTerraform(struct!.targetProject),
  }
}


export function vertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsToHclTerraform(struct?: VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_network: {
      value: cdktn.stringToHclTerraform(struct!.targetNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_project: {
      value: cdktn.stringToHclTerraform(struct!.targetProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._targetNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNetwork = this._targetNetwork;
    }
    if (this._targetProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProject = this._targetProject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._targetNetwork = undefined;
      this._targetProject = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._targetNetwork = value.targetNetwork;
      this._targetProject = value.targetProject;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // target_network - computed: false, optional: false, required: true
  private _targetNetwork?: string; 
  public get targetNetwork() {
    return this.getStringAttribute('target_network');
  }
  public set targetNetwork(value: string) {
    this._targetNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkInput() {
    return this._targetNetwork;
  }

  // target_project - computed: false, optional: false, required: true
  private _targetProject?: string; 
  public get targetProject() {
    return this.getStringAttribute('target_project');
  }
  public set targetProject(value: string) {
    this._targetProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProjectInput() {
    return this._targetProject;
  }
}

export class VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList extends cdktn.ComplexList {
  public internalValue? : VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference {
    return new VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiPipelineJobPscInterfaceConfig {
  /**
  * The name of the Compute Engine network attachment to attach to the resource within the region and user project. To specify this field, you must have already created a network attachment. This field is only used for resources using PSC-I.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#network_attachment VertexAiPipelineJob#network_attachment}
  */
  readonly networkAttachment?: string;
  /**
  * dns_peering_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#dns_peering_configs VertexAiPipelineJob#dns_peering_configs}
  */
  readonly dnsPeeringConfigs?: VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable;
}

export function vertexAiPipelineJobPscInterfaceConfigToTerraform(struct?: VertexAiPipelineJobPscInterfaceConfigOutputReference | VertexAiPipelineJobPscInterfaceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_attachment: cdktn.stringToTerraform(struct!.networkAttachment),
    dns_peering_configs: cdktn.listMapper(vertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsToTerraform, true)(struct!.dnsPeeringConfigs),
  }
}


export function vertexAiPipelineJobPscInterfaceConfigToHclTerraform(struct?: VertexAiPipelineJobPscInterfaceConfigOutputReference | VertexAiPipelineJobPscInterfaceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_attachment: {
      value: cdktn.stringToHclTerraform(struct!.networkAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_peering_configs: {
      value: cdktn.listMapperHcl(vertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsToHclTerraform, true)(struct!.dnsPeeringConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiPipelineJobPscInterfaceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiPipelineJobPscInterfaceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    if (this._dnsPeeringConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPeeringConfigs = this._dnsPeeringConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiPipelineJobPscInterfaceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAttachment = undefined;
      this._dnsPeeringConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAttachment = value.networkAttachment;
      this._dnsPeeringConfigs.internalValue = value.dnsPeeringConfigs;
    }
  }

  // network_attachment - computed: false, optional: true, required: false
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  public resetNetworkAttachment() {
    this._networkAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }

  // dns_peering_configs - computed: false, optional: true, required: false
  private _dnsPeeringConfigs = new VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList(this, "dns_peering_configs", false);
  public get dnsPeeringConfigs() {
    return this._dnsPeeringConfigs;
  }
  public putDnsPeeringConfigs(value: VertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable) {
    this._dnsPeeringConfigs.internalValue = value;
  }
  public resetDnsPeeringConfigs() {
    this._dnsPeeringConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPeeringConfigsInput() {
    return this._dnsPeeringConfigs.internalValue;
  }
}
export interface VertexAiPipelineJobRuntimeConfigInputArtifacts {
  /**
  * Artifact resource id from MLMD. Which is the last portion of an artifact resource name: 'projects/{project}/locations/{location}/metadataStores/default/artifacts/{artifact_id}'. The artifact must be within the same project, location and default metadatastore as the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#artifact_id VertexAiPipelineJob#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#artifact_key VertexAiPipelineJob#artifact_key}
  */
  readonly artifactKey: string;
}

export function vertexAiPipelineJobRuntimeConfigInputArtifactsToTerraform(struct?: VertexAiPipelineJobRuntimeConfigInputArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_id: cdktn.stringToTerraform(struct!.artifactId),
    artifact_key: cdktn.stringToTerraform(struct!.artifactKey),
  }
}


export function vertexAiPipelineJobRuntimeConfigInputArtifactsToHclTerraform(struct?: VertexAiPipelineJobRuntimeConfigInputArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_id: {
      value: cdktn.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    artifact_key: {
      value: cdktn.stringToHclTerraform(struct!.artifactKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiPipelineJobRuntimeConfigInputArtifacts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._artifactKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactKey = this._artifactKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiPipelineJobRuntimeConfigInputArtifacts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._artifactKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactId = value.artifactId;
      this._artifactKey = value.artifactKey;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // artifact_key - computed: false, optional: false, required: true
  private _artifactKey?: string; 
  public get artifactKey() {
    return this.getStringAttribute('artifact_key');
  }
  public set artifactKey(value: string) {
    this._artifactKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactKeyInput() {
    return this._artifactKey;
  }
}

export class VertexAiPipelineJobRuntimeConfigInputArtifactsList extends cdktn.ComplexList {
  public internalValue? : VertexAiPipelineJobRuntimeConfigInputArtifacts[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference {
    return new VertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiPipelineJobRuntimeConfig {
  /**
  * Represents the failure policy of a pipeline. Currently, the default of a pipeline is that the pipeline will continue to run until no more tasks can be executed, also known as 'PIPELINE_FAILURE_POLICY_FAIL_SLOW'. However, if a pipeline is set to 'PIPELINE_FAILURE_POLICY_FAIL_FAST', it will stop scheduling any new tasks as soon as the pipeline fails.
  * Possible values are: 'PIPELINE_FAILURE_POLICY_UNSPECIFIED', 'PIPELINE_FAILURE_POLICY_FAIL_SLOW', 'PIPELINE_FAILURE_POLICY_FAIL_FAST'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#failure_policy VertexAiPipelineJob#failure_policy}
  */
  readonly failurePolicy?: string;
  /**
  * A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline. It is used by the system to generate the paths of output artifacts. The artifact paths are generated with a sub-directory pattern '{job_id}/{task_id}/{output_key}' under the specified output directory. The service account specified in this pipeline must have the 'storage.objects.get' and 'storage.objects.create' permissions for this bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#gcs_output_directory VertexAiPipelineJob#gcs_output_directory}
  */
  readonly gcsOutputDirectory: string;
  /**
  * The runtime parameters of the PipelineJob. The parameters will be passed into PipelineJob.pipeline_spec to replace the placeholders at runtime. This field is used by pipelines built using 'PipelineJob.pipeline_spec.schema_version' 2.1.0, such as pipelines built using Kubeflow Pipelines SDK 1.9 or higher and the v2 DSL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#parameter_values VertexAiPipelineJob#parameter_values}
  */
  readonly parameterValues?: { [key: string]: string };
  /**
  * input_artifacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#input_artifacts VertexAiPipelineJob#input_artifacts}
  */
  readonly inputArtifacts?: VertexAiPipelineJobRuntimeConfigInputArtifacts[] | cdktn.IResolvable;
}

export function vertexAiPipelineJobRuntimeConfigToTerraform(struct?: VertexAiPipelineJobRuntimeConfigOutputReference | VertexAiPipelineJobRuntimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_policy: cdktn.stringToTerraform(struct!.failurePolicy),
    gcs_output_directory: cdktn.stringToTerraform(struct!.gcsOutputDirectory),
    parameter_values: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameterValues),
    input_artifacts: cdktn.listMapper(vertexAiPipelineJobRuntimeConfigInputArtifactsToTerraform, true)(struct!.inputArtifacts),
  }
}


export function vertexAiPipelineJobRuntimeConfigToHclTerraform(struct?: VertexAiPipelineJobRuntimeConfigOutputReference | VertexAiPipelineJobRuntimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.failurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_output_directory: {
      value: cdktn.stringToHclTerraform(struct!.gcsOutputDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_values: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameterValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    input_artifacts: {
      value: cdktn.listMapperHcl(vertexAiPipelineJobRuntimeConfigInputArtifactsToHclTerraform, true)(struct!.inputArtifacts),
      isBlock: true,
      type: "set",
      storageClassType: "VertexAiPipelineJobRuntimeConfigInputArtifactsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiPipelineJobRuntimeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiPipelineJobRuntimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.failurePolicy = this._failurePolicy;
    }
    if (this._gcsOutputDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsOutputDirectory = this._gcsOutputDirectory;
    }
    if (this._parameterValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValues = this._parameterValues;
    }
    if (this._inputArtifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputArtifacts = this._inputArtifacts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiPipelineJobRuntimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failurePolicy = undefined;
      this._gcsOutputDirectory = undefined;
      this._parameterValues = undefined;
      this._inputArtifacts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failurePolicy = value.failurePolicy;
      this._gcsOutputDirectory = value.gcsOutputDirectory;
      this._parameterValues = value.parameterValues;
      this._inputArtifacts.internalValue = value.inputArtifacts;
    }
  }

  // failure_policy - computed: true, optional: true, required: false
  private _failurePolicy?: string; 
  public get failurePolicy() {
    return this.getStringAttribute('failure_policy');
  }
  public set failurePolicy(value: string) {
    this._failurePolicy = value;
  }
  public resetFailurePolicy() {
    this._failurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePolicyInput() {
    return this._failurePolicy;
  }

  // gcs_output_directory - computed: false, optional: false, required: true
  private _gcsOutputDirectory?: string; 
  public get gcsOutputDirectory() {
    return this.getStringAttribute('gcs_output_directory');
  }
  public set gcsOutputDirectory(value: string) {
    this._gcsOutputDirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsOutputDirectoryInput() {
    return this._gcsOutputDirectory;
  }

  // parameter_values - computed: true, optional: true, required: false
  private _parameterValues?: { [key: string]: string }; 
  public get parameterValues() {
    return this.getStringMapAttribute('parameter_values');
  }
  public set parameterValues(value: { [key: string]: string }) {
    this._parameterValues = value;
  }
  public resetParameterValues() {
    this._parameterValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValuesInput() {
    return this._parameterValues;
  }

  // input_artifacts - computed: false, optional: true, required: false
  private _inputArtifacts = new VertexAiPipelineJobRuntimeConfigInputArtifactsList(this, "input_artifacts", true);
  public get inputArtifacts() {
    return this._inputArtifacts;
  }
  public putInputArtifacts(value: VertexAiPipelineJobRuntimeConfigInputArtifacts[] | cdktn.IResolvable) {
    this._inputArtifacts.internalValue = value;
  }
  public resetInputArtifacts() {
    this._inputArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactsInput() {
    return this._inputArtifacts.internalValue;
  }
}
export interface VertexAiPipelineJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#create VertexAiPipelineJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#delete VertexAiPipelineJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#update VertexAiPipelineJob#update}
  */
  readonly update?: string;
}

export function vertexAiPipelineJobTimeoutsToTerraform(struct?: VertexAiPipelineJobTimeouts | cdktn.IResolvable): any {
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


export function vertexAiPipelineJobTimeoutsToHclTerraform(struct?: VertexAiPipelineJobTimeouts | cdktn.IResolvable): any {
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

export class VertexAiPipelineJobTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiPipelineJobTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VertexAiPipelineJobTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job google_vertex_ai_pipeline_job}
*/
export class VertexAiPipelineJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_pipeline_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VertexAiPipelineJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiPipelineJob to import
  * @param importFromId The id of the existing VertexAiPipelineJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiPipelineJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_pipeline_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_pipeline_job google_vertex_ai_pipeline_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiPipelineJobConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VertexAiPipelineJobConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_pipeline_job',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.9.0',
        providerVersionConstraint: '~> 8.0'
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
    this._labels = config.labels;
    this._network = config.network;
    this._pipelineJobId = config.pipelineJobId;
    this._pipelineSpec = config.pipelineSpec;
    this._preflightValidations = config.preflightValidations;
    this._project = config.project;
    this._region = config.region;
    this._reservedIpRanges = config.reservedIpRanges;
    this._serviceAccount = config.serviceAccount;
    this._templateUri = config.templateUri;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._pscInterfaceConfig.internalValue = config.pscInterfaceConfig;
    this._runtimeConfig.internalValue = config.runtimeConfig;
    this._timeouts.internalValue = config.timeouts;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // error - computed: true, optional: false, required: false
  private _error = new VertexAiPipelineJobErrorList(this, "error", false);
  public get error() {
    return this._error;
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

  // job_detail - computed: true, optional: false, required: false
  private _jobDetail = new VertexAiPipelineJobJobDetailList(this, "job_detail", false);
  public get jobDetail() {
    return this._jobDetail;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // pipeline_job_id - computed: false, optional: true, required: false
  private _pipelineJobId?: string; 
  public get pipelineJobId() {
    return this.getStringAttribute('pipeline_job_id');
  }
  public set pipelineJobId(value: string) {
    this._pipelineJobId = value;
  }
  public resetPipelineJobId() {
    this._pipelineJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineJobIdInput() {
    return this._pipelineJobId;
  }

  // pipeline_spec - computed: true, optional: true, required: false
  private _pipelineSpec?: string; 
  public get pipelineSpec() {
    return this.getStringAttribute('pipeline_spec');
  }
  public set pipelineSpec(value: string) {
    this._pipelineSpec = value;
  }
  public resetPipelineSpec() {
    this._pipelineSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineSpecInput() {
    return this._pipelineSpec;
  }

  // preflight_validations - computed: false, optional: true, required: false
  private _preflightValidations?: boolean | cdktn.IResolvable; 
  public get preflightValidations() {
    return this.getBooleanAttribute('preflight_validations');
  }
  public set preflightValidations(value: boolean | cdktn.IResolvable) {
    this._preflightValidations = value;
  }
  public resetPreflightValidations() {
    this._preflightValidations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preflightValidationsInput() {
    return this._preflightValidations;
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

  // reserved_ip_ranges - computed: false, optional: true, required: false
  private _reservedIpRanges?: string[]; 
  public get reservedIpRanges() {
    return this.getListAttribute('reserved_ip_ranges');
  }
  public set reservedIpRanges(value: string[]) {
    this._reservedIpRanges = value;
  }
  public resetReservedIpRanges() {
    this._reservedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpRangesInput() {
    return this._reservedIpRanges;
  }

  // schedule_name - computed: true, optional: false, required: false
  public get scheduleName() {
    return this.getStringAttribute('schedule_name');
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // template_metadata - computed: true, optional: false, required: false
  private _templateMetadata = new VertexAiPipelineJobTemplateMetadataList(this, "template_metadata", false);
  public get templateMetadata() {
    return this._templateMetadata;
  }

  // template_uri - computed: false, optional: true, required: false
  private _templateUri?: string; 
  public get templateUri() {
    return this.getStringAttribute('template_uri');
  }
  public set templateUri(value: string) {
    this._templateUri = value;
  }
  public resetTemplateUri() {
    this._templateUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUriInput() {
    return this._templateUri;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new VertexAiPipelineJobEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: VertexAiPipelineJobEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // psc_interface_config - computed: false, optional: true, required: false
  private _pscInterfaceConfig = new VertexAiPipelineJobPscInterfaceConfigOutputReference(this, "psc_interface_config");
  public get pscInterfaceConfig() {
    return this._pscInterfaceConfig;
  }
  public putPscInterfaceConfig(value: VertexAiPipelineJobPscInterfaceConfig) {
    this._pscInterfaceConfig.internalValue = value;
  }
  public resetPscInterfaceConfig() {
    this._pscInterfaceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscInterfaceConfigInput() {
    return this._pscInterfaceConfig.internalValue;
  }

  // runtime_config - computed: false, optional: true, required: false
  private _runtimeConfig = new VertexAiPipelineJobRuntimeConfigOutputReference(this, "runtime_config");
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: VertexAiPipelineJobRuntimeConfig) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiPipelineJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiPipelineJobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      network: cdktn.stringToTerraform(this._network),
      pipeline_job_id: cdktn.stringToTerraform(this._pipelineJobId),
      pipeline_spec: cdktn.stringToTerraform(this._pipelineSpec),
      preflight_validations: cdktn.booleanToTerraform(this._preflightValidations),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      reserved_ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(this._reservedIpRanges),
      service_account: cdktn.stringToTerraform(this._serviceAccount),
      template_uri: cdktn.stringToTerraform(this._templateUri),
      encryption_spec: vertexAiPipelineJobEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      psc_interface_config: vertexAiPipelineJobPscInterfaceConfigToTerraform(this._pscInterfaceConfig.internalValue),
      runtime_config: vertexAiPipelineJobRuntimeConfigToTerraform(this._runtimeConfig.internalValue),
      timeouts: vertexAiPipelineJobTimeoutsToTerraform(this._timeouts.internalValue),
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
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      network: {
        value: cdktn.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_job_id: {
        value: cdktn.stringToHclTerraform(this._pipelineJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_spec: {
        value: cdktn.stringToHclTerraform(this._pipelineSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preflight_validations: {
        value: cdktn.booleanToHclTerraform(this._preflightValidations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      reserved_ip_ranges: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._reservedIpRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_account: {
        value: cdktn.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_uri: {
        value: cdktn.stringToHclTerraform(this._templateUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_spec: {
        value: vertexAiPipelineJobEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiPipelineJobEncryptionSpecList",
      },
      psc_interface_config: {
        value: vertexAiPipelineJobPscInterfaceConfigToHclTerraform(this._pscInterfaceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiPipelineJobPscInterfaceConfigList",
      },
      runtime_config: {
        value: vertexAiPipelineJobRuntimeConfigToHclTerraform(this._runtimeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiPipelineJobRuntimeConfigList",
      },
      timeouts: {
        value: vertexAiPipelineJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiPipelineJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
