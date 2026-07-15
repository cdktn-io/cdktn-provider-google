/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VertexAiEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * If true, the endpoint will be exposed through a dedicated DNS [Endpoint.dedicated_endpoint_dns]. Your request to the dedicated DNS will be isolated from other users' traffic and will have better performance and reliability. Note: Once you enabled dedicated endpoint, you won't be able to send request to the shared DNS {region}-aiplatform.googleapis.com. The limitation will be removed soon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#dedicated_endpoint_enabled VertexAiEndpoint#dedicated_endpoint_enabled}
  */
  readonly dedicatedEndpointEnabled?: boolean | cdktn.IResolvable;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#deletion_policy VertexAiEndpoint#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#description VertexAiEndpoint#description}
  */
  readonly description?: string;
  /**
  * Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#display_name VertexAiEndpoint#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#id VertexAiEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels with user-defined metadata to organize your Endpoints. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#labels VertexAiEndpoint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#location VertexAiEndpoint#location}
  */
  readonly location: string;
  /**
  * The resource name of the Endpoint. The name must be numeric with no leading zeros and can be at most 10 digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#name VertexAiEndpoint#name}
  */
  readonly name: string;
  /**
  * The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. Only one of the fields, 'network' or 'privateServiceConnectConfig', can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#network VertexAiEndpoint#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#project VertexAiEndpoint#project}
  */
  readonly project?: string;
  /**
  * The region for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#region VertexAiEndpoint#region}
  */
  readonly region?: string;
  /**
  * A map from a DeployedModel's id to the percentage of this Endpoint's traffic that should be forwarded to that DeployedModel.
  * If a DeployedModel's id is not listed in this map, then it receives no traffic.
  * The traffic percentage values must add up to 100, or map must be empty if the Endpoint is to not accept any traffic at a moment. See
  * the 'deployModel' [example](https://cloud.google.com/vertex-ai/docs/general/deployment#deploy_a_model_to_an_endpoint) and
  * [documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.endpoints/deployModel) for more information.
  * 
  * ~> **Note:** To set the map to empty, set '"{}"', apply, and then remove the field from your config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#traffic_split VertexAiEndpoint#traffic_split}
  */
  readonly trafficSplit?: string;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#encryption_spec VertexAiEndpoint#encryption_spec}
  */
  readonly encryptionSpec?: VertexAiEndpointEncryptionSpec;
  /**
  * predict_request_response_logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#predict_request_response_logging_config VertexAiEndpoint#predict_request_response_logging_config}
  */
  readonly predictRequestResponseLoggingConfig?: VertexAiEndpointPredictRequestResponseLoggingConfig;
  /**
  * private_service_connect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#private_service_connect_config VertexAiEndpoint#private_service_connect_config}
  */
  readonly privateServiceConnectConfig?: VertexAiEndpointPrivateServiceConnectConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#timeouts VertexAiEndpoint#timeouts}
  */
  readonly timeouts?: VertexAiEndpointTimeouts;
}
export interface VertexAiEndpointDeployedModelsAutomaticResources {
}

