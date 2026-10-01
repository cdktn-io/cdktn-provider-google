/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VertexAiRagCorpusConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#deletion_policy VertexAiRagCorpus#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Optional. The description of the RagCorpus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#description VertexAiRagCorpus#description}
  */
  readonly description?: string;
  /**
  * Required. The display name of the RagCorpus. The name can be up to 128
  * characters long and can consist of any UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#display_name VertexAiRagCorpus#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}
  */
  readonly project?: string;
  /**
  * The region of the RagCorpus. eg europe-west4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#region VertexAiRagCorpus#region}
  */
  readonly region: string;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#encryption_spec VertexAiRagCorpus#encryption_spec}
  */
  readonly encryptionSpec?: VertexAiRagCorpusEncryptionSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#timeouts VertexAiRagCorpus#timeouts}
  */
  readonly timeouts?: VertexAiRagCorpusTimeouts;
  /**
  * vector_db_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#vector_db_config VertexAiRagCorpus#vector_db_config}
  */
  readonly vectorDbConfig?: VertexAiRagCorpusVectorDbConfig;
  /**
  * vertex_ai_search_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#vertex_ai_search_config VertexAiRagCorpus#vertex_ai_search_config}
  */
  readonly vertexAiSearchConfig?: VertexAiRagCorpusVertexAiSearchConfig;
}
export interface VertexAiRagCorpusCorpusStatus {
}

