/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VertexAiReasoningEngineConfig extends cdktn.TerraformMetaArguments {
  /**
  * This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_reasoning_engine.html.markdown for specifics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#deletion_policy VertexAiReasoningEngine#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the ReasoningEngine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#description VertexAiReasoningEngine#description}
  */
  readonly description?: string;
  /**
  * The display name of the ReasoningEngine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#display_name VertexAiReasoningEngine#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#id VertexAiReasoningEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels associated with this ReasoningEngine. You can use these to
  * organize and group your ReasoningEngines.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#labels VertexAiReasoningEngine#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#project VertexAiReasoningEngine#project}
  */
  readonly project?: string;
  /**
  * The region of the reasoning engine. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#region VertexAiReasoningEngine#region}
  */
  readonly region?: string;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#encryption_spec VertexAiReasoningEngine#encryption_spec}
  */
  readonly encryptionSpec?: VertexAiReasoningEngineEncryptionSpec;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#spec VertexAiReasoningEngine#spec}
  */
  readonly spec?: VertexAiReasoningEngineSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#timeouts VertexAiReasoningEngine#timeouts}
  */
  readonly timeouts?: VertexAiReasoningEngineTimeouts;
}
export interface VertexAiReasoningEngineEncryptionSpec {
  /**
  * Required. The Cloud KMS resource identifier of the customer managed
  * encryption key used to protect a resource. Has the form:
  * projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
  * The key needs to be in the same region as where the compute resource
  * is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#kms_key_name VertexAiReasoningEngine#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function vertexAiReasoningEngineEncryptionSpecToTerraform(struct?: VertexAiReasoningEngineEncryptionSpecOutputReference | VertexAiReasoningEngineEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function vertexAiReasoningEngineEncryptionSpecToHclTerraform(struct?: VertexAiReasoningEngineEncryptionSpecOutputReference | VertexAiReasoningEngineEncryptionSpec): any {
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

export class VertexAiReasoningEngineEncryptionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineEncryptionSpec | undefined) {
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
export interface VertexAiReasoningEngineSpecContainerSpec {
  /**
  * The Artifact Registry Docker image URI (e.g.,
  * 'us-central1-docker.pkg.dev/my-project/my-repo/my-image:tag') of the
  * container image that is to be run on each worker replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#image_uri VertexAiReasoningEngine#image_uri}
  */
  readonly imageUri: string;
}

export function vertexAiReasoningEngineSpecContainerSpecToTerraform(struct?: VertexAiReasoningEngineSpecContainerSpecOutputReference | VertexAiReasoningEngineSpecContainerSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_uri: cdktn.stringToTerraform(struct!.imageUri),
  }
}


export function vertexAiReasoningEngineSpecContainerSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecContainerSpecOutputReference | VertexAiReasoningEngineSpecContainerSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_uri: {
      value: cdktn.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecContainerSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecContainerSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecContainerSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageUri = value.imageUri;
    }
  }

  // image_uri - computed: false, optional: false, required: true
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }
}
export interface VertexAiReasoningEngineSpecDeploymentSpecEnv {
  /**
  * The name of the environment variable. Must be a valid
  * C identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#name VertexAiReasoningEngine#name}
  */
  readonly name: string;
  /**
  * Variables that reference a $(VAR_NAME) are expanded using
  * the previous defined environment variables in the container
  * and any service environment variables. If a variable cannot
  * be resolved, the reference in the input string will be
  * unchanged. The $(VAR_NAME) syntax can be escaped with a
  * double $$, ie: $$(VAR_NAME). Escaped references will never
  * be expanded, regardless of whether the variable exists
  * or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#value VertexAiReasoningEngine#value}
  */
  readonly value: string;
}

export function vertexAiReasoningEngineSpecDeploymentSpecEnvToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function vertexAiReasoningEngineSpecDeploymentSpecEnvToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpecEnv | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpecEnv | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VertexAiReasoningEngineSpecDeploymentSpecEnvList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineSpecDeploymentSpecEnv[] | cdktn.IResolvable

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
  public get(index: number): VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference {
    return new VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs {
  /**
  * Required. The DNS name suffix of the zone being peered
  * to, e.g., "my-internal-domain.corp.".
  * Must end with a dot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#domain VertexAiReasoningEngine#domain}
  */
  readonly domain: string;
  /**
  * Required. The VPC network name in the targetProject
  * where the DNS zone specified by 'domain' is visible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#target_network VertexAiReasoningEngine#target_network}
  */
  readonly targetNetwork: string;
  /**
  * Required. The project id hosting the Cloud DNS managed
  * zone that contains the 'domain'.
  * The Vertex AI service Agent requires the dns.peer role
  * on this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#target_project VertexAiReasoningEngine#target_project}
  */
  readonly targetProject: string;
}

export function vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable): any {
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


export function vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable): any {
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

export class VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs | cdktn.IResolvable | undefined) {
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

export class VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable

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
  public get(index: number): VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference {
    return new VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig {
  /**
  * Optional. The name of the Compute Engine network attachment
  * to attach to the resource within the region and user project.
  * To specify this field, you must have already created a network attachment.
  * This field is only used for resources using PSC-Interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#network_attachment VertexAiReasoningEngine#network_attachment}
  */
  readonly networkAttachment?: string;
  /**
  * dns_peering_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#dns_peering_configs VertexAiReasoningEngine#dns_peering_configs}
  */
  readonly dnsPeeringConfigs?: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable;
}

export function vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference | VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_attachment: cdktn.stringToTerraform(struct!.networkAttachment),
    dns_peering_configs: cdktn.listMapper(vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsToTerraform, true)(struct!.dnsPeeringConfigs),
  }
}