export function vertexAiEndpointDeployedModelsAutomaticResourcesToTerraform(struct?: VertexAiEndpointDeployedModelsAutomaticResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiEndpointDeployedModelsAutomaticResourcesToHclTerraform(struct?: VertexAiEndpointDeployedModelsAutomaticResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiEndpointDeployedModelsAutomaticResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointDeployedModelsAutomaticResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_replica_count - computed: true, optional: false, required: false
  public get maxReplicaCount() {
    return this.getNumberAttribute('max_replica_count');
  }

  // min_replica_count - computed: true, optional: false, required: false
  public get minReplicaCount() {
    return this.getNumberAttribute('min_replica_count');
  }
}

export class VertexAiEndpointDeployedModelsAutomaticResourcesList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference {
    return new VertexAiEndpointDeployedModelsAutomaticResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs {
}

export function vertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsToTerraform(struct?: VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsToHclTerraform(struct?: VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getNumberAttribute('target');
  }
}

export class VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference {
    return new VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec {
}

export function vertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecToTerraform(struct?: VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecToHclTerraform(struct?: VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_count - computed: true, optional: false, required: false
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }

  // accelerator_type - computed: true, optional: false, required: false
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
}

export class VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference {
    return new VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEndpointDeployedModelsDedicatedResources {
}

export function vertexAiEndpointDeployedModelsDedicatedResourcesToTerraform(struct?: VertexAiEndpointDeployedModelsDedicatedResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiEndpointDeployedModelsDedicatedResourcesToHclTerraform(struct?: VertexAiEndpointDeployedModelsDedicatedResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiEndpointDeployedModelsDedicatedResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointDeployedModelsDedicatedResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling_metric_specs - computed: true, optional: false, required: false
  private _autoscalingMetricSpecs = new VertexAiEndpointDeployedModelsDedicatedResourcesAutoscalingMetricSpecsList(this, "autoscaling_metric_specs", false);
  public get autoscalingMetricSpecs() {
    return this._autoscalingMetricSpecs;
  }

  // machine_spec - computed: true, optional: false, required: false
  private _machineSpec = new VertexAiEndpointDeployedModelsDedicatedResourcesMachineSpecList(this, "machine_spec", false);
  public get machineSpec() {
    return this._machineSpec;
  }

  // max_replica_count - computed: true, optional: false, required: false
  public get maxReplicaCount() {
    return this.getNumberAttribute('max_replica_count');
  }

  // min_replica_count - computed: true, optional: false, required: false
  public get minReplicaCount() {
    return this.getNumberAttribute('min_replica_count');
  }
}

export class VertexAiEndpointDeployedModelsDedicatedResourcesList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference {
    return new VertexAiEndpointDeployedModelsDedicatedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEndpointDeployedModelsPrivateEndpoints {
}

export function vertexAiEndpointDeployedModelsPrivateEndpointsToTerraform(struct?: VertexAiEndpointDeployedModelsPrivateEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiEndpointDeployedModelsPrivateEndpointsToHclTerraform(struct?: VertexAiEndpointDeployedModelsPrivateEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiEndpointDeployedModelsPrivateEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointDeployedModelsPrivateEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // explain_http_uri - computed: true, optional: false, required: false
  public get explainHttpUri() {
    return this.getStringAttribute('explain_http_uri');
  }

  // health_http_uri - computed: true, optional: false, required: false
  public get healthHttpUri() {
    return this.getStringAttribute('health_http_uri');
  }

  // predict_http_uri - computed: true, optional: false, required: false
  public get predictHttpUri() {
    return this.getStringAttribute('predict_http_uri');
  }

  // service_attachment - computed: true, optional: false, required: false
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }
}

export class VertexAiEndpointDeployedModelsPrivateEndpointsList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference {
    return new VertexAiEndpointDeployedModelsPrivateEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEndpointDeployedModels {
}

export function vertexAiEndpointDeployedModelsToTerraform(struct?: VertexAiEndpointDeployedModels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiEndpointDeployedModelsToHclTerraform(struct?: VertexAiEndpointDeployedModels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiEndpointDeployedModelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiEndpointDeployedModels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointDeployedModels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic_resources - computed: true, optional: false, required: false
  private _automaticResources = new VertexAiEndpointDeployedModelsAutomaticResourcesList(this, "automatic_resources", false);
  public get automaticResources() {
    return this._automaticResources;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dedicated_resources - computed: true, optional: false, required: false
  private _dedicatedResources = new VertexAiEndpointDeployedModelsDedicatedResourcesList(this, "dedicated_resources", false);
  public get dedicatedResources() {
    return this._dedicatedResources;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enable_access_logging - computed: true, optional: false, required: false
  public get enableAccessLogging() {
    return this.getBooleanAttribute('enable_access_logging');
  }

  // enable_container_logging - computed: true, optional: false, required: false
  public get enableContainerLogging() {
    return this.getBooleanAttribute('enable_container_logging');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // model_version_id - computed: true, optional: false, required: false
  public get modelVersionId() {
    return this.getStringAttribute('model_version_id');
  }

  // private_endpoints - computed: true, optional: false, required: false
  private _privateEndpoints = new VertexAiEndpointDeployedModelsPrivateEndpointsList(this, "private_endpoints", false);
  public get privateEndpoints() {
    return this._privateEndpoints;
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // shared_resources - computed: true, optional: false, required: false
  public get sharedResources() {
    return this.getStringAttribute('shared_resources');
  }
}

export class VertexAiEndpointDeployedModelsList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiEndpointDeployedModelsOutputReference {
    return new VertexAiEndpointDeployedModelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEndpointEncryptionSpec {
  /**
  * Required. The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#kms_key_name VertexAiEndpoint#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function vertexAiEndpointEncryptionSpecToTerraform(struct?: VertexAiEndpointEncryptionSpecOutputReference | VertexAiEndpointEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function vertexAiEndpointEncryptionSpecToHclTerraform(struct?: VertexAiEndpointEncryptionSpecOutputReference | VertexAiEndpointEncryptionSpec): any {
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

export class VertexAiEndpointEncryptionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointEncryptionSpec | undefined) {
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
export interface VertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination {
  /**
  * BigQuery URI to a project or table, up to 2000 characters long. When only the project is specified, the Dataset and Table is created. When the full table reference is specified, the Dataset must exist and table must not exist. Accepted forms: - BigQuery path. For example: 'bq://projectId' or 'bq://projectId.bqDatasetId' or 'bq://projectId.bqDatasetId.bqTableId'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#output_uri VertexAiEndpoint#output_uri}
  */
  readonly outputUri?: string;
}

export function vertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationToTerraform(struct?: VertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference | VertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_uri: cdktn.stringToTerraform(struct!.outputUri),
  }
}


export function vertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationToHclTerraform(struct?: VertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference | VertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_uri: {
      value: cdktn.stringToHclTerraform(struct!.outputUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputUri = this._outputUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputUri = value.outputUri;
    }
  }

  // output_uri - computed: false, optional: true, required: false
  private _outputUri?: string; 
  public get outputUri() {
    return this.getStringAttribute('output_uri');
  }
  public set outputUri(value: string) {
    this._outputUri = value;
  }
  public resetOutputUri() {
    this._outputUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputUriInput() {
    return this._outputUri;
  }
}
export interface VertexAiEndpointPredictRequestResponseLoggingConfig {
  /**
  * If logging is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#enabled VertexAiEndpoint#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Percentage of requests to be logged, expressed as a fraction in range(0,1]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#sampling_rate VertexAiEndpoint#sampling_rate}
  */
  readonly samplingRate?: number;
  /**
  * bigquery_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#bigquery_destination VertexAiEndpoint#bigquery_destination}
  */
  readonly bigqueryDestination?: VertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination;
}

export function vertexAiEndpointPredictRequestResponseLoggingConfigToTerraform(struct?: VertexAiEndpointPredictRequestResponseLoggingConfigOutputReference | VertexAiEndpointPredictRequestResponseLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    sampling_rate: cdktn.numberToTerraform(struct!.samplingRate),
    bigquery_destination: vertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationToTerraform(struct!.bigqueryDestination),
  }
}


export function vertexAiEndpointPredictRequestResponseLoggingConfigToHclTerraform(struct?: VertexAiEndpointPredictRequestResponseLoggingConfigOutputReference | VertexAiEndpointPredictRequestResponseLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sampling_rate: {
      value: cdktn.numberToHclTerraform(struct!.samplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bigquery_destination: {
      value: vertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationToHclTerraform(struct!.bigqueryDestination),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointPredictRequestResponseLoggingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointPredictRequestResponseLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    if (this._bigqueryDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDestination = this._bigqueryDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointPredictRequestResponseLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._samplingRate = undefined;
      this._bigqueryDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._samplingRate = value.samplingRate;
      this._bigqueryDestination.internalValue = value.bigqueryDestination;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // sampling_rate - computed: false, optional: true, required: false
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  public resetSamplingRate() {
    this._samplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }

  // bigquery_destination - computed: false, optional: true, required: false
  private _bigqueryDestination = new VertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestinationOutputReference(this, "bigquery_destination");
  public get bigqueryDestination() {
    return this._bigqueryDestination;
  }
  public putBigqueryDestination(value: VertexAiEndpointPredictRequestResponseLoggingConfigBigqueryDestination) {
    this._bigqueryDestination.internalValue = value;
  }
  public resetBigqueryDestination() {
    this._bigqueryDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDestinationInput() {
    return this._bigqueryDestination.internalValue;
  }
}
export interface VertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigs {
  /**
  * The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/get): projects/{project}/global/networks/{network}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#network VertexAiEndpoint#network}
  */
  readonly network: string;
  /**
  * Project id used to create forwarding rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#project_id VertexAiEndpoint#project_id}
  */
  readonly projectId: string;
}

export function vertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigsToTerraform(struct?: VertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network: cdktn.stringToTerraform(struct!.network),
    project_id: cdktn.stringToTerraform(struct!.projectId),
  }
}


export function vertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigsToHclTerraform(struct?: VertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._projectId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._projectId = value.projectId;
    }
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // forwarding_rule - computed: true, optional: false, required: false
  public get forwardingRule() {
    return this.getStringAttribute('forwarding_rule');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class VertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigsList extends cdktn.ComplexList {
  public internalValue? : VertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigs[] | cdktn.IResolvable

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
  public get(index: number): VertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference {
    return new VertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEndpointPrivateServiceConnectConfig {
  /**
  * Required. If true, expose the IndexEndpoint via private service connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#enable_private_service_connect VertexAiEndpoint#enable_private_service_connect}
  */
  readonly enablePrivateServiceConnect: boolean | cdktn.IResolvable;
  /**
  * A list of Projects from which the forwarding rule will target the service attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#project_allowlist VertexAiEndpoint#project_allowlist}
  */
  readonly projectAllowlist?: string[];
  /**
  * psc_automation_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#psc_automation_configs VertexAiEndpoint#psc_automation_configs}
  */
  readonly pscAutomationConfigs?: VertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigs[] | cdktn.IResolvable;
}

export function vertexAiEndpointPrivateServiceConnectConfigToTerraform(struct?: VertexAiEndpointPrivateServiceConnectConfigOutputReference | VertexAiEndpointPrivateServiceConnectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_private_service_connect: cdktn.booleanToTerraform(struct!.enablePrivateServiceConnect),
    project_allowlist: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.projectAllowlist),
    psc_automation_configs: cdktn.listMapper(vertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigsToTerraform, true)(struct!.pscAutomationConfigs),
  }
}


export function vertexAiEndpointPrivateServiceConnectConfigToHclTerraform(struct?: VertexAiEndpointPrivateServiceConnectConfigOutputReference | VertexAiEndpointPrivateServiceConnectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_private_service_connect: {
      value: cdktn.booleanToHclTerraform(struct!.enablePrivateServiceConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project_allowlist: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.projectAllowlist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    psc_automation_configs: {
      value: cdktn.listMapperHcl(vertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigsToHclTerraform, true)(struct!.pscAutomationConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointPrivateServiceConnectConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointPrivateServiceConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePrivateServiceConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateServiceConnect = this._enablePrivateServiceConnect;
    }
    if (this._projectAllowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectAllowlist = this._projectAllowlist;
    }
    if (this._pscAutomationConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscAutomationConfigs = this._pscAutomationConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointPrivateServiceConnectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePrivateServiceConnect = undefined;
      this._projectAllowlist = undefined;
      this._pscAutomationConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePrivateServiceConnect = value.enablePrivateServiceConnect;
      this._projectAllowlist = value.projectAllowlist;
      this._pscAutomationConfigs.internalValue = value.pscAutomationConfigs;
    }
  }

  // enable_private_service_connect - computed: false, optional: false, required: true
  private _enablePrivateServiceConnect?: boolean | cdktn.IResolvable; 
  public get enablePrivateServiceConnect() {
    return this.getBooleanAttribute('enable_private_service_connect');
  }
  public set enablePrivateServiceConnect(value: boolean | cdktn.IResolvable) {
    this._enablePrivateServiceConnect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateServiceConnectInput() {
    return this._enablePrivateServiceConnect;
  }

  // project_allowlist - computed: false, optional: true, required: false
  private _projectAllowlist?: string[]; 
  public get projectAllowlist() {
    return this.getListAttribute('project_allowlist');
  }
  public set projectAllowlist(value: string[]) {
    this._projectAllowlist = value;
  }
  public resetProjectAllowlist() {
    this._projectAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectAllowlistInput() {
    return this._projectAllowlist;
  }

  // psc_automation_configs - computed: false, optional: true, required: false
  private _pscAutomationConfigs = new VertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigsList(this, "psc_automation_configs", false);
  public get pscAutomationConfigs() {
    return this._pscAutomationConfigs;
  }
  public putPscAutomationConfigs(value: VertexAiEndpointPrivateServiceConnectConfigPscAutomationConfigs[] | cdktn.IResolvable) {
    this._pscAutomationConfigs.internalValue = value;
  }
  public resetPscAutomationConfigs() {
    this._pscAutomationConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscAutomationConfigsInput() {
    return this._pscAutomationConfigs.internalValue;
  }
}
export interface VertexAiEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#create VertexAiEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#delete VertexAiEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#update VertexAiEndpoint#update}
  */
  readonly update?: string;
}

export function vertexAiEndpointTimeoutsToTerraform(struct?: VertexAiEndpointTimeouts | cdktn.IResolvable): any {
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


export function vertexAiEndpointTimeoutsToHclTerraform(struct?: VertexAiEndpointTimeouts | cdktn.IResolvable): any {
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

export class VertexAiEndpointTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiEndpointTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VertexAiEndpointTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint google_vertex_ai_endpoint}
*/
export class VertexAiEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VertexAiEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiEndpoint to import
  * @param importFromId The id of the existing VertexAiEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/vertex_ai_endpoint google_vertex_ai_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_endpoint',
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
    this._dedicatedEndpointEnabled = config.dedicatedEndpointEnabled;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._region = config.region;
    this._trafficSplit = config.trafficSplit;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._predictRequestResponseLoggingConfig.internalValue = config.predictRequestResponseLoggingConfig;
    this._privateServiceConnectConfig.internalValue = config.privateServiceConnectConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dedicated_endpoint_dns - computed: true, optional: false, required: false
  public get dedicatedEndpointDns() {
    return this.getStringAttribute('dedicated_endpoint_dns');
  }

  // dedicated_endpoint_enabled - computed: false, optional: true, required: false
  private _dedicatedEndpointEnabled?: boolean | cdktn.IResolvable; 
  public get dedicatedEndpointEnabled() {
    return this.getBooleanAttribute('dedicated_endpoint_enabled');
  }
  public set dedicatedEndpointEnabled(value: boolean | cdktn.IResolvable) {
    this._dedicatedEndpointEnabled = value;
  }
  public resetDedicatedEndpointEnabled() {
    this._dedicatedEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedEndpointEnabledInput() {
    return this._dedicatedEndpointEnabled;
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

  // deployed_models - computed: true, optional: false, required: false
  private _deployedModels = new VertexAiEndpointDeployedModelsList(this, "deployed_models", false);
  public get deployedModels() {
    return this._deployedModels;
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // model_deployment_monitoring_job - computed: true, optional: false, required: false
  public get modelDeploymentMonitoringJob() {
    return this.getStringAttribute('model_deployment_monitoring_job');
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

  // traffic_split - computed: true, optional: true, required: false
  private _trafficSplit?: string; 
  public get trafficSplit() {
    return this.getStringAttribute('traffic_split');
  }
  public set trafficSplit(value: string) {
    this._trafficSplit = value;
  }
  public resetTrafficSplit() {
    this._trafficSplit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSplitInput() {
    return this._trafficSplit;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new VertexAiEndpointEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: VertexAiEndpointEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // predict_request_response_logging_config - computed: false, optional: true, required: false
  private _predictRequestResponseLoggingConfig = new VertexAiEndpointPredictRequestResponseLoggingConfigOutputReference(this, "predict_request_response_logging_config");
  public get predictRequestResponseLoggingConfig() {
    return this._predictRequestResponseLoggingConfig;
  }
  public putPredictRequestResponseLoggingConfig(value: VertexAiEndpointPredictRequestResponseLoggingConfig) {
    this._predictRequestResponseLoggingConfig.internalValue = value;
  }
  public resetPredictRequestResponseLoggingConfig() {
    this._predictRequestResponseLoggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictRequestResponseLoggingConfigInput() {
    return this._predictRequestResponseLoggingConfig.internalValue;
  }

  // private_service_connect_config - computed: false, optional: true, required: false
  private _privateServiceConnectConfig = new VertexAiEndpointPrivateServiceConnectConfigOutputReference(this, "private_service_connect_config");
  public get privateServiceConnectConfig() {
    return this._privateServiceConnectConfig;
  }
  public putPrivateServiceConnectConfig(value: VertexAiEndpointPrivateServiceConnectConfig) {
    this._privateServiceConnectConfig.internalValue = value;
  }
  public resetPrivateServiceConnectConfig() {
    this._privateServiceConnectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServiceConnectConfigInput() {
    return this._privateServiceConnectConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiEndpointTimeouts) {
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
      dedicated_endpoint_enabled: cdktn.booleanToTerraform(this._dedicatedEndpointEnabled),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      network: cdktn.stringToTerraform(this._network),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      traffic_split: cdktn.stringToTerraform(this._trafficSplit),
      encryption_spec: vertexAiEndpointEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      predict_request_response_logging_config: vertexAiEndpointPredictRequestResponseLoggingConfigToTerraform(this._predictRequestResponseLoggingConfig.internalValue),
      private_service_connect_config: vertexAiEndpointPrivateServiceConnectConfigToTerraform(this._privateServiceConnectConfig.internalValue),
      timeouts: vertexAiEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated_endpoint_enabled: {
        value: cdktn.booleanToHclTerraform(this._dedicatedEndpointEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktn.stringToHclTerraform(this._network),
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
      traffic_split: {
        value: cdktn.stringToHclTerraform(this._trafficSplit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_spec: {
        value: vertexAiEndpointEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiEndpointEncryptionSpecList",
      },
      predict_request_response_logging_config: {
        value: vertexAiEndpointPredictRequestResponseLoggingConfigToHclTerraform(this._predictRequestResponseLoggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiEndpointPredictRequestResponseLoggingConfigList",
      },
      private_service_connect_config: {
        value: vertexAiEndpointPrivateServiceConnectConfigToHclTerraform(this._privateServiceConnectConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiEndpointPrivateServiceConnectConfigList",
      },
      timeouts: {
        value: vertexAiEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
