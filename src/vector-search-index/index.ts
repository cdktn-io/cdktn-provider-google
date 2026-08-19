/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VectorSearchIndexConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the parent Collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#collection_id VectorSearchIndex#collection_id}
  */
  readonly collectionId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#deletion_policy VectorSearchIndex#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * User-specified description of the index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#description VectorSearchIndex#description}
  */
  readonly description?: string;
  /**
  * User-specified display name of the index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#display_name VectorSearchIndex#display_name}
  */
  readonly displayName?: string;
  /**
  * Distance metric used for indexing. If not specified, will default to
  * 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#distance_metric VectorSearchIndex#distance_metric}
  */
  readonly distanceMetric?: string;
  /**
  * The fields to push into the index to enable fast ANN inline filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#filter_fields VectorSearchIndex#filter_fields}
  */
  readonly filterFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#id VectorSearchIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The collection schema field to index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#index_field VectorSearchIndex#index_field}
  */
  readonly indexField: string;
  /**
  * ID of the Index to create.
  * The id must be 1-63 characters long, and comply with
  * [RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
  * Specifically, it must be 1-63 characters long and match the regular
  * expression '[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#index_id VectorSearchIndex#index_id}
  */
  readonly indexId: string;
  /**
  * Labels as key value pairs.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#labels VectorSearchIndex#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#location VectorSearchIndex#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#project VectorSearchIndex#project}
  */
  readonly project?: string;
  /**
  * The fields to push into the index to enable inline data retrieval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#store_fields VectorSearchIndex#store_fields}
  */
  readonly storeFields?: string[];
  /**
  * dedicated_infrastructure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#dedicated_infrastructure VectorSearchIndex#dedicated_infrastructure}
  */
  readonly dedicatedInfrastructure?: VectorSearchIndexDedicatedInfrastructure;
  /**
  * dense_scann block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#dense_scann VectorSearchIndex#dense_scann}
  */
  readonly denseScann?: VectorSearchIndexDenseScann;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#timeouts VectorSearchIndex#timeouts}
  */
  readonly timeouts?: VectorSearchIndexTimeouts;
}
export interface VectorSearchIndexDedicatedInfrastructureAutoscalingSpec {
  /**
  * The maximum number of replicas. Must be >= 'min_replica_count'
  * and <= '1000'. If not set or set to '0', defaults to the greater
  * of 'min_replica_count' and '2' (or '5' for the v1beta version).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#max_replica_count VectorSearchIndex#max_replica_count}
  */
  readonly maxReplicaCount?: number;
  /**
  * The minimum number of replicas. If not set or set to '0', defaults
  * to '2'. Must be >= '1' and <= '1000'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#min_replica_count VectorSearchIndex#min_replica_count}
  */
  readonly minReplicaCount?: number;
}

export function vectorSearchIndexDedicatedInfrastructureAutoscalingSpecToTerraform(struct?: VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference | VectorSearchIndexDedicatedInfrastructureAutoscalingSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_replica_count: cdktn.numberToTerraform(struct!.maxReplicaCount),
    min_replica_count: cdktn.numberToTerraform(struct!.minReplicaCount),
  }
}


