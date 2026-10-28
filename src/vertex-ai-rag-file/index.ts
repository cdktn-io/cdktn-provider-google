/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VertexAiRagFileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#deletion_policy VertexAiRagFile#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#id VertexAiRagFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum number of queries per minute that the import is allowed to make
  * to the embedding model specified on the RagCorpus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#max_embedding_requests_per_min VertexAiRagFile#max_embedding_requests_per_min}
  */
  readonly maxEmbeddingRequestsPerMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#project VertexAiRagFile#project}
  */
  readonly project?: string;
  /**
  * The ID of the RagCorpus to import the file into, for example the 'name'
  * attribute of a 'google_vertex_ai_rag_corpus' resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_corpus VertexAiRagFile#rag_corpus}
  */
  readonly ragCorpus: string;
  /**
  * The region of the RagCorpus. eg europe-west4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#region VertexAiRagFile#region}
  */
  readonly region: string;
  /**
  * gcs_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#gcs_source VertexAiRagFile#gcs_source}
  */
  readonly gcsSource?: VertexAiRagFileGcsSource;
  /**
  * google_drive_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#google_drive_source VertexAiRagFile#google_drive_source}
  */
  readonly googleDriveSource?: VertexAiRagFileGoogleDriveSource;
  /**
  * rag_file_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_file_parsing_config VertexAiRagFile#rag_file_parsing_config}
  */
  readonly ragFileParsingConfig?: VertexAiRagFileRagFileParsingConfig;
  /**
  * rag_file_transformation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_file_transformation_config VertexAiRagFile#rag_file_transformation_config}
  */
  readonly ragFileTransformationConfig?: VertexAiRagFileRagFileTransformationConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#timeouts VertexAiRagFile#timeouts}
  */
  readonly timeouts?: VertexAiRagFileTimeouts;
}
export interface VertexAiRagFileFileStatus {
}

export function vertexAiRagFileFileStatusToTerraform(struct?: VertexAiRagFileFileStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiRagFileFileStatusToHclTerraform(struct?: VertexAiRagFileFileStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiRagFileFileStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiRagFileFileStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagFileFileStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_status - computed: true, optional: false, required: false
  public get errorStatus() {
    return this.getStringAttribute('error_status');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class VertexAiRagFileFileStatusList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiRagFileFileStatusOutputReference {
    return new VertexAiRagFileFileStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiRagFileGcsSource {
  /**
  * The Cloud Storage URI of the file to import, for example
  * 'gs://my-bucket/my-file.pdf'. Must reference a single file; directories
  * and wildcards are not supported because each resource manages one RagFile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#uris VertexAiRagFile#uris}
  */
  readonly uris: string[];
}

export function vertexAiRagFileGcsSourceToTerraform(struct?: VertexAiRagFileGcsSourceOutputReference | VertexAiRagFileGcsSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    uris: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.uris),
  }
}


export function vertexAiRagFileGcsSourceToHclTerraform(struct?: VertexAiRagFileGcsSourceOutputReference | VertexAiRagFileGcsSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    uris: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagFileGcsSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagFileGcsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagFileGcsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uris = value.uris;
    }
  }

  // uris - computed: false, optional: false, required: true
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}
export interface VertexAiRagFileGoogleDriveSourceResourceIds {
  /**
  * The ID of the Google Drive file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#resource_id VertexAiRagFile#resource_id}
  */
  readonly resourceId: string;
  /**
  * The type of the Google Drive resource. Only individual files are
  * supported because each resource manages one RagFile. Default value: "RESOURCE_TYPE_FILE" Possible values: ["RESOURCE_TYPE_FILE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#resource_type VertexAiRagFile#resource_type}
  */
  readonly resourceType?: string;
}

export function vertexAiRagFileGoogleDriveSourceResourceIdsToTerraform(struct?: VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference | VertexAiRagFileGoogleDriveSourceResourceIds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_id: cdktn.stringToTerraform(struct!.resourceId),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
  }
}