export function vertexAiRagCorpusCorpusStatusToTerraform(struct?: VertexAiRagCorpusCorpusStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiRagCorpusCorpusStatusToHclTerraform(struct?: VertexAiRagCorpusCorpusStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiRagCorpusCorpusStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiRagCorpusCorpusStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusCorpusStatus | undefined) {
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

export class VertexAiRagCorpusCorpusStatusList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiRagCorpusCorpusStatusOutputReference {
    return new VertexAiRagCorpusCorpusStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiRagCorpusEncryptionSpec {
  /**
  * Required. The Cloud KMS resource identifier of the customer managed
  * encryption key used to protect the resource. Has the form:
  * projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
  * The key needs to be in the same region as where the resource is
  * created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#kms_key_name VertexAiRagCorpus#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function vertexAiRagCorpusEncryptionSpecToTerraform(struct?: VertexAiRagCorpusEncryptionSpecOutputReference | VertexAiRagCorpusEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function vertexAiRagCorpusEncryptionSpecToHclTerraform(struct?: VertexAiRagCorpusEncryptionSpecOutputReference | VertexAiRagCorpusEncryptionSpec): any {
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

export class VertexAiRagCorpusEncryptionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusEncryptionSpec | undefined) {
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
export interface VertexAiRagCorpusTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#create VertexAiRagCorpus#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#delete VertexAiRagCorpus#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#update VertexAiRagCorpus#update}
  */
  readonly update?: string;
}

export function vertexAiRagCorpusTimeoutsToTerraform(struct?: VertexAiRagCorpusTimeouts | cdktn.IResolvable): any {
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


export function vertexAiRagCorpusTimeoutsToHclTerraform(struct?: VertexAiRagCorpusTimeouts | cdktn.IResolvable): any {
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

export class VertexAiRagCorpusTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiRagCorpusTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VertexAiRagCorpusTimeouts | cdktn.IResolvable | undefined) {
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
export interface VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig {
  /**
  * The SecretManager secret version resource name storing API key.
  * e.g. projects/{project}/secrets/{secret}/versions/{version}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#api_key_secret_version VertexAiRagCorpus#api_key_secret_version}
  */
  readonly apiKeySecretVersion?: string;
  /**
  * The API key string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#api_key_string VertexAiRagCorpus#api_key_string}
  */
  readonly apiKeyString?: string;
}

export function vertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigToTerraform(struct?: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference | VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_secret_version: cdktn.stringToTerraform(struct!.apiKeySecretVersion),
    api_key_string: cdktn.stringToTerraform(struct!.apiKeyString),
  }
}


export function vertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference | VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_secret_version: {
      value: cdktn.stringToHclTerraform(struct!.apiKeySecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_string: {
      value: cdktn.stringToHclTerraform(struct!.apiKeyString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeySecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeySecretVersion = this._apiKeySecretVersion;
    }
    if (this._apiKeyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyString = this._apiKeyString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeySecretVersion = undefined;
      this._apiKeyString = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeySecretVersion = value.apiKeySecretVersion;
      this._apiKeyString = value.apiKeyString;
    }
  }

  // api_key_secret_version - computed: false, optional: true, required: false
  private _apiKeySecretVersion?: string; 
  public get apiKeySecretVersion() {
    return this.getStringAttribute('api_key_secret_version');
  }
  public set apiKeySecretVersion(value: string) {
    this._apiKeySecretVersion = value;
  }
  public resetApiKeySecretVersion() {
    this._apiKeySecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretVersionInput() {
    return this._apiKeySecretVersion;
  }

  // api_key_string - computed: false, optional: true, required: false
  private _apiKeyString?: string; 
  public get apiKeyString() {
    return this.getStringAttribute('api_key_string');
  }
  public set apiKeyString(value: string) {
    this._apiKeyString = value;
  }
  public resetApiKeyString() {
    this._apiKeyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyStringInput() {
    return this._apiKeyString;
  }
}
export interface VertexAiRagCorpusVectorDbConfigApiAuth {
  /**
  * api_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#api_key_config VertexAiRagCorpus#api_key_config}
  */
  readonly apiKeyConfig?: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig;
}

export function vertexAiRagCorpusVectorDbConfigApiAuthToTerraform(struct?: VertexAiRagCorpusVectorDbConfigApiAuthOutputReference | VertexAiRagCorpusVectorDbConfigApiAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_config: vertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigToTerraform(struct!.apiKeyConfig),
  }
}


export function vertexAiRagCorpusVectorDbConfigApiAuthToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigApiAuthOutputReference | VertexAiRagCorpusVectorDbConfigApiAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_config: {
      value: vertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigToHclTerraform(struct!.apiKeyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVectorDbConfigApiAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfigApiAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyConfig = this._apiKeyConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfigApiAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeyConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeyConfig.internalValue = value.apiKeyConfig;
    }
  }

  // api_key_config - computed: false, optional: true, required: false
  private _apiKeyConfig = new VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference(this, "api_key_config");
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }
  public putApiKeyConfig(value: VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig) {
    this._apiKeyConfig.internalValue = value;
  }
  public resetApiKeyConfig() {
    this._apiKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyConfigInput() {
    return this._apiKeyConfig.internalValue;
  }
}
export interface VertexAiRagCorpusVectorDbConfigPinecone {
  /**
  * Pinecone index name. This value cannot be changed after it's set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#index_name VertexAiRagCorpus#index_name}
  */
  readonly indexName: string;
}

export function vertexAiRagCorpusVectorDbConfigPineconeToTerraform(struct?: VertexAiRagCorpusVectorDbConfigPineconeOutputReference | VertexAiRagCorpusVectorDbConfigPinecone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index_name: cdktn.stringToTerraform(struct!.indexName),
  }
}


export function vertexAiRagCorpusVectorDbConfigPineconeToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigPineconeOutputReference | VertexAiRagCorpusVectorDbConfigPinecone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index_name: {
      value: cdktn.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVectorDbConfigPineconeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfigPinecone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfigPinecone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._indexName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._indexName = value.indexName;
    }
  }

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }
}
export interface VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint {
  /**
  * Required. The endpoint resource name. Format:
  * projects/{project}/locations/{location}/publishers/{publisher}/models/{model}
  * or projects/{project}/locations/{location}/endpoints/{endpoint}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#endpoint VertexAiRagCorpus#endpoint}
  */
  readonly endpoint: string;
}

export function vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointToTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference | VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
  }
}


export function vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference | VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // model_version_id - computed: true, optional: false, required: false
  public get modelVersionId() {
    return this.getStringAttribute('model_version_id');
  }
}
export interface VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig {
  /**
  * vertex_prediction_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#vertex_prediction_endpoint VertexAiRagCorpus#vertex_prediction_endpoint}
  */
  readonly vertexPredictionEndpoint?: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint;
}

export function vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigToTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference | VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vertex_prediction_endpoint: vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointToTerraform(struct!.vertexPredictionEndpoint),
  }
}