export function vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference | VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig): any {
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
      value: cdktn.listMapperHcl(vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsToHclTerraform, true)(struct!.dnsPeeringConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig | undefined {
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

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig | undefined) {
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
  private _dnsPeeringConfigs = new VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList(this, "dns_peering_configs", false);
  public get dnsPeeringConfigs() {
    return this._dnsPeeringConfigs;
  }
  public putDnsPeeringConfigs(value: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs[] | cdktn.IResolvable) {
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
export interface VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef {
  /**
  * The name of the secret in Cloud Secret Manager.
  * Format: {secret_name}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#secret VertexAiReasoningEngine#secret}
  */
  readonly secret: string;
  /**
  * The Cloud Secret Manager secret version. Can be 'latest'
  * for the latest version, an integer for a specific
  * version, or a version alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#version VertexAiReasoningEngine#version}
  */
  readonly version?: string;
}

export function vertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference | VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret: cdktn.stringToTerraform(struct!.secret),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function vertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference | VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._version = value.version;
    }
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface VertexAiReasoningEngineSpecDeploymentSpecSecretEnv {
  /**
  * The name of the environment variable. Must be a valid C
  * identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#name VertexAiReasoningEngine#name}
  */
  readonly name: string;
  /**
  * secret_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#secret_ref VertexAiReasoningEngine#secret_ref}
  */
  readonly secretRef: VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef;
}

export function vertexAiReasoningEngineSpecDeploymentSpecSecretEnvToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecSecretEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    secret_ref: vertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefToTerraform(struct!.secretRef),
  }
}


export function vertexAiReasoningEngineSpecDeploymentSpecSecretEnvToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecSecretEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: vertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpecSecretEnv | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpecSecretEnv | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secretRef.internalValue = value.secretRef;
    }
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

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList extends cdktn.ComplexList {
  public internalValue? : VertexAiReasoningEngineSpecDeploymentSpecSecretEnv[] | cdktn.IResolvable

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
  public get(index: number): VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference {
    return new VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiReasoningEngineSpecDeploymentSpec {
  /**
  * Optional. Concurrency for each container and agent server.
  * Recommended value: 2 * cpu + 1. Defaults to 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#container_concurrency VertexAiReasoningEngine#container_concurrency}
  */
  readonly containerConcurrency?: number;
  /**
  * Optional. The maximum number of application instances that can be
  * launched to handle increased traffic. Defaults to 100.
  * Range: [1, 1000]. If VPC-SC or PSC-I is enabled, the acceptable
  * range is [1, 100].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#max_instances VertexAiReasoningEngine#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * Optional. The minimum number of application instances that will be
  * kept running at all times. Defaults to 1. Range: [0, 10].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#min_instances VertexAiReasoningEngine#min_instances}
  */
  readonly minInstances?: number;
  /**
  * Optional. Resource limits for each container.
  * Only 'cpu' and 'memory' keys are supported.
  * 
  * Defaults to {"cpu": "4", "memory": "4Gi"}.
  * 
  * The only supported values for CPU are '1', '2', '4', '6' and '8'.
  * For more information, go to
  * https://cloud.google.com/run/docs/configuring/cpu.
  * 
  * The only supported values for memory are '1Gi', '2Gi', ... '32 Gi'.
  * For more information, go to
  * https://cloud.google.com/run/docs/configuring/memory-limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#resource_limits VertexAiReasoningEngine#resource_limits}
  */
  readonly resourceLimits?: { [key: string]: string };
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#env VertexAiReasoningEngine#env}
  */
  readonly env?: VertexAiReasoningEngineSpecDeploymentSpecEnv[] | cdktn.IResolvable;
  /**
  * psc_interface_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#psc_interface_config VertexAiReasoningEngine#psc_interface_config}
  */
  readonly pscInterfaceConfig?: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig;
  /**
  * secret_env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#secret_env VertexAiReasoningEngine#secret_env}
  */
  readonly secretEnv?: VertexAiReasoningEngineSpecDeploymentSpecSecretEnv[] | cdktn.IResolvable;
}

export function vertexAiReasoningEngineSpecDeploymentSpecToTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecOutputReference | VertexAiReasoningEngineSpecDeploymentSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_concurrency: cdktn.numberToTerraform(struct!.containerConcurrency),
    max_instances: cdktn.numberToTerraform(struct!.maxInstances),
    min_instances: cdktn.numberToTerraform(struct!.minInstances),
    resource_limits: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.resourceLimits),
    env: cdktn.listMapper(vertexAiReasoningEngineSpecDeploymentSpecEnvToTerraform, true)(struct!.env),
    psc_interface_config: vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigToTerraform(struct!.pscInterfaceConfig),
    secret_env: cdktn.listMapper(vertexAiReasoningEngineSpecDeploymentSpecSecretEnvToTerraform, true)(struct!.secretEnv),
  }
}