export function vertexAiRagFileGoogleDriveSourceResourceIdsToHclTerraform(struct?: VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference | VertexAiRagFileGoogleDriveSourceResourceIds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_id: {
      value: cdktn.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagFileGoogleDriveSourceResourceIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagFileGoogleDriveSourceResourceIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}
export interface VertexAiRagFileGoogleDriveSource {
  /**
  * resource_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#resource_ids VertexAiRagFile#resource_ids}
  */
  readonly resourceIds: VertexAiRagFileGoogleDriveSourceResourceIds;
}

export function vertexAiRagFileGoogleDriveSourceToTerraform(struct?: VertexAiRagFileGoogleDriveSourceOutputReference | VertexAiRagFileGoogleDriveSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_ids: vertexAiRagFileGoogleDriveSourceResourceIdsToTerraform(struct!.resourceIds),
  }
}


export function vertexAiRagFileGoogleDriveSourceToHclTerraform(struct?: VertexAiRagFileGoogleDriveSourceOutputReference | VertexAiRagFileGoogleDriveSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_ids: {
      value: vertexAiRagFileGoogleDriveSourceResourceIdsToHclTerraform(struct!.resourceIds),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagFileGoogleDriveSourceResourceIdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagFileGoogleDriveSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagFileGoogleDriveSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIds = this._resourceIds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagFileGoogleDriveSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceIds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceIds.internalValue = value.resourceIds;
    }
  }

  // resource_ids - computed: false, optional: false, required: true
  private _resourceIds = new VertexAiRagFileGoogleDriveSourceResourceIdsOutputReference(this, "resource_ids");
  public get resourceIds() {
    return this._resourceIds;
  }
  public putResourceIds(value: VertexAiRagFileGoogleDriveSourceResourceIds) {
    this._resourceIds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsInput() {
    return this._resourceIds.internalValue;
  }
}
export interface VertexAiRagFileRagFileParsingConfigLayoutParser {
  /**
  * The maximum number of requests the job is allowed to make to the
  * Document AI processor per minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#max_parsing_requests_per_min VertexAiRagFile#max_parsing_requests_per_min}
  */
  readonly maxParsingRequestsPerMin?: number;
  /**
  * The full resource name of a Document AI processor or processor version
  * of type 'LAYOUT_PARSER_PROCESSOR'. Format:
  * 'projects/{project_id}/locations/{location}/processors/{processor_id}' or
  * 'projects/{project_id}/locations/{location}/processors/{processor_id}/processorVersions/{processor_version_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#processor_name VertexAiRagFile#processor_name}
  */
  readonly processorName?: string;
}

export function vertexAiRagFileRagFileParsingConfigLayoutParserToTerraform(struct?: VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference | VertexAiRagFileRagFileParsingConfigLayoutParser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_parsing_requests_per_min: cdktn.numberToTerraform(struct!.maxParsingRequestsPerMin),
    processor_name: cdktn.stringToTerraform(struct!.processorName),
  }
}


