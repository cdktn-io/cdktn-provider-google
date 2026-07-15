/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VectorSearchCollectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * ID of the Collection to create.
  * The id must be 1-63 characters long, and comply with
  * [RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
  * Specifically, it must be 1-63 characters long and match the regular
  * expression '[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#collection_id VectorSearchCollection#collection_id}
  */
  readonly collectionId: string;
  /**
  * JSON Schema for data.
  * Field names must contain only alphanumeric characters,
  * underscores, and hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#data_schema VectorSearchCollection#data_schema}
  */
  readonly dataSchema?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#deletion_policy VectorSearchCollection#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * User-specified description of the collection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#description VectorSearchCollection#description}
  */
  readonly description?: string;
  /**
  * User-specified display name of the collection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#display_name VectorSearchCollection#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#id VectorSearchCollection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels as key value pairs.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#labels VectorSearchCollection#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#location VectorSearchCollection#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#project VectorSearchCollection#project}
  */
  readonly project?: string;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#encryption_spec VectorSearchCollection#encryption_spec}
  */
  readonly encryptionSpec?: VectorSearchCollectionEncryptionSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#timeouts VectorSearchCollection#timeouts}
  */
  readonly timeouts?: VectorSearchCollectionTimeouts;
  /**
  * vector_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#vector_schema VectorSearchCollection#vector_schema}
  */
  readonly vectorSchema?: VectorSearchCollectionVectorSchema[] | cdktn.IResolvable;
}
export interface VectorSearchCollectionEncryptionSpec {
  /**
  * Resource name of the Cloud KMS key used to protect the resource.
  * 
  * The Cloud KMS key must be in the same region as the resource. It must have
  * the format
  * 'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#crypto_key_name VectorSearchCollection#crypto_key_name}
  */
  readonly cryptoKeyName: string;
}

export function vectorSearchCollectionEncryptionSpecToTerraform(struct?: VectorSearchCollectionEncryptionSpecOutputReference | VectorSearchCollectionEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crypto_key_name: cdktn.stringToTerraform(struct!.cryptoKeyName),
  }
}


export function vectorSearchCollectionEncryptionSpecToHclTerraform(struct?: VectorSearchCollectionEncryptionSpecOutputReference | VectorSearchCollectionEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crypto_key_name: {
      value: cdktn.stringToHclTerraform(struct!.cryptoKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VectorSearchCollectionEncryptionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VectorSearchCollectionEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKeyName = this._cryptoKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchCollectionEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKeyName = value.cryptoKeyName;
    }
  }

  // crypto_key_name - computed: false, optional: false, required: true
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }
}
export interface VectorSearchCollectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#create VectorSearchCollection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#delete VectorSearchCollection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#update VectorSearchCollection#update}
  */
  readonly update?: string;
}