export function vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference | VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vertex_prediction_endpoint: {
      value: vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointToHclTerraform(struct!.vertexPredictionEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vertexPredictionEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vertexPredictionEndpoint = this._vertexPredictionEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vertexPredictionEndpoint.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vertexPredictionEndpoint.internalValue = value.vertexPredictionEndpoint;
    }
  }

  // vertex_prediction_endpoint - computed: false, optional: true, required: false
  private _vertexPredictionEndpoint = new VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference(this, "vertex_prediction_endpoint");
  public get vertexPredictionEndpoint() {
    return this._vertexPredictionEndpoint;
  }
  public putVertexPredictionEndpoint(value: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint) {
    this._vertexPredictionEndpoint.internalValue = value;
  }
  public resetVertexPredictionEndpoint() {
    this._vertexPredictionEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vertexPredictionEndpointInput() {
    return this._vertexPredictionEndpoint.internalValue;
  }
}
export interface VertexAiRagCorpusVectorDbConfigRagManagedDbAnn {
  /**
  * Number of leaf nodes in the tree-based structure. Default value is 500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#leaf_count VertexAiRagCorpus#leaf_count}
  */
  readonly leafCount?: number;
  /**
  * The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#tree_depth VertexAiRagCorpus#tree_depth}
  */
  readonly treeDepth?: number;
}

export function vertexAiRagCorpusVectorDbConfigRagManagedDbAnnToTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference | VertexAiRagCorpusVectorDbConfigRagManagedDbAnn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    leaf_count: cdktn.numberToTerraform(struct!.leafCount),
    tree_depth: cdktn.numberToTerraform(struct!.treeDepth),
  }
}


export function vertexAiRagCorpusVectorDbConfigRagManagedDbAnnToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference | VertexAiRagCorpusVectorDbConfigRagManagedDbAnn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    leaf_count: {
      value: cdktn.numberToHclTerraform(struct!.leafCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tree_depth: {
      value: cdktn.numberToHclTerraform(struct!.treeDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfigRagManagedDbAnn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leafCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.leafCount = this._leafCount;
    }
    if (this._treeDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.treeDepth = this._treeDepth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leafCount = undefined;
      this._treeDepth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leafCount = value.leafCount;
      this._treeDepth = value.treeDepth;
    }
  }

  // leaf_count - computed: true, optional: true, required: false
  private _leafCount?: number; 
  public get leafCount() {
    return this.getNumberAttribute('leaf_count');
  }
  public set leafCount(value: number) {
    this._leafCount = value;
  }
  public resetLeafCount() {
    this._leafCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafCountInput() {
    return this._leafCount;
  }

  // tree_depth - computed: true, optional: true, required: false
  private _treeDepth?: number; 
  public get treeDepth() {
    return this.getNumberAttribute('tree_depth');
  }
  public set treeDepth(value: number) {
    this._treeDepth = value;
  }
  public resetTreeDepth() {
    this._treeDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treeDepthInput() {
    return this._treeDepth;
  }
}
export interface VertexAiRagCorpusVectorDbConfigRagManagedDbKnn {
}

export function vertexAiRagCorpusVectorDbConfigRagManagedDbKnnToTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference | VertexAiRagCorpusVectorDbConfigRagManagedDbKnn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiRagCorpusVectorDbConfigRagManagedDbKnnToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference | VertexAiRagCorpusVectorDbConfigRagManagedDbKnn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfigRagManagedDbKnn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VertexAiRagCorpusVectorDbConfigRagManagedDb {
  /**
  * ann block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#ann VertexAiRagCorpus#ann}
  */
  readonly ann?: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn;
  /**
  * knn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#knn VertexAiRagCorpus#knn}
  */
  readonly knn?: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn;
}

export function vertexAiRagCorpusVectorDbConfigRagManagedDbToTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference | VertexAiRagCorpusVectorDbConfigRagManagedDb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ann: vertexAiRagCorpusVectorDbConfigRagManagedDbAnnToTerraform(struct!.ann),
    knn: vertexAiRagCorpusVectorDbConfigRagManagedDbKnnToTerraform(struct!.knn),
  }
}


export function vertexAiRagCorpusVectorDbConfigRagManagedDbToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference | VertexAiRagCorpusVectorDbConfigRagManagedDb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ann: {
      value: vertexAiRagCorpusVectorDbConfigRagManagedDbAnnToHclTerraform(struct!.ann),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagCorpusVectorDbConfigRagManagedDbAnnList",
    },
    knn: {
      value: vertexAiRagCorpusVectorDbConfigRagManagedDbKnnToHclTerraform(struct!.knn),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagCorpusVectorDbConfigRagManagedDbKnnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfigRagManagedDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ann?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ann = this._ann?.internalValue;
    }
    if (this._knn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knn = this._knn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfigRagManagedDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ann.internalValue = undefined;
      this._knn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ann.internalValue = value.ann;
      this._knn.internalValue = value.knn;
    }
  }

  // ann - computed: false, optional: true, required: false
  private _ann = new VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference(this, "ann");
  public get ann() {
    return this._ann;
  }
  public putAnn(value: VertexAiRagCorpusVectorDbConfigRagManagedDbAnn) {
    this._ann.internalValue = value;
  }
  public resetAnn() {
    this._ann.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annInput() {
    return this._ann.internalValue;
  }

  // knn - computed: false, optional: true, required: false
  private _knn = new VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference(this, "knn");
  public get knn() {
    return this._knn;
  }
  public putKnn(value: VertexAiRagCorpusVectorDbConfigRagManagedDbKnn) {
    this._knn.internalValue = value;
  }
  public resetKnn() {
    this._knn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knnInput() {
    return this._knn.internalValue;
  }
}
export interface VertexAiRagCorpusVectorDbConfigVertexVectorSearch {
  /**
  * The resource name of the Index.
  * Format: projects/{project}/locations/{location}/indexes/{index}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#index VertexAiRagCorpus#index}
  */
  readonly index: string;
  /**
  * The resource name of the Index Endpoint.
  * Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#index_endpoint VertexAiRagCorpus#index_endpoint}
  */
  readonly indexEndpoint: string;
}

export function vertexAiRagCorpusVectorDbConfigVertexVectorSearchToTerraform(struct?: VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference | VertexAiRagCorpusVectorDbConfigVertexVectorSearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    index_endpoint: cdktn.stringToTerraform(struct!.indexEndpoint),
  }
}