export function vectorSearchIndexDedicatedInfrastructureAutoscalingSpecToHclTerraform(struct?: VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference | VectorSearchIndexDedicatedInfrastructureAutoscalingSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_replica_count: {
      value: cdktn.numberToHclTerraform(struct!.maxReplicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replica_count: {
      value: cdktn.numberToHclTerraform(struct!.minReplicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VectorSearchIndexDedicatedInfrastructureAutoscalingSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicaCount = this._maxReplicaCount;
    }
    if (this._minReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicaCount = this._minReplicaCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchIndexDedicatedInfrastructureAutoscalingSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxReplicaCount = undefined;
      this._minReplicaCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxReplicaCount = value.maxReplicaCount;
      this._minReplicaCount = value.minReplicaCount;
    }
  }

  // max_replica_count - computed: true, optional: true, required: false
  private _maxReplicaCount?: number; 
  public get maxReplicaCount() {
    return this.getNumberAttribute('max_replica_count');
  }
  public set maxReplicaCount(value: number) {
    this._maxReplicaCount = value;
  }
  public resetMaxReplicaCount() {
    this._maxReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicaCountInput() {
    return this._maxReplicaCount;
  }

  // min_replica_count - computed: true, optional: true, required: false
  private _minReplicaCount?: number; 
  public get minReplicaCount() {
    return this.getNumberAttribute('min_replica_count');
  }
  public set minReplicaCount(value: number) {
    this._minReplicaCount = value;
  }
  public resetMinReplicaCount() {
    this._minReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicaCountInput() {
    return this._minReplicaCount;
  }
}
export interface VectorSearchIndexDedicatedInfrastructure {
  /**
  * Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#mode VectorSearchIndex#mode}
  */
  readonly mode?: string;
  /**
  * autoscaling_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#autoscaling_spec VectorSearchIndex#autoscaling_spec}
  */
  readonly autoscalingSpec?: VectorSearchIndexDedicatedInfrastructureAutoscalingSpec;
}

export function vectorSearchIndexDedicatedInfrastructureToTerraform(struct?: VectorSearchIndexDedicatedInfrastructureOutputReference | VectorSearchIndexDedicatedInfrastructure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
    autoscaling_spec: vectorSearchIndexDedicatedInfrastructureAutoscalingSpecToTerraform(struct!.autoscalingSpec),
  }
}


export function vectorSearchIndexDedicatedInfrastructureToHclTerraform(struct?: VectorSearchIndexDedicatedInfrastructureOutputReference | VectorSearchIndexDedicatedInfrastructure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaling_spec: {
      value: vectorSearchIndexDedicatedInfrastructureAutoscalingSpecToHclTerraform(struct!.autoscalingSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VectorSearchIndexDedicatedInfrastructureAutoscalingSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VectorSearchIndexDedicatedInfrastructureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VectorSearchIndexDedicatedInfrastructure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._autoscalingSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingSpec = this._autoscalingSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchIndexDedicatedInfrastructure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._autoscalingSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._autoscalingSpec.internalValue = value.autoscalingSpec;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // autoscaling_spec - computed: false, optional: true, required: false
  private _autoscalingSpec = new VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference(this, "autoscaling_spec");
  public get autoscalingSpec() {
    return this._autoscalingSpec;
  }
  public putAutoscalingSpec(value: VectorSearchIndexDedicatedInfrastructureAutoscalingSpec) {
    this._autoscalingSpec.internalValue = value;
  }
  public resetAutoscalingSpec() {
    this._autoscalingSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingSpecInput() {
    return this._autoscalingSpec.internalValue;
  }
}
export interface VectorSearchIndexDenseScann {
  /**
  * Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#feature_norm_type VectorSearchIndex#feature_norm_type}
  */
  readonly featureNormType?: string;
}

export function vectorSearchIndexDenseScannToTerraform(struct?: VectorSearchIndexDenseScannOutputReference | VectorSearchIndexDenseScann): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    feature_norm_type: cdktn.stringToTerraform(struct!.featureNormType),
  }
}


export function vectorSearchIndexDenseScannToHclTerraform(struct?: VectorSearchIndexDenseScannOutputReference | VectorSearchIndexDenseScann): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    feature_norm_type: {
      value: cdktn.stringToHclTerraform(struct!.featureNormType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VectorSearchIndexDenseScannOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VectorSearchIndexDenseScann | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureNormType !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureNormType = this._featureNormType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchIndexDenseScann | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._featureNormType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._featureNormType = value.featureNormType;
    }
  }

  // feature_norm_type - computed: true, optional: true, required: false
  private _featureNormType?: string; 
  public get featureNormType() {
    return this.getStringAttribute('feature_norm_type');
  }
  public set featureNormType(value: string) {
    this._featureNormType = value;
  }
  public resetFeatureNormType() {
    this._featureNormType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNormTypeInput() {
    return this._featureNormType;
  }
}
export interface VectorSearchIndexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#create VectorSearchIndex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#delete VectorSearchIndex#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#update VectorSearchIndex#update}
  */
  readonly update?: string;
}

export function vectorSearchIndexTimeoutsToTerraform(struct?: VectorSearchIndexTimeouts | cdktn.IResolvable): any {
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


export function vectorSearchIndexTimeoutsToHclTerraform(struct?: VectorSearchIndexTimeouts | cdktn.IResolvable): any {
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

export class VectorSearchIndexTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VectorSearchIndexTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VectorSearchIndexTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index google_vector_search_index}
*/
export class VectorSearchIndex extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vector_search_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VectorSearchIndex resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VectorSearchIndex to import
  * @param importFromId The id of the existing VectorSearchIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VectorSearchIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vector_search_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/vector_search_index google_vector_search_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VectorSearchIndexConfig
  */
  public constructor(scope: Construct, id: string, config: VectorSearchIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vector_search_index',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.45.0',
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
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._distanceMetric = config.distanceMetric;
    this._filterFields = config.filterFields;
    this._id = config.id;
    this._indexField = config.indexField;
    this._indexId = config.indexId;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._storeFields = config.storeFields;
    this._dedicatedInfrastructure.internalValue = config.dedicatedInfrastructure;
    this._denseScann.internalValue = config.denseScann;
    this._timeouts.internalValue = config.timeouts;
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

  // distance_metric - computed: true, optional: true, required: false
  private _distanceMetric?: string; 
  public get distanceMetric() {
    return this.getStringAttribute('distance_metric');
  }
  public set distanceMetric(value: string) {
    this._distanceMetric = value;
  }
  public resetDistanceMetric() {
    this._distanceMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceMetricInput() {
    return this._distanceMetric;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // filter_fields - computed: false, optional: true, required: false
  private _filterFields?: string[]; 
  public get filterFields() {
    return this.getListAttribute('filter_fields');
  }
  public set filterFields(value: string[]) {
    this._filterFields = value;
  }
  public resetFilterFields() {
    this._filterFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterFieldsInput() {
    return this._filterFields;
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

  // index_field - computed: false, optional: false, required: true
  private _indexField?: string; 
  public get indexField() {
    return this.getStringAttribute('index_field');
  }
  public set indexField(value: string) {
    this._indexField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldInput() {
    return this._indexField;
  }

  // index_id - computed: false, optional: false, required: true
  private _indexId?: string; 
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
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

  // store_fields - computed: false, optional: true, required: false
  private _storeFields?: string[]; 
  public get storeFields() {
    return this.getListAttribute('store_fields');
  }
  public set storeFields(value: string[]) {
    this._storeFields = value;
  }
  public resetStoreFields() {
    this._storeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeFieldsInput() {
    return this._storeFields;
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

  // dedicated_infrastructure - computed: false, optional: true, required: false
  private _dedicatedInfrastructure = new VectorSearchIndexDedicatedInfrastructureOutputReference(this, "dedicated_infrastructure");
  public get dedicatedInfrastructure() {
    return this._dedicatedInfrastructure;
  }
  public putDedicatedInfrastructure(value: VectorSearchIndexDedicatedInfrastructure) {
    this._dedicatedInfrastructure.internalValue = value;
  }
  public resetDedicatedInfrastructure() {
    this._dedicatedInfrastructure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedInfrastructureInput() {
    return this._dedicatedInfrastructure.internalValue;
  }

  // dense_scann - computed: false, optional: true, required: false
  private _denseScann = new VectorSearchIndexDenseScannOutputReference(this, "dense_scann");
  public get denseScann() {
    return this._denseScann;
  }
  public putDenseScann(value: VectorSearchIndexDenseScann) {
    this._denseScann.internalValue = value;
  }
  public resetDenseScann() {
    this._denseScann.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denseScannInput() {
    return this._denseScann.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VectorSearchIndexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VectorSearchIndexTimeouts) {
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
      collection_id: cdktn.stringToTerraform(this._collectionId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      distance_metric: cdktn.stringToTerraform(this._distanceMetric),
      filter_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(this._filterFields),
      id: cdktn.stringToTerraform(this._id),
      index_field: cdktn.stringToTerraform(this._indexField),
      index_id: cdktn.stringToTerraform(this._indexId),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      store_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(this._storeFields),
      dedicated_infrastructure: vectorSearchIndexDedicatedInfrastructureToTerraform(this._dedicatedInfrastructure.internalValue),
      dense_scann: vectorSearchIndexDenseScannToTerraform(this._denseScann.internalValue),
      timeouts: vectorSearchIndexTimeoutsToTerraform(this._timeouts.internalValue),
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
      distance_metric: {
        value: cdktn.stringToHclTerraform(this._distanceMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_fields: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._filterFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_field: {
        value: cdktn.stringToHclTerraform(this._indexField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_id: {
        value: cdktn.stringToHclTerraform(this._indexId),
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
      store_fields: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._storeFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dedicated_infrastructure: {
        value: vectorSearchIndexDedicatedInfrastructureToHclTerraform(this._dedicatedInfrastructure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VectorSearchIndexDedicatedInfrastructureList",
      },
      dense_scann: {
        value: vectorSearchIndexDenseScannToHclTerraform(this._denseScann.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VectorSearchIndexDenseScannList",
      },
      timeouts: {
        value: vectorSearchIndexTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VectorSearchIndexTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