export function vertexAiReasoningEngineSpecDeploymentSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecDeploymentSpecOutputReference | VertexAiReasoningEngineSpecDeploymentSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_concurrency: {
      value: cdktn.numberToHclTerraform(struct!.containerConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_instances: {
      value: cdktn.numberToHclTerraform(struct!.maxInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instances: {
      value: cdktn.numberToHclTerraform(struct!.minInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_limits: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.resourceLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    env: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineSpecDeploymentSpecEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecEnvList",
    },
    psc_interface_config: {
      value: vertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigToHclTerraform(struct!.pscInterfaceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigList",
    },
    secret_env: {
      value: cdktn.listMapperHcl(vertexAiReasoningEngineSpecDeploymentSpecSecretEnvToHclTerraform, true)(struct!.secretEnv),
      isBlock: true,
      type: "set",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecDeploymentSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecDeploymentSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConcurrency = this._containerConcurrency;
    }
    if (this._maxInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstances = this._maxInstances;
    }
    if (this._minInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstances = this._minInstances;
    }
    if (this._resourceLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._pscInterfaceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscInterfaceConfig = this._pscInterfaceConfig?.internalValue;
    }
    if (this._secretEnv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEnv = this._secretEnv?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecDeploymentSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerConcurrency = undefined;
      this._maxInstances = undefined;
      this._minInstances = undefined;
      this._resourceLimits = undefined;
      this._env.internalValue = undefined;
      this._pscInterfaceConfig.internalValue = undefined;
      this._secretEnv.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerConcurrency = value.containerConcurrency;
      this._maxInstances = value.maxInstances;
      this._minInstances = value.minInstances;
      this._resourceLimits = value.resourceLimits;
      this._env.internalValue = value.env;
      this._pscInterfaceConfig.internalValue = value.pscInterfaceConfig;
      this._secretEnv.internalValue = value.secretEnv;
    }
  }

  // container_concurrency - computed: true, optional: true, required: false
  private _containerConcurrency?: number; 
  public get containerConcurrency() {
    return this.getNumberAttribute('container_concurrency');
  }
  public set containerConcurrency(value: number) {
    this._containerConcurrency = value;
  }
  public resetContainerConcurrency() {
    this._containerConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConcurrencyInput() {
    return this._containerConcurrency;
  }

  // max_instances - computed: true, optional: true, required: false
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  public resetMaxInstances() {
    this._maxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }

  // min_instances - computed: true, optional: true, required: false
  private _minInstances?: number; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number) {
    this._minInstances = value;
  }
  public resetMinInstances() {
    this._minInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances;
  }

  // resource_limits - computed: true, optional: true, required: false
  private _resourceLimits?: { [key: string]: string }; 
  public get resourceLimits() {
    return this.getStringMapAttribute('resource_limits');
  }
  public set resourceLimits(value: { [key: string]: string }) {
    this._resourceLimits = value;
  }
  public resetResourceLimits() {
    this._resourceLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits;
  }

  // env - computed: false, optional: true, required: false
  private _env = new VertexAiReasoningEngineSpecDeploymentSpecEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: VertexAiReasoningEngineSpecDeploymentSpecEnv[] | cdktn.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // psc_interface_config - computed: false, optional: true, required: false
  private _pscInterfaceConfig = new VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference(this, "psc_interface_config");
  public get pscInterfaceConfig() {
    return this._pscInterfaceConfig;
  }
  public putPscInterfaceConfig(value: VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig) {
    this._pscInterfaceConfig.internalValue = value;
  }
  public resetPscInterfaceConfig() {
    this._pscInterfaceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscInterfaceConfigInput() {
    return this._pscInterfaceConfig.internalValue;
  }

  // secret_env - computed: false, optional: true, required: false
  private _secretEnv = new VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList(this, "secret_env", true);
  public get secretEnv() {
    return this._secretEnv;
  }
  public putSecretEnv(value: VertexAiReasoningEngineSpecDeploymentSpecSecretEnv[] | cdktn.IResolvable) {
    this._secretEnv.internalValue = value;
  }
  public resetSecretEnv() {
    this._secretEnv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEnvInput() {
    return this._secretEnv.internalValue;
  }
}
export interface VertexAiReasoningEngineSpecPackageSpec {
  /**
  * Optional. The Cloud Storage URI of the dependency files in tar.gz
  * format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#dependency_files_gcs_uri VertexAiReasoningEngine#dependency_files_gcs_uri}
  */
  readonly dependencyFilesGcsUri?: string;
  /**
  * Optional. The Cloud Storage URI of the pickled python object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#pickle_object_gcs_uri VertexAiReasoningEngine#pickle_object_gcs_uri}
  */
  readonly pickleObjectGcsUri?: string;
  /**
  * Optional. The Python version. Currently support 3.8, 3.9, 3.10,
  * 3.11, 3.12, 3.13. If not specified, default value is 3.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#python_version VertexAiReasoningEngine#python_version}
  */
  readonly pythonVersion?: string;
  /**
  * Optional. The Cloud Storage URI of the requirements.txtfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#requirements_gcs_uri VertexAiReasoningEngine#requirements_gcs_uri}
  */
  readonly requirementsGcsUri?: string;
}

export function vertexAiReasoningEngineSpecPackageSpecToTerraform(struct?: VertexAiReasoningEngineSpecPackageSpecOutputReference | VertexAiReasoningEngineSpecPackageSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dependency_files_gcs_uri: cdktn.stringToTerraform(struct!.dependencyFilesGcsUri),
    pickle_object_gcs_uri: cdktn.stringToTerraform(struct!.pickleObjectGcsUri),
    python_version: cdktn.stringToTerraform(struct!.pythonVersion),
    requirements_gcs_uri: cdktn.stringToTerraform(struct!.requirementsGcsUri),
  }
}


export function vertexAiReasoningEngineSpecPackageSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecPackageSpecOutputReference | VertexAiReasoningEngineSpecPackageSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dependency_files_gcs_uri: {
      value: cdktn.stringToHclTerraform(struct!.dependencyFilesGcsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pickle_object_gcs_uri: {
      value: cdktn.stringToHclTerraform(struct!.pickleObjectGcsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    python_version: {
      value: cdktn.stringToHclTerraform(struct!.pythonVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requirements_gcs_uri: {
      value: cdktn.stringToHclTerraform(struct!.requirementsGcsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecPackageSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecPackageSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencyFilesGcsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyFilesGcsUri = this._dependencyFilesGcsUri;
    }
    if (this._pickleObjectGcsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.pickleObjectGcsUri = this._pickleObjectGcsUri;
    }
    if (this._pythonVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonVersion = this._pythonVersion;
    }
    if (this._requirementsGcsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirementsGcsUri = this._requirementsGcsUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecPackageSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dependencyFilesGcsUri = undefined;
      this._pickleObjectGcsUri = undefined;
      this._pythonVersion = undefined;
      this._requirementsGcsUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dependencyFilesGcsUri = value.dependencyFilesGcsUri;
      this._pickleObjectGcsUri = value.pickleObjectGcsUri;
      this._pythonVersion = value.pythonVersion;
      this._requirementsGcsUri = value.requirementsGcsUri;
    }
  }

  // dependency_files_gcs_uri - computed: false, optional: true, required: false
  private _dependencyFilesGcsUri?: string; 
  public get dependencyFilesGcsUri() {
    return this.getStringAttribute('dependency_files_gcs_uri');
  }
  public set dependencyFilesGcsUri(value: string) {
    this._dependencyFilesGcsUri = value;
  }
  public resetDependencyFilesGcsUri() {
    this._dependencyFilesGcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyFilesGcsUriInput() {
    return this._dependencyFilesGcsUri;
  }

  // pickle_object_gcs_uri - computed: false, optional: true, required: false
  private _pickleObjectGcsUri?: string; 
  public get pickleObjectGcsUri() {
    return this.getStringAttribute('pickle_object_gcs_uri');
  }
  public set pickleObjectGcsUri(value: string) {
    this._pickleObjectGcsUri = value;
  }
  public resetPickleObjectGcsUri() {
    this._pickleObjectGcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pickleObjectGcsUriInput() {
    return this._pickleObjectGcsUri;
  }

  // python_version - computed: false, optional: true, required: false
  private _pythonVersion?: string; 
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }
  public set pythonVersion(value: string) {
    this._pythonVersion = value;
  }
  public resetPythonVersion() {
    this._pythonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonVersionInput() {
    return this._pythonVersion;
  }

  // requirements_gcs_uri - computed: false, optional: true, required: false
  private _requirementsGcsUri?: string; 
  public get requirementsGcsUri() {
    return this.getStringAttribute('requirements_gcs_uri');
  }
  public set requirementsGcsUri(value: string) {
    this._requirementsGcsUri = value;
  }
  public resetRequirementsGcsUri() {
    this._requirementsGcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsGcsUriInput() {
    return this._requirementsGcsUri;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig {
  /**
  * Directory, relative to the source root, in which to run the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#dir VertexAiReasoningEngine#dir}
  */
  readonly dir: string;
  /**
  * The Developer Connect Git repository link, formatted as projects/* /locations/* /connections/* /gitRepositoryLink/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#git_repository_link VertexAiReasoningEngine#git_repository_link}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly gitRepositoryLink: string;
  /**
  * The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#revision VertexAiReasoningEngine#revision}
  */
  readonly revision: string;
}

export function vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dir: cdktn.stringToTerraform(struct!.dir),
    git_repository_link: cdktn.stringToTerraform(struct!.gitRepositoryLink),
    revision: cdktn.stringToTerraform(struct!.revision),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dir: {
      value: cdktn.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_repository_link: {
      value: cdktn.stringToHclTerraform(struct!.gitRepositoryLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktn.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._gitRepositoryLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepositoryLink = this._gitRepositoryLink;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dir = undefined;
      this._gitRepositoryLink = undefined;
      this._revision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dir = value.dir;
      this._gitRepositoryLink = value.gitRepositoryLink;
      this._revision = value.revision;
    }
  }

  // dir - computed: false, optional: false, required: true
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // git_repository_link - computed: false, optional: false, required: true
  private _gitRepositoryLink?: string; 
  public get gitRepositoryLink() {
    return this.getStringAttribute('git_repository_link');
  }
  public set gitRepositoryLink(value: string) {
    this._gitRepositoryLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepositoryLinkInput() {
    return this._gitRepositoryLink;
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#config VertexAiReasoningEngine#config}
  */
  readonly config: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig;
}

export function vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    config: vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigToTerraform(struct!.config),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    config: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._config.internalValue = value.config;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config = new VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpecImageSpec {
  /**
  * Build arguments to be used. They will be passed through --build-arg flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#build_args VertexAiReasoningEngine#build_args}
  */
  readonly buildArgs?: { [key: string]: string };
}

export function vertexAiReasoningEngineSpecSourceCodeSpecImageSpecToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecImageSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    build_args: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.buildArgs),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecImageSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecImageSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    build_args: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.buildArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpecImageSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildArgs = this._buildArgs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpecImageSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildArgs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildArgs = value.buildArgs;
    }
  }

  // build_args - computed: false, optional: true, required: false
  private _buildArgs?: { [key: string]: string }; 
  public get buildArgs() {
    return this.getStringMapAttribute('build_args');
  }
  public set buildArgs(value: { [key: string]: string }) {
    this._buildArgs = value;
  }
  public resetBuildArgs() {
    this._buildArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildArgsInput() {
    return this._buildArgs;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpecInlineSource {
  /**
  * Required. Input only.
  * The application source code archive, provided as a compressed
  * tarball (.tar.gz) file. A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#source_archive VertexAiReasoningEngine#source_archive}
  */
  readonly sourceArchive?: string;
}

export function vertexAiReasoningEngineSpecSourceCodeSpecInlineSourceToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecInlineSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_archive: cdktn.stringToTerraform(struct!.sourceArchive),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecInlineSourceToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecInlineSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_archive: {
      value: cdktn.stringToHclTerraform(struct!.sourceArchive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpecInlineSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceArchive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceArchive = this._sourceArchive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpecInlineSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceArchive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceArchive = value.sourceArchive;
    }
  }

  // source_archive - computed: false, optional: true, required: false
  private _sourceArchive?: string; 
  public get sourceArchive() {
    return this.getStringAttribute('source_archive');
  }
  public set sourceArchive(value: string) {
    this._sourceArchive = value;
  }
  public resetSourceArchive() {
    this._sourceArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArchiveInput() {
    return this._sourceArchive;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec {
  /**
  * Optional. The Python module to load as the entrypoint,
  * specified as a fully qualified module name. For example:
  * path.to.agent. If not specified, defaults to "agent".
  * The project root will be added to Python sys.path, allowing
  * imports to be specified relative to the root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#entrypoint_module VertexAiReasoningEngine#entrypoint_module}
  */
  readonly entrypointModule?: string;
  /**
  * Optional. The name of the callable object within the
  * entrypointModule to use as the application If not specified,
  * defaults to "root_agent".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#entrypoint_object VertexAiReasoningEngine#entrypoint_object}
  */
  readonly entrypointObject?: string;
  /**
  * Optional. The path to the requirements file, relative to the
  * source root. If not specified, defaults to "requirements.txt".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#requirements_file VertexAiReasoningEngine#requirements_file}
  */
  readonly requirementsFile?: string;
  /**
  * Optional. The version of Python to use. Support version
  * includes 3.9, 3.10, 3.11, 3.12, 3.13. If not specified,
  * default value is 3.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#version VertexAiReasoningEngine#version}
  */
  readonly version?: string;
}

export function vertexAiReasoningEngineSpecSourceCodeSpecPythonSpecToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entrypoint_module: cdktn.stringToTerraform(struct!.entrypointModule),
    entrypoint_object: cdktn.stringToTerraform(struct!.entrypointObject),
    requirements_file: cdktn.stringToTerraform(struct!.requirementsFile),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecPythonSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference | VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entrypoint_module: {
      value: cdktn.stringToHclTerraform(struct!.entrypointModule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entrypoint_object: {
      value: cdktn.stringToHclTerraform(struct!.entrypointObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requirements_file: {
      value: cdktn.stringToHclTerraform(struct!.requirementsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entrypointModule !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypointModule = this._entrypointModule;
    }
    if (this._entrypointObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypointObject = this._entrypointObject;
    }
    if (this._requirementsFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirementsFile = this._requirementsFile;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entrypointModule = undefined;
      this._entrypointObject = undefined;
      this._requirementsFile = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entrypointModule = value.entrypointModule;
      this._entrypointObject = value.entrypointObject;
      this._requirementsFile = value.requirementsFile;
      this._version = value.version;
    }
  }

  // entrypoint_module - computed: false, optional: true, required: false
  private _entrypointModule?: string; 
  public get entrypointModule() {
    return this.getStringAttribute('entrypoint_module');
  }
  public set entrypointModule(value: string) {
    this._entrypointModule = value;
  }
  public resetEntrypointModule() {
    this._entrypointModule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointModuleInput() {
    return this._entrypointModule;
  }

  // entrypoint_object - computed: false, optional: true, required: false
  private _entrypointObject?: string; 
  public get entrypointObject() {
    return this.getStringAttribute('entrypoint_object');
  }
  public set entrypointObject(value: string) {
    this._entrypointObject = value;
  }
  public resetEntrypointObject() {
    this._entrypointObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointObjectInput() {
    return this._entrypointObject;
  }

  // requirements_file - computed: false, optional: true, required: false
  private _requirementsFile?: string; 
  public get requirementsFile() {
    return this.getStringAttribute('requirements_file');
  }
  public set requirementsFile(value: string) {
    this._requirementsFile = value;
  }
  public resetRequirementsFile() {
    this._requirementsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsFileInput() {
    return this._requirementsFile;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface VertexAiReasoningEngineSpecSourceCodeSpec {
  /**
  * developer_connect_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#developer_connect_source VertexAiReasoningEngine#developer_connect_source}
  */
  readonly developerConnectSource?: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource;
  /**
  * image_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#image_spec VertexAiReasoningEngine#image_spec}
  */
  readonly imageSpec?: VertexAiReasoningEngineSpecSourceCodeSpecImageSpec;
  /**
  * inline_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#inline_source VertexAiReasoningEngine#inline_source}
  */
  readonly inlineSource?: VertexAiReasoningEngineSpecSourceCodeSpecInlineSource;
  /**
  * python_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#python_spec VertexAiReasoningEngine#python_spec}
  */
  readonly pythonSpec?: VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec;
}

export function vertexAiReasoningEngineSpecSourceCodeSpecToTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecOutputReference | VertexAiReasoningEngineSpecSourceCodeSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    developer_connect_source: vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceToTerraform(struct!.developerConnectSource),
    image_spec: vertexAiReasoningEngineSpecSourceCodeSpecImageSpecToTerraform(struct!.imageSpec),
    inline_source: vertexAiReasoningEngineSpecSourceCodeSpecInlineSourceToTerraform(struct!.inlineSource),
    python_spec: vertexAiReasoningEngineSpecSourceCodeSpecPythonSpecToTerraform(struct!.pythonSpec),
  }
}


export function vertexAiReasoningEngineSpecSourceCodeSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecSourceCodeSpecOutputReference | VertexAiReasoningEngineSpecSourceCodeSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    developer_connect_source: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceToHclTerraform(struct!.developerConnectSource),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceList",
    },
    image_spec: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecImageSpecToHclTerraform(struct!.imageSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecImageSpecList",
    },
    inline_source: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecInlineSourceToHclTerraform(struct!.inlineSource),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceList",
    },
    python_spec: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecPythonSpecToHclTerraform(struct!.pythonSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecSourceCodeSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpecSourceCodeSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._developerConnectSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.developerConnectSource = this._developerConnectSource?.internalValue;
    }
    if (this._imageSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSpec = this._imageSpec?.internalValue;
    }
    if (this._inlineSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineSource = this._inlineSource?.internalValue;
    }
    if (this._pythonSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonSpec = this._pythonSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpecSourceCodeSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._developerConnectSource.internalValue = undefined;
      this._imageSpec.internalValue = undefined;
      this._inlineSource.internalValue = undefined;
      this._pythonSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._developerConnectSource.internalValue = value.developerConnectSource;
      this._imageSpec.internalValue = value.imageSpec;
      this._inlineSource.internalValue = value.inlineSource;
      this._pythonSpec.internalValue = value.pythonSpec;
    }
  }

  // developer_connect_source - computed: false, optional: true, required: false
  private _developerConnectSource = new VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference(this, "developer_connect_source");
  public get developerConnectSource() {
    return this._developerConnectSource;
  }
  public putDeveloperConnectSource(value: VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource) {
    this._developerConnectSource.internalValue = value;
  }
  public resetDeveloperConnectSource() {
    this._developerConnectSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerConnectSourceInput() {
    return this._developerConnectSource.internalValue;
  }

  // image_spec - computed: false, optional: true, required: false
  private _imageSpec = new VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference(this, "image_spec");
  public get imageSpec() {
    return this._imageSpec;
  }
  public putImageSpec(value: VertexAiReasoningEngineSpecSourceCodeSpecImageSpec) {
    this._imageSpec.internalValue = value;
  }
  public resetImageSpec() {
    this._imageSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSpecInput() {
    return this._imageSpec.internalValue;
  }

  // inline_source - computed: false, optional: true, required: false
  private _inlineSource = new VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference(this, "inline_source");
  public get inlineSource() {
    return this._inlineSource;
  }
  public putInlineSource(value: VertexAiReasoningEngineSpecSourceCodeSpecInlineSource) {
    this._inlineSource.internalValue = value;
  }
  public resetInlineSource() {
    this._inlineSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineSourceInput() {
    return this._inlineSource.internalValue;
  }

  // python_spec - computed: false, optional: true, required: false
  private _pythonSpec = new VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference(this, "python_spec");
  public get pythonSpec() {
    return this._pythonSpec;
  }
  public putPythonSpec(value: VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec) {
    this._pythonSpec.internalValue = value;
  }
  public resetPythonSpec() {
    this._pythonSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonSpecInput() {
    return this._pythonSpec.internalValue;
  }
}
export interface VertexAiReasoningEngineSpec {
  /**
  * Optional. The OSS agent framework used to develop the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#agent_framework VertexAiReasoningEngine#agent_framework}
  */
  readonly agentFramework?: string;
  /**
  * Optional. Declarations for object class methods in OpenAPI
  * specification format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#class_methods VertexAiReasoningEngine#class_methods}
  */
  readonly classMethods?: string;
  /**
  * Optional. The identity type to use for the Reasoning Engine.
  * If not specified, the 'service_account' field will be used if set,
  * otherwise the default Vertex AI Reasoning Engine Service Agent in the project will be used.
  * Possible values:
  * * 'SERVICE_ACCOUNT': Use a custom service account if the 'service_account' field is set, otherwise use the default Vertex AI Reasoning Engine Service Agent in the project.
  * * 'AGENT_IDENTITY': Use Agent Identity. The 'service_account' field must not be set. Possible values: ["SERVICE_ACCOUNT", "AGENT_IDENTITY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#identity_type VertexAiReasoningEngine#identity_type}
  */
  readonly identityType?: string;
  /**
  * Optional. The service account that the Reasoning Engine artifact runs
  * as. It should have "roles/storage.objectViewer" for reading the user
  * project's Cloud Storage and "roles/aiplatform.user" for using Vertex
  * extensions. If not specified, the Vertex AI Reasoning Engine service
  * Agent in the project will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#service_account VertexAiReasoningEngine#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * container_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#container_spec VertexAiReasoningEngine#container_spec}
  */
  readonly containerSpec?: VertexAiReasoningEngineSpecContainerSpec;
  /**
  * deployment_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#deployment_spec VertexAiReasoningEngine#deployment_spec}
  */
  readonly deploymentSpec?: VertexAiReasoningEngineSpecDeploymentSpec;
  /**
  * package_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#package_spec VertexAiReasoningEngine#package_spec}
  */
  readonly packageSpec?: VertexAiReasoningEngineSpecPackageSpec;
  /**
  * source_code_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#source_code_spec VertexAiReasoningEngine#source_code_spec}
  */
  readonly sourceCodeSpec?: VertexAiReasoningEngineSpecSourceCodeSpec;
}

export function vertexAiReasoningEngineSpecToTerraform(struct?: VertexAiReasoningEngineSpecOutputReference | VertexAiReasoningEngineSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_framework: cdktn.stringToTerraform(struct!.agentFramework),
    class_methods: cdktn.stringToTerraform(struct!.classMethods),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
    service_account: cdktn.stringToTerraform(struct!.serviceAccount),
    container_spec: vertexAiReasoningEngineSpecContainerSpecToTerraform(struct!.containerSpec),
    deployment_spec: vertexAiReasoningEngineSpecDeploymentSpecToTerraform(struct!.deploymentSpec),
    package_spec: vertexAiReasoningEngineSpecPackageSpecToTerraform(struct!.packageSpec),
    source_code_spec: vertexAiReasoningEngineSpecSourceCodeSpecToTerraform(struct!.sourceCodeSpec),
  }
}


export function vertexAiReasoningEngineSpecToHclTerraform(struct?: VertexAiReasoningEngineSpecOutputReference | VertexAiReasoningEngineSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_framework: {
      value: cdktn.stringToHclTerraform(struct!.agentFramework),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_methods: {
      value: cdktn.stringToHclTerraform(struct!.classMethods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_type: {
      value: cdktn.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_spec: {
      value: vertexAiReasoningEngineSpecContainerSpecToHclTerraform(struct!.containerSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecContainerSpecList",
    },
    deployment_spec: {
      value: vertexAiReasoningEngineSpecDeploymentSpecToHclTerraform(struct!.deploymentSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecDeploymentSpecList",
    },
    package_spec: {
      value: vertexAiReasoningEngineSpecPackageSpecToHclTerraform(struct!.packageSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecPackageSpecList",
    },
    source_code_spec: {
      value: vertexAiReasoningEngineSpecSourceCodeSpecToHclTerraform(struct!.sourceCodeSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiReasoningEngineSpecSourceCodeSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiReasoningEngineSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiReasoningEngineSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentFramework !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentFramework = this._agentFramework;
    }
    if (this._classMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.classMethods = this._classMethods;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._containerSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerSpec = this._containerSpec?.internalValue;
    }
    if (this._deploymentSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentSpec = this._deploymentSpec?.internalValue;
    }
    if (this._packageSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageSpec = this._packageSpec?.internalValue;
    }
    if (this._sourceCodeSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodeSpec = this._sourceCodeSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiReasoningEngineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentFramework = undefined;
      this._classMethods = undefined;
      this._identityType = undefined;
      this._serviceAccount = undefined;
      this._containerSpec.internalValue = undefined;
      this._deploymentSpec.internalValue = undefined;
      this._packageSpec.internalValue = undefined;
      this._sourceCodeSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentFramework = value.agentFramework;
      this._classMethods = value.classMethods;
      this._identityType = value.identityType;
      this._serviceAccount = value.serviceAccount;
      this._containerSpec.internalValue = value.containerSpec;
      this._deploymentSpec.internalValue = value.deploymentSpec;
      this._packageSpec.internalValue = value.packageSpec;
      this._sourceCodeSpec.internalValue = value.sourceCodeSpec;
    }
  }

  // agent_framework - computed: false, optional: true, required: false
  private _agentFramework?: string; 
  public get agentFramework() {
    return this.getStringAttribute('agent_framework');
  }
  public set agentFramework(value: string) {
    this._agentFramework = value;
  }
  public resetAgentFramework() {
    this._agentFramework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentFrameworkInput() {
    return this._agentFramework;
  }

  // class_methods - computed: false, optional: true, required: false
  private _classMethods?: string; 
  public get classMethods() {
    return this.getStringAttribute('class_methods');
  }
  public set classMethods(value: string) {
    this._classMethods = value;
  }
  public resetClassMethods() {
    this._classMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classMethodsInput() {
    return this._classMethods;
  }

  // effective_identity - computed: true, optional: false, required: false
  public get effectiveIdentity() {
    return this.getStringAttribute('effective_identity');
  }

  // identity_type - computed: false, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }

  // service_account - computed: false, optional: true, required: false
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

  // container_spec - computed: false, optional: true, required: false
  private _containerSpec = new VertexAiReasoningEngineSpecContainerSpecOutputReference(this, "container_spec");
  public get containerSpec() {
    return this._containerSpec;
  }
  public putContainerSpec(value: VertexAiReasoningEngineSpecContainerSpec) {
    this._containerSpec.internalValue = value;
  }
  public resetContainerSpec() {
    this._containerSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSpecInput() {
    return this._containerSpec.internalValue;
  }

  // deployment_spec - computed: false, optional: true, required: false
  private _deploymentSpec = new VertexAiReasoningEngineSpecDeploymentSpecOutputReference(this, "deployment_spec");
  public get deploymentSpec() {
    return this._deploymentSpec;
  }
  public putDeploymentSpec(value: VertexAiReasoningEngineSpecDeploymentSpec) {
    this._deploymentSpec.internalValue = value;
  }
  public resetDeploymentSpec() {
    this._deploymentSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentSpecInput() {
    return this._deploymentSpec.internalValue;
  }

  // package_spec - computed: false, optional: true, required: false
  private _packageSpec = new VertexAiReasoningEngineSpecPackageSpecOutputReference(this, "package_spec");
  public get packageSpec() {
    return this._packageSpec;
  }
  public putPackageSpec(value: VertexAiReasoningEngineSpecPackageSpec) {
    this._packageSpec.internalValue = value;
  }
  public resetPackageSpec() {
    this._packageSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageSpecInput() {
    return this._packageSpec.internalValue;
  }

  // source_code_spec - computed: false, optional: true, required: false
  private _sourceCodeSpec = new VertexAiReasoningEngineSpecSourceCodeSpecOutputReference(this, "source_code_spec");
  public get sourceCodeSpec() {
    return this._sourceCodeSpec;
  }
  public putSourceCodeSpec(value: VertexAiReasoningEngineSpecSourceCodeSpec) {
    this._sourceCodeSpec.internalValue = value;
  }
  public resetSourceCodeSpec() {
    this._sourceCodeSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodeSpecInput() {
    return this._sourceCodeSpec.internalValue;
  }
}
export interface VertexAiReasoningEngineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#create VertexAiReasoningEngine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#delete VertexAiReasoningEngine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#update VertexAiReasoningEngine#update}
  */
  readonly update?: string;
}

export function vertexAiReasoningEngineTimeoutsToTerraform(struct?: VertexAiReasoningEngineTimeouts | cdktn.IResolvable): any {
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


export function vertexAiReasoningEngineTimeoutsToHclTerraform(struct?: VertexAiReasoningEngineTimeouts | cdktn.IResolvable): any {
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

export class VertexAiReasoningEngineTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiReasoningEngineTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VertexAiReasoningEngineTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine google_vertex_ai_reasoning_engine}
*/
export class VertexAiReasoningEngine extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_reasoning_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VertexAiReasoningEngine resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiReasoningEngine to import
  * @param importFromId The id of the existing VertexAiReasoningEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiReasoningEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_reasoning_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vertex_ai_reasoning_engine google_vertex_ai_reasoning_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiReasoningEngineConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiReasoningEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_reasoning_engine',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.37.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._region = config.region;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._spec.internalValue = config.spec;
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
  private _encryptionSpec = new VertexAiReasoningEngineEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: VertexAiReasoningEngineEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new VertexAiReasoningEngineSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: VertexAiReasoningEngineSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiReasoningEngineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiReasoningEngineTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      encryption_spec: vertexAiReasoningEngineEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      spec: vertexAiReasoningEngineSpecToTerraform(this._spec.internalValue),
      timeouts: vertexAiReasoningEngineTimeoutsToTerraform(this._timeouts.internalValue),
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
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
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
      encryption_spec: {
        value: vertexAiReasoningEngineEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiReasoningEngineEncryptionSpecList",
      },
      spec: {
        value: vertexAiReasoningEngineSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiReasoningEngineSpecList",
      },
      timeouts: {
        value: vertexAiReasoningEngineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiReasoningEngineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