export function vertexAiRagCorpusVectorDbConfigVertexVectorSearchToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference | VertexAiRagCorpusVectorDbConfigVertexVectorSearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.indexEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfigVertexVectorSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._indexEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexEndpoint = this._indexEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfigVertexVectorSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._indexEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._indexEndpoint = value.indexEndpoint;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // index_endpoint - computed: false, optional: false, required: true
  private _indexEndpoint?: string; 
  public get indexEndpoint() {
    return this.getStringAttribute('index_endpoint');
  }
  public set indexEndpoint(value: string) {
    this._indexEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexEndpointInput() {
    return this._indexEndpoint;
  }
}
export interface VertexAiRagCorpusVectorDbConfig {
  /**
  * api_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#api_auth VertexAiRagCorpus#api_auth}
  */
  readonly apiAuth?: VertexAiRagCorpusVectorDbConfigApiAuth;
  /**
  * pinecone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#pinecone VertexAiRagCorpus#pinecone}
  */
  readonly pinecone?: VertexAiRagCorpusVectorDbConfigPinecone;
  /**
  * rag_embedding_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#rag_embedding_model_config VertexAiRagCorpus#rag_embedding_model_config}
  */
  readonly ragEmbeddingModelConfig?: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig;
  /**
  * rag_managed_db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#rag_managed_db VertexAiRagCorpus#rag_managed_db}
  */
  readonly ragManagedDb?: VertexAiRagCorpusVectorDbConfigRagManagedDb;
  /**
  * vertex_vector_search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#vertex_vector_search VertexAiRagCorpus#vertex_vector_search}
  */
  readonly vertexVectorSearch?: VertexAiRagCorpusVectorDbConfigVertexVectorSearch;
}

export function vertexAiRagCorpusVectorDbConfigToTerraform(struct?: VertexAiRagCorpusVectorDbConfigOutputReference | VertexAiRagCorpusVectorDbConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_auth: vertexAiRagCorpusVectorDbConfigApiAuthToTerraform(struct!.apiAuth),
    pinecone: vertexAiRagCorpusVectorDbConfigPineconeToTerraform(struct!.pinecone),
    rag_embedding_model_config: vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigToTerraform(struct!.ragEmbeddingModelConfig),
    rag_managed_db: vertexAiRagCorpusVectorDbConfigRagManagedDbToTerraform(struct!.ragManagedDb),
    vertex_vector_search: vertexAiRagCorpusVectorDbConfigVertexVectorSearchToTerraform(struct!.vertexVectorSearch),
  }
}