export function vertexAiRagFileRagFileParsingConfigLayoutParserToHclTerraform(struct?: VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference | VertexAiRagFileRagFileParsingConfigLayoutParser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_parsing_requests_per_min: {
      value: cdktn.numberToHclTerraform(struct!.maxParsingRequestsPerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processor_name: {
      value: cdktn.stringToHclTerraform(struct!.processorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagFileRagFileParsingConfigLayoutParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxParsingRequestsPerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParsingRequestsPerMin = this._maxParsingRequestsPerMin;
    }
    if (this._processorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.processorName = this._processorName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagFileRagFileParsingConfigLayoutParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxParsingRequestsPerMin = undefined;
      this._processorName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxParsingRequestsPerMin = value.maxParsingRequestsPerMin;
      this._processorName = value.processorName;
    }
  }

  // max_parsing_requests_per_min - computed: false, optional: true, required: false
  private _maxParsingRequestsPerMin?: number; 
  public get maxParsingRequestsPerMin() {
    return this.getNumberAttribute('max_parsing_requests_per_min');
  }
  public set maxParsingRequestsPerMin(value: number) {
    this._maxParsingRequestsPerMin = value;
  }
  public resetMaxParsingRequestsPerMin() {
    this._maxParsingRequestsPerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParsingRequestsPerMinInput() {
    return this._maxParsingRequestsPerMin;
  }

  // processor_name - computed: false, optional: true, required: false
  private _processorName?: string; 
  public get processorName() {
    return this.getStringAttribute('processor_name');
  }
  public set processorName(value: string) {
    this._processorName = value;
  }
  public resetProcessorName() {
    this._processorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorNameInput() {
    return this._processorName;
  }
}
export interface VertexAiRagFileRagFileParsingConfigLlmParser {
  /**
  * The prompt to use for parsing. If not specified, a default prompt is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#custom_parsing_prompt VertexAiRagFile#custom_parsing_prompt}
  */
  readonly customParsingPrompt?: string;
  /**
  * The maximum number of requests the job is allowed to make to the LLM
  * model per minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#max_parsing_requests_per_min VertexAiRagFile#max_parsing_requests_per_min}
  */
  readonly maxParsingRequestsPerMin?: number;
  /**
  * The name of a LLM model used for parsing. Format:
  * 'projects/{project_id}/locations/{location}/publishers/{publisher}/models/{model}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#model_name VertexAiRagFile#model_name}
  */
  readonly modelName?: string;
}

export function vertexAiRagFileRagFileParsingConfigLlmParserToTerraform(struct?: VertexAiRagFileRagFileParsingConfigLlmParserOutputReference | VertexAiRagFileRagFileParsingConfigLlmParser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_parsing_prompt: cdktn.stringToTerraform(struct!.customParsingPrompt),
    max_parsing_requests_per_min: cdktn.numberToTerraform(struct!.maxParsingRequestsPerMin),
    model_name: cdktn.stringToTerraform(struct!.modelName),
  }
}


export function vertexAiRagFileRagFileParsingConfigLlmParserToHclTerraform(struct?: VertexAiRagFileRagFileParsingConfigLlmParserOutputReference | VertexAiRagFileRagFileParsingConfigLlmParser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_parsing_prompt: {
      value: cdktn.stringToHclTerraform(struct!.customParsingPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_parsing_requests_per_min: {
      value: cdktn.numberToHclTerraform(struct!.maxParsingRequestsPerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_name: {
      value: cdktn.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagFileRagFileParsingConfigLlmParserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagFileRagFileParsingConfigLlmParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customParsingPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.customParsingPrompt = this._customParsingPrompt;
    }
    if (this._maxParsingRequestsPerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParsingRequestsPerMin = this._maxParsingRequestsPerMin;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagFileRagFileParsingConfigLlmParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customParsingPrompt = undefined;
      this._maxParsingRequestsPerMin = undefined;
      this._modelName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customParsingPrompt = value.customParsingPrompt;
      this._maxParsingRequestsPerMin = value.maxParsingRequestsPerMin;
      this._modelName = value.modelName;
    }
  }

  // custom_parsing_prompt - computed: false, optional: true, required: false
  private _customParsingPrompt?: string; 
  public get customParsingPrompt() {
    return this.getStringAttribute('custom_parsing_prompt');
  }
  public set customParsingPrompt(value: string) {
    this._customParsingPrompt = value;
  }
  public resetCustomParsingPrompt() {
    this._customParsingPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParsingPromptInput() {
    return this._customParsingPrompt;
  }

  // max_parsing_requests_per_min - computed: false, optional: true, required: false
  private _maxParsingRequestsPerMin?: number; 
  public get maxParsingRequestsPerMin() {
    return this.getNumberAttribute('max_parsing_requests_per_min');
  }
  public set maxParsingRequestsPerMin(value: number) {
    this._maxParsingRequestsPerMin = value;
  }
  public resetMaxParsingRequestsPerMin() {
    this._maxParsingRequestsPerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParsingRequestsPerMinInput() {
    return this._maxParsingRequestsPerMin;
  }

  // model_name - computed: false, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }
}
export interface VertexAiRagFileRagFileParsingConfig {
  /**
  * layout_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#layout_parser VertexAiRagFile#layout_parser}
  */
  readonly layoutParser?: VertexAiRagFileRagFileParsingConfigLayoutParser;
  /**
  * llm_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#llm_parser VertexAiRagFile#llm_parser}
  */
  readonly llmParser?: VertexAiRagFileRagFileParsingConfigLlmParser;
}

export function vertexAiRagFileRagFileParsingConfigToTerraform(struct?: VertexAiRagFileRagFileParsingConfigOutputReference | VertexAiRagFileRagFileParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    layout_parser: vertexAiRagFileRagFileParsingConfigLayoutParserToTerraform(struct!.layoutParser),
    llm_parser: vertexAiRagFileRagFileParsingConfigLlmParserToTerraform(struct!.llmParser),
  }
}


export function vertexAiRagFileRagFileParsingConfigToHclTerraform(struct?: VertexAiRagFileRagFileParsingConfigOutputReference | VertexAiRagFileRagFileParsingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    layout_parser: {
      value: vertexAiRagFileRagFileParsingConfigLayoutParserToHclTerraform(struct!.layoutParser),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagFileRagFileParsingConfigLayoutParserList",
    },
    llm_parser: {
      value: vertexAiRagFileRagFileParsingConfigLlmParserToHclTerraform(struct!.llmParser),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagFileRagFileParsingConfigLlmParserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagFileRagFileParsingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagFileRagFileParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._layoutParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layoutParser = this._layoutParser?.internalValue;
    }
    if (this._llmParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmParser = this._llmParser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagFileRagFileParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._layoutParser.internalValue = undefined;
      this._llmParser.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._layoutParser.internalValue = value.layoutParser;
      this._llmParser.internalValue = value.llmParser;
    }
  }

  // layout_parser - computed: false, optional: true, required: false
  private _layoutParser = new VertexAiRagFileRagFileParsingConfigLayoutParserOutputReference(this, "layout_parser");
  public get layoutParser() {
    return this._layoutParser;
  }
  public putLayoutParser(value: VertexAiRagFileRagFileParsingConfigLayoutParser) {
    this._layoutParser.internalValue = value;
  }
  public resetLayoutParser() {
    this._layoutParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutParserInput() {
    return this._layoutParser.internalValue;
  }

  // llm_parser - computed: false, optional: true, required: false
  private _llmParser = new VertexAiRagFileRagFileParsingConfigLlmParserOutputReference(this, "llm_parser");
  public get llmParser() {
    return this._llmParser;
  }
  public putLlmParser(value: VertexAiRagFileRagFileParsingConfigLlmParser) {
    this._llmParser.internalValue = value;
  }
  public resetLlmParser() {
    this._llmParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmParserInput() {
    return this._llmParser.internalValue;
  }
}
export interface VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking {
  /**
  * The overlap between chunks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#chunk_overlap VertexAiRagFile#chunk_overlap}
  */
  readonly chunkOverlap?: number;
  /**
  * The size of the chunks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#chunk_size VertexAiRagFile#chunk_size}
  */
  readonly chunkSize?: number;
}

export function vertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingToTerraform(struct?: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference | VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    chunk_overlap: cdktn.numberToTerraform(struct!.chunkOverlap),
    chunk_size: cdktn.numberToTerraform(struct!.chunkSize),
  }
}


export function vertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingToHclTerraform(struct?: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference | VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    chunk_overlap: {
      value: cdktn.numberToHclTerraform(struct!.chunkOverlap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_size: {
      value: cdktn.numberToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkOverlap !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkOverlap = this._chunkOverlap;
    }
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chunkOverlap = undefined;
      this._chunkSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chunkOverlap = value.chunkOverlap;
      this._chunkSize = value.chunkSize;
    }
  }

  // chunk_overlap - computed: false, optional: true, required: false
  private _chunkOverlap?: number; 
  public get chunkOverlap() {
    return this.getNumberAttribute('chunk_overlap');
  }
  public set chunkOverlap(value: number) {
    this._chunkOverlap = value;
  }
  public resetChunkOverlap() {
    this._chunkOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkOverlapInput() {
    return this._chunkOverlap;
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: number; 
  public get chunkSize() {
    return this.getNumberAttribute('chunk_size');
  }
  public set chunkSize(value: number) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }
}
export interface VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig {
  /**
  * fixed_length_chunking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#fixed_length_chunking VertexAiRagFile#fixed_length_chunking}
  */
  readonly fixedLengthChunking?: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking;
}

export function vertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigToTerraform(struct?: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference | VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed_length_chunking: vertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingToTerraform(struct!.fixedLengthChunking),
  }
}


export function vertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigToHclTerraform(struct?: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference | VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed_length_chunking: {
      value: vertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingToHclTerraform(struct!.fixedLengthChunking),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedLengthChunking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLengthChunking = this._fixedLengthChunking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedLengthChunking.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedLengthChunking.internalValue = value.fixedLengthChunking;
    }
  }

  // fixed_length_chunking - computed: false, optional: true, required: false
  private _fixedLengthChunking = new VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference(this, "fixed_length_chunking");
  public get fixedLengthChunking() {
    return this._fixedLengthChunking;
  }
  public putFixedLengthChunking(value: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking) {
    this._fixedLengthChunking.internalValue = value;
  }
  public resetFixedLengthChunking() {
    this._fixedLengthChunking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLengthChunkingInput() {
    return this._fixedLengthChunking.internalValue;
  }
}
export interface VertexAiRagFileRagFileTransformationConfig {
  /**
  * rag_file_chunking_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#rag_file_chunking_config VertexAiRagFile#rag_file_chunking_config}
  */
  readonly ragFileChunkingConfig?: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig;
}

export function vertexAiRagFileRagFileTransformationConfigToTerraform(struct?: VertexAiRagFileRagFileTransformationConfigOutputReference | VertexAiRagFileRagFileTransformationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rag_file_chunking_config: vertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigToTerraform(struct!.ragFileChunkingConfig),
  }
}


export function vertexAiRagFileRagFileTransformationConfigToHclTerraform(struct?: VertexAiRagFileRagFileTransformationConfigOutputReference | VertexAiRagFileRagFileTransformationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rag_file_chunking_config: {
      value: vertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigToHclTerraform(struct!.ragFileChunkingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagFileRagFileTransformationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagFileRagFileTransformationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ragFileChunkingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ragFileChunkingConfig = this._ragFileChunkingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagFileRagFileTransformationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ragFileChunkingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ragFileChunkingConfig.internalValue = value.ragFileChunkingConfig;
    }
  }

  // rag_file_chunking_config - computed: false, optional: true, required: false
  private _ragFileChunkingConfig = new VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference(this, "rag_file_chunking_config");
  public get ragFileChunkingConfig() {
    return this._ragFileChunkingConfig;
  }
  public putRagFileChunkingConfig(value: VertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig) {
    this._ragFileChunkingConfig.internalValue = value;
  }
  public resetRagFileChunkingConfig() {
    this._ragFileChunkingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ragFileChunkingConfigInput() {
    return this._ragFileChunkingConfig.internalValue;
  }
}
export interface VertexAiRagFileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#create VertexAiRagFile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#delete VertexAiRagFile#delete}
  */
  readonly delete?: string;
}

export function vertexAiRagFileTimeoutsToTerraform(struct?: VertexAiRagFileTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function vertexAiRagFileTimeoutsToHclTerraform(struct?: VertexAiRagFileTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagFileTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiRagFileTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagFileTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file google_vertex_ai_rag_file}
*/
export class VertexAiRagFile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_rag_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VertexAiRagFile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiRagFile to import
  * @param importFromId The id of the existing VertexAiRagFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiRagFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_rag_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_rag_file google_vertex_ai_rag_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiRagFileConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiRagFileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_rag_file',
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
    this._id = config.id;
    this._maxEmbeddingRequestsPerMin = config.maxEmbeddingRequestsPerMin;
    this._project = config.project;
    this._ragCorpus = config.ragCorpus;
    this._region = config.region;
    this._gcsSource.internalValue = config.gcsSource;
    this._googleDriveSource.internalValue = config.googleDriveSource;
    this._ragFileParsingConfig.internalValue = config.ragFileParsingConfig;
    this._ragFileTransformationConfig.internalValue = config.ragFileTransformationConfig;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // file_status - computed: true, optional: false, required: false
  private _fileStatus = new VertexAiRagFileFileStatusList(this, "file_status", false);
  public get fileStatus() {
    return this._fileStatus;
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

  // max_embedding_requests_per_min - computed: false, optional: true, required: false
  private _maxEmbeddingRequestsPerMin?: number; 
  public get maxEmbeddingRequestsPerMin() {
    return this.getNumberAttribute('max_embedding_requests_per_min');
  }
  public set maxEmbeddingRequestsPerMin(value: number) {
    this._maxEmbeddingRequestsPerMin = value;
  }
  public resetMaxEmbeddingRequestsPerMin() {
    this._maxEmbeddingRequestsPerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEmbeddingRequestsPerMinInput() {
    return this._maxEmbeddingRequestsPerMin;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // rag_corpus - computed: false, optional: false, required: true
  private _ragCorpus?: string; 
  public get ragCorpus() {
    return this.getStringAttribute('rag_corpus');
  }
  public set ragCorpus(value: string) {
    this._ragCorpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ragCorpusInput() {
    return this._ragCorpus;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // user_metadata - computed: true, optional: false, required: false
  public get userMetadata() {
    return this.getStringAttribute('user_metadata');
  }

  // gcs_source - computed: false, optional: true, required: false
  private _gcsSource = new VertexAiRagFileGcsSourceOutputReference(this, "gcs_source");
  public get gcsSource() {
    return this._gcsSource;
  }
  public putGcsSource(value: VertexAiRagFileGcsSource) {
    this._gcsSource.internalValue = value;
  }
  public resetGcsSource() {
    this._gcsSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsSourceInput() {
    return this._gcsSource.internalValue;
  }

  // google_drive_source - computed: false, optional: true, required: false
  private _googleDriveSource = new VertexAiRagFileGoogleDriveSourceOutputReference(this, "google_drive_source");
  public get googleDriveSource() {
    return this._googleDriveSource;
  }
  public putGoogleDriveSource(value: VertexAiRagFileGoogleDriveSource) {
    this._googleDriveSource.internalValue = value;
  }
  public resetGoogleDriveSource() {
    this._googleDriveSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDriveSourceInput() {
    return this._googleDriveSource.internalValue;
  }

  // rag_file_parsing_config - computed: false, optional: true, required: false
  private _ragFileParsingConfig = new VertexAiRagFileRagFileParsingConfigOutputReference(this, "rag_file_parsing_config");
  public get ragFileParsingConfig() {
    return this._ragFileParsingConfig;
  }
  public putRagFileParsingConfig(value: VertexAiRagFileRagFileParsingConfig) {
    this._ragFileParsingConfig.internalValue = value;
  }
  public resetRagFileParsingConfig() {
    this._ragFileParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ragFileParsingConfigInput() {
    return this._ragFileParsingConfig.internalValue;
  }

  // rag_file_transformation_config - computed: false, optional: true, required: false
  private _ragFileTransformationConfig = new VertexAiRagFileRagFileTransformationConfigOutputReference(this, "rag_file_transformation_config");
  public get ragFileTransformationConfig() {
    return this._ragFileTransformationConfig;
  }
  public putRagFileTransformationConfig(value: VertexAiRagFileRagFileTransformationConfig) {
    this._ragFileTransformationConfig.internalValue = value;
  }
  public resetRagFileTransformationConfig() {
    this._ragFileTransformationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ragFileTransformationConfigInput() {
    return this._ragFileTransformationConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiRagFileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiRagFileTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      max_embedding_requests_per_min: cdktn.numberToTerraform(this._maxEmbeddingRequestsPerMin),
      project: cdktn.stringToTerraform(this._project),
      rag_corpus: cdktn.stringToTerraform(this._ragCorpus),
      region: cdktn.stringToTerraform(this._region),
      gcs_source: vertexAiRagFileGcsSourceToTerraform(this._gcsSource.internalValue),
      google_drive_source: vertexAiRagFileGoogleDriveSourceToTerraform(this._googleDriveSource.internalValue),
      rag_file_parsing_config: vertexAiRagFileRagFileParsingConfigToTerraform(this._ragFileParsingConfig.internalValue),
      rag_file_transformation_config: vertexAiRagFileRagFileTransformationConfigToTerraform(this._ragFileTransformationConfig.internalValue),
      timeouts: vertexAiRagFileTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_embedding_requests_per_min: {
        value: cdktn.numberToHclTerraform(this._maxEmbeddingRequestsPerMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rag_corpus: {
        value: cdktn.stringToHclTerraform(this._ragCorpus),
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
      gcs_source: {
        value: vertexAiRagFileGcsSourceToHclTerraform(this._gcsSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiRagFileGcsSourceList",
      },
      google_drive_source: {
        value: vertexAiRagFileGoogleDriveSourceToHclTerraform(this._googleDriveSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiRagFileGoogleDriveSourceList",
      },
      rag_file_parsing_config: {
        value: vertexAiRagFileRagFileParsingConfigToHclTerraform(this._ragFileParsingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiRagFileRagFileParsingConfigList",
      },
      rag_file_transformation_config: {
        value: vertexAiRagFileRagFileTransformationConfigToHclTerraform(this._ragFileTransformationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiRagFileRagFileTransformationConfigList",
      },
      timeouts: {
        value: vertexAiRagFileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiRagFileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