export function vectorSearchCollectionTimeoutsToTerraform(struct?: VectorSearchCollectionTimeouts | cdktn.IResolvable): any {
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


export function vectorSearchCollectionTimeoutsToHclTerraform(struct?: VectorSearchCollectionTimeouts | cdktn.IResolvable): any {
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

export class VectorSearchCollectionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VectorSearchCollectionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VectorSearchCollectionTimeouts | cdktn.IResolvable | undefined) {
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
export interface VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig {
  /**
  * Required: ID of the embedding model to use. See
  * https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models
  * for the list of supported models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#model_id VectorSearchCollection#model_id}
  */
  readonly modelId: string;
  /**
  * Possible values:
  * RETRIEVAL_QUERY
  * RETRIEVAL_DOCUMENT
  * SEMANTIC_SIMILARITY
  * CLASSIFICATION
  * CLUSTERING
  * QUESTION_ANSWERING
  * FACT_VERIFICATION
  * CODE_RETRIEVAL_QUERY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#task_type VectorSearchCollection#task_type}
  */
  readonly taskType: string;
  /**
  * Required: Text template for the input to the model. The template must
  * contain one or more references to fields in the DataObject, e.g.:
  * "Movie Title: {title} ---- Movie Plot: {plot}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#text_template VectorSearchCollection#text_template}
  */
  readonly textTemplate: string;
}

export function vectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigToTerraform(struct?: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference | VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_id: cdktn.stringToTerraform(struct!.modelId),
    task_type: cdktn.stringToTerraform(struct!.taskType),
    text_template: cdktn.stringToTerraform(struct!.textTemplate),
  }
}


export function vectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigToHclTerraform(struct?: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference | VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type: {
      value: cdktn.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_template: {
      value: cdktn.stringToHclTerraform(struct!.textTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._textTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTemplate = this._textTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modelId = undefined;
      this._taskType = undefined;
      this._textTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modelId = value.modelId;
      this._taskType = value.taskType;
      this._textTemplate = value.textTemplate;
    }
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // text_template - computed: false, optional: false, required: true
  private _textTemplate?: string; 
  public get textTemplate() {
    return this.getStringAttribute('text_template');
  }
  public set textTemplate(value: string) {
    this._textTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTemplateInput() {
    return this._textTemplate;
  }
}
export interface VectorSearchCollectionVectorSchemaDenseVector {
  /**
  * Dimensionality of the vector field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#dimensions VectorSearchCollection#dimensions}
  */
  readonly dimensions?: number;
  /**
  * vertex_embedding_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#vertex_embedding_config VectorSearchCollection#vertex_embedding_config}
  */
  readonly vertexEmbeddingConfig?: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig;
}

export function vectorSearchCollectionVectorSchemaDenseVectorToTerraform(struct?: VectorSearchCollectionVectorSchemaDenseVectorOutputReference | VectorSearchCollectionVectorSchemaDenseVector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.numberToTerraform(struct!.dimensions),
    vertex_embedding_config: vectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigToTerraform(struct!.vertexEmbeddingConfig),
  }
}


export function vectorSearchCollectionVectorSchemaDenseVectorToHclTerraform(struct?: VectorSearchCollectionVectorSchemaDenseVectorOutputReference | VectorSearchCollectionVectorSchemaDenseVector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.numberToHclTerraform(struct!.dimensions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vertex_embedding_config: {
      value: vectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigToHclTerraform(struct!.vertexEmbeddingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VectorSearchCollectionVectorSchemaDenseVectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VectorSearchCollectionVectorSchemaDenseVector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._vertexEmbeddingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vertexEmbeddingConfig = this._vertexEmbeddingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchCollectionVectorSchemaDenseVector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimensions = undefined;
      this._vertexEmbeddingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimensions = value.dimensions;
      this._vertexEmbeddingConfig.internalValue = value.vertexEmbeddingConfig;
    }
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: number; 
  public get dimensions() {
    return this.getNumberAttribute('dimensions');
  }
  public set dimensions(value: number) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // vertex_embedding_config - computed: false, optional: true, required: false
  private _vertexEmbeddingConfig = new VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference(this, "vertex_embedding_config");
  public get vertexEmbeddingConfig() {
    return this._vertexEmbeddingConfig;
  }
  public putVertexEmbeddingConfig(value: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig) {
    this._vertexEmbeddingConfig.internalValue = value;
  }
  public resetVertexEmbeddingConfig() {
    this._vertexEmbeddingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vertexEmbeddingConfigInput() {
    return this._vertexEmbeddingConfig.internalValue;
  }
}
export interface VectorSearchCollectionVectorSchemaSparseVector {
}

export function vectorSearchCollectionVectorSchemaSparseVectorToTerraform(struct?: VectorSearchCollectionVectorSchemaSparseVectorOutputReference | VectorSearchCollectionVectorSchemaSparseVector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vectorSearchCollectionVectorSchemaSparseVectorToHclTerraform(struct?: VectorSearchCollectionVectorSchemaSparseVectorOutputReference | VectorSearchCollectionVectorSchemaSparseVector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VectorSearchCollectionVectorSchemaSparseVectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VectorSearchCollectionVectorSchemaSparseVector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchCollectionVectorSchemaSparseVector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VectorSearchCollectionVectorSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#field_name VectorSearchCollection#field_name}
  */
  readonly fieldName: string;
  /**
  * dense_vector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#dense_vector VectorSearchCollection#dense_vector}
  */
  readonly denseVector?: VectorSearchCollectionVectorSchemaDenseVector;
  /**
  * sparse_vector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#sparse_vector VectorSearchCollection#sparse_vector}
  */
  readonly sparseVector?: VectorSearchCollectionVectorSchemaSparseVector;
}

export function vectorSearchCollectionVectorSchemaToTerraform(struct?: VectorSearchCollectionVectorSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_name: cdktn.stringToTerraform(struct!.fieldName),
    dense_vector: vectorSearchCollectionVectorSchemaDenseVectorToTerraform(struct!.denseVector),
    sparse_vector: vectorSearchCollectionVectorSchemaSparseVectorToTerraform(struct!.sparseVector),
  }
}


export function vectorSearchCollectionVectorSchemaToHclTerraform(struct?: VectorSearchCollectionVectorSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_name: {
      value: cdktn.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dense_vector: {
      value: vectorSearchCollectionVectorSchemaDenseVectorToHclTerraform(struct!.denseVector),
      isBlock: true,
      type: "list",
      storageClassType: "VectorSearchCollectionVectorSchemaDenseVectorList",
    },
    sparse_vector: {
      value: vectorSearchCollectionVectorSchemaSparseVectorToHclTerraform(struct!.sparseVector),
      isBlock: true,
      type: "list",
      storageClassType: "VectorSearchCollectionVectorSchemaSparseVectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VectorSearchCollectionVectorSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VectorSearchCollectionVectorSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._denseVector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denseVector = this._denseVector?.internalValue;
    }
    if (this._sparseVector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparseVector = this._sparseVector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchCollectionVectorSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._denseVector.internalValue = undefined;
      this._sparseVector.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._denseVector.internalValue = value.denseVector;
      this._sparseVector.internalValue = value.sparseVector;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // dense_vector - computed: false, optional: true, required: false
  private _denseVector = new VectorSearchCollectionVectorSchemaDenseVectorOutputReference(this, "dense_vector");
  public get denseVector() {
    return this._denseVector;
  }
  public putDenseVector(value: VectorSearchCollectionVectorSchemaDenseVector) {
    this._denseVector.internalValue = value;
  }
  public resetDenseVector() {
    this._denseVector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denseVectorInput() {
    return this._denseVector.internalValue;
  }

  // sparse_vector - computed: false, optional: true, required: false
  private _sparseVector = new VectorSearchCollectionVectorSchemaSparseVectorOutputReference(this, "sparse_vector");
  public get sparseVector() {
    return this._sparseVector;
  }
  public putSparseVector(value: VectorSearchCollectionVectorSchemaSparseVector) {
    this._sparseVector.internalValue = value;
  }
  public resetSparseVector() {
    this._sparseVector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparseVectorInput() {
    return this._sparseVector.internalValue;
  }
}

export class VectorSearchCollectionVectorSchemaList extends cdktn.ComplexList {
  public internalValue? : VectorSearchCollectionVectorSchema[] | cdktn.IResolvable

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
  public get(index: number): VectorSearchCollectionVectorSchemaOutputReference {
    return new VectorSearchCollectionVectorSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection google_vector_search_collection}
*/
export class VectorSearchCollection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vector_search_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VectorSearchCollection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VectorSearchCollection to import
  * @param importFromId The id of the existing VectorSearchCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VectorSearchCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vector_search_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vector_search_collection google_vector_search_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VectorSearchCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: VectorSearchCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vector_search_collection',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.40.0',
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
    this._collectionId = config.collectionId;
    this._dataSchema = config.dataSchema;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._timeouts.internalValue = config.timeouts;
    this._vectorSchema.internalValue = config.vectorSchema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_schema - computed: false, optional: true, required: false
  private _dataSchema?: string; 
  public get dataSchema() {
    return this.getStringAttribute('data_schema');
  }
  public set dataSchema(value: string) {
    this._dataSchema = value;
  }
  public resetDataSchema() {
    this._dataSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSchemaInput() {
    return this._dataSchema;
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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
  private _encryptionSpec = new VectorSearchCollectionEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: VectorSearchCollectionEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VectorSearchCollectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VectorSearchCollectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vector_schema - computed: false, optional: true, required: false
  private _vectorSchema = new VectorSearchCollectionVectorSchemaList(this, "vector_schema", true);
  public get vectorSchema() {
    return this._vectorSchema;
  }
  public putVectorSchema(value: VectorSearchCollectionVectorSchema[] | cdktn.IResolvable) {
    this._vectorSchema.internalValue = value;
  }
  public resetVectorSchema() {
    this._vectorSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorSchemaInput() {
    return this._vectorSchema.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collection_id: cdktn.stringToTerraform(this._collectionId),
      data_schema: cdktn.stringToTerraform(this._dataSchema),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      encryption_spec: vectorSearchCollectionEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      timeouts: vectorSearchCollectionTimeoutsToTerraform(this._timeouts.internalValue),
      vector_schema: cdktn.listMapper(vectorSearchCollectionVectorSchemaToTerraform, true)(this._vectorSchema.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collection_id: {
        value: cdktn.stringToHclTerraform(this._collectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_schema: {
        value: cdktn.stringToHclTerraform(this._dataSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_spec: {
        value: vectorSearchCollectionEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VectorSearchCollectionEncryptionSpecList",
      },
      timeouts: {
        value: vectorSearchCollectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VectorSearchCollectionTimeouts",
      },
      vector_schema: {
        value: cdktn.listMapperHcl(vectorSearchCollectionVectorSchemaToHclTerraform, true)(this._vectorSchema.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VectorSearchCollectionVectorSchemaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