export function vertexAiRagCorpusVectorDbConfigToHclTerraform(struct?: VertexAiRagCorpusVectorDbConfigOutputReference | VertexAiRagCorpusVectorDbConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_auth: {
      value: vertexAiRagCorpusVectorDbConfigApiAuthToHclTerraform(struct!.apiAuth),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagCorpusVectorDbConfigApiAuthList",
    },
    pinecone: {
      value: vertexAiRagCorpusVectorDbConfigPineconeToHclTerraform(struct!.pinecone),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagCorpusVectorDbConfigPineconeList",
    },
    rag_embedding_model_config: {
      value: vertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigToHclTerraform(struct!.ragEmbeddingModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigList",
    },
    rag_managed_db: {
      value: vertexAiRagCorpusVectorDbConfigRagManagedDbToHclTerraform(struct!.ragManagedDb),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagCorpusVectorDbConfigRagManagedDbList",
    },
    vertex_vector_search: {
      value: vertexAiRagCorpusVectorDbConfigVertexVectorSearchToHclTerraform(struct!.vertexVectorSearch),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiRagCorpusVectorDbConfigVertexVectorSearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVectorDbConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVectorDbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiAuth = this._apiAuth?.internalValue;
    }
    if (this._pinecone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinecone = this._pinecone?.internalValue;
    }
    if (this._ragEmbeddingModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ragEmbeddingModelConfig = this._ragEmbeddingModelConfig?.internalValue;
    }
    if (this._ragManagedDb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ragManagedDb = this._ragManagedDb?.internalValue;
    }
    if (this._vertexVectorSearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vertexVectorSearch = this._vertexVectorSearch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVectorDbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiAuth.internalValue = undefined;
      this._pinecone.internalValue = undefined;
      this._ragEmbeddingModelConfig.internalValue = undefined;
      this._ragManagedDb.internalValue = undefined;
      this._vertexVectorSearch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiAuth.internalValue = value.apiAuth;
      this._pinecone.internalValue = value.pinecone;
      this._ragEmbeddingModelConfig.internalValue = value.ragEmbeddingModelConfig;
      this._ragManagedDb.internalValue = value.ragManagedDb;
      this._vertexVectorSearch.internalValue = value.vertexVectorSearch;
    }
  }

  // api_auth - computed: false, optional: true, required: false
  private _apiAuth = new VertexAiRagCorpusVectorDbConfigApiAuthOutputReference(this, "api_auth");
  public get apiAuth() {
    return this._apiAuth;
  }
  public putApiAuth(value: VertexAiRagCorpusVectorDbConfigApiAuth) {
    this._apiAuth.internalValue = value;
  }
  public resetApiAuth() {
    this._apiAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAuthInput() {
    return this._apiAuth.internalValue;
  }

  // pinecone - computed: false, optional: true, required: false
  private _pinecone = new VertexAiRagCorpusVectorDbConfigPineconeOutputReference(this, "pinecone");
  public get pinecone() {
    return this._pinecone;
  }
  public putPinecone(value: VertexAiRagCorpusVectorDbConfigPinecone) {
    this._pinecone.internalValue = value;
  }
  public resetPinecone() {
    this._pinecone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pineconeInput() {
    return this._pinecone.internalValue;
  }

  // rag_embedding_model_config - computed: false, optional: true, required: false
  private _ragEmbeddingModelConfig = new VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference(this, "rag_embedding_model_config");
  public get ragEmbeddingModelConfig() {
    return this._ragEmbeddingModelConfig;
  }
  public putRagEmbeddingModelConfig(value: VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig) {
    this._ragEmbeddingModelConfig.internalValue = value;
  }
  public resetRagEmbeddingModelConfig() {
    this._ragEmbeddingModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ragEmbeddingModelConfigInput() {
    return this._ragEmbeddingModelConfig.internalValue;
  }

  // rag_managed_db - computed: false, optional: true, required: false
  private _ragManagedDb = new VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference(this, "rag_managed_db");
  public get ragManagedDb() {
    return this._ragManagedDb;
  }
  public putRagManagedDb(value: VertexAiRagCorpusVectorDbConfigRagManagedDb) {
    this._ragManagedDb.internalValue = value;
  }
  public resetRagManagedDb() {
    this._ragManagedDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ragManagedDbInput() {
    return this._ragManagedDb.internalValue;
  }

  // vertex_vector_search - computed: false, optional: true, required: false
  private _vertexVectorSearch = new VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference(this, "vertex_vector_search");
  public get vertexVectorSearch() {
    return this._vertexVectorSearch;
  }
  public putVertexVectorSearch(value: VertexAiRagCorpusVectorDbConfigVertexVectorSearch) {
    this._vertexVectorSearch.internalValue = value;
  }
  public resetVertexVectorSearch() {
    this._vertexVectorSearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vertexVectorSearchInput() {
    return this._vertexVectorSearch.internalValue;
  }
}
export interface VertexAiRagCorpusVertexAiSearchConfig {
  /**
  * Vertex AI Search Serving Config resource full name. For example,
  * projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config}
  * or
  * projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#serving_config VertexAiRagCorpus#serving_config}
  */
  readonly servingConfig: string;
}

export function vertexAiRagCorpusVertexAiSearchConfigToTerraform(struct?: VertexAiRagCorpusVertexAiSearchConfigOutputReference | VertexAiRagCorpusVertexAiSearchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    serving_config: cdktn.stringToTerraform(struct!.servingConfig),
  }
}


export function vertexAiRagCorpusVertexAiSearchConfigToHclTerraform(struct?: VertexAiRagCorpusVertexAiSearchConfigOutputReference | VertexAiRagCorpusVertexAiSearchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    serving_config: {
      value: cdktn.stringToHclTerraform(struct!.servingConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiRagCorpusVertexAiSearchConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiRagCorpusVertexAiSearchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servingConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.servingConfig = this._servingConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiRagCorpusVertexAiSearchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._servingConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._servingConfig = value.servingConfig;
    }
  }

  // serving_config - computed: false, optional: false, required: true
  private _servingConfig?: string; 
  public get servingConfig() {
    return this.getStringAttribute('serving_config');
  }
  public set servingConfig(value: string) {
    this._servingConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servingConfigInput() {
    return this._servingConfig;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus google_vertex_ai_rag_corpus}
*/
export class VertexAiRagCorpus extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_rag_corpus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VertexAiRagCorpus resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiRagCorpus to import
  * @param importFromId The id of the existing VertexAiRagCorpus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiRagCorpus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_rag_corpus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_rag_corpus google_vertex_ai_rag_corpus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiRagCorpusConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiRagCorpusConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_rag_corpus',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.5.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._project = config.project;
    this._region = config.region;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._timeouts.internalValue = config.timeouts;
    this._vectorDbConfig.internalValue = config.vectorDbConfig;
    this._vertexAiSearchConfig.internalValue = config.vertexAiSearchConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // corpus_status - computed: true, optional: false, required: false
  private _corpusStatus = new VertexAiRagCorpusCorpusStatusList(this, "corpus_status", false);
  public get corpusStatus() {
    return this._corpusStatus;
  }

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new VertexAiRagCorpusEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: VertexAiRagCorpusEncryptionSpec) {
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
  private _timeouts = new VertexAiRagCorpusTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiRagCorpusTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vector_db_config - computed: false, optional: true, required: false
  private _vectorDbConfig = new VertexAiRagCorpusVectorDbConfigOutputReference(this, "vector_db_config");
  public get vectorDbConfig() {
    return this._vectorDbConfig;
  }
  public putVectorDbConfig(value: VertexAiRagCorpusVectorDbConfig) {
    this._vectorDbConfig.internalValue = value;
  }
  public resetVectorDbConfig() {
    this._vectorDbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorDbConfigInput() {
    return this._vectorDbConfig.internalValue;
  }

  // vertex_ai_search_config - computed: false, optional: true, required: false
  private _vertexAiSearchConfig = new VertexAiRagCorpusVertexAiSearchConfigOutputReference(this, "vertex_ai_search_config");
  public get vertexAiSearchConfig() {
    return this._vertexAiSearchConfig;
  }
  public putVertexAiSearchConfig(value: VertexAiRagCorpusVertexAiSearchConfig) {
    this._vertexAiSearchConfig.internalValue = value;
  }
  public resetVertexAiSearchConfig() {
    this._vertexAiSearchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vertexAiSearchConfigInput() {
    return this._vertexAiSearchConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      encryption_spec: vertexAiRagCorpusEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      timeouts: vertexAiRagCorpusTimeoutsToTerraform(this._timeouts.internalValue),
      vector_db_config: vertexAiRagCorpusVectorDbConfigToTerraform(this._vectorDbConfig.internalValue),
      vertex_ai_search_config: vertexAiRagCorpusVertexAiSearchConfigToTerraform(this._vertexAiSearchConfig.internalValue),
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
      encryption_spec: {
        value: vertexAiRagCorpusEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiRagCorpusEncryptionSpecList",
      },
      timeouts: {
        value: vertexAiRagCorpusTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiRagCorpusTimeouts",
      },
      vector_db_config: {
        value: vertexAiRagCorpusVectorDbConfigToHclTerraform(this._vectorDbConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiRagCorpusVectorDbConfigList",
      },
      vertex_ai_search_config: {
        value: vertexAiRagCorpusVertexAiSearchConfigToHclTerraform(this._vertexAiSearchConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiRagCorpusVertexAiSearchConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
