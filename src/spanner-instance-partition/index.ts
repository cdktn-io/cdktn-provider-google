/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SpannerInstancePartitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the instance partition's configuration (similar to a region) which
  * defines the geographic placement and replication of data in this instance partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#config SpannerInstancePartition#config}
  */
  readonly config: string;
  /**
  * The descriptive name for this instance partition as it appears in UIs.
  * Must be unique per project and between 4 and 30 characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#display_name SpannerInstancePartition#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The instance to create the instance partition in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#instance SpannerInstancePartition#instance}
  */
  readonly instance: string;
  /**
  * A unique identifier for the instance partition, which cannot be changed after
  * the instance partition is created. The name must be between 2 and 64 characters
  * and match the regular expression [a-z][a-z0-9\\-]{0,61}[a-z0-9].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#name SpannerInstancePartition#name}
  */
  readonly name: string;
  /**
  * The number of nodes allocated to this instance partition. One node equals
  * 1000 processing units. Exactly one of either node_count, processing_units,
  * or autoscaling_config must be present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#node_count SpannerInstancePartition#node_count}
  */
  readonly nodeCount?: number;
  /**
  * The number of processing units allocated to this instance partition.
  * Exactly one of either node_count, processing_units, or autoscaling_config
  * must be present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#processing_units SpannerInstancePartition#processing_units}
  */
  readonly processingUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}
  */
  readonly project?: string;
  /**
  * autoscaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#autoscaling_config SpannerInstancePartition#autoscaling_config}
  */
  readonly autoscalingConfig?: SpannerInstancePartitionAutoscalingConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#timeouts SpannerInstancePartition#timeouts}
  */
  readonly timeouts?: SpannerInstancePartitionTimeouts;
}
export interface SpannerInstancePartitionAutoscalingConfigAutoscalingLimits {
  /**
  * Specifies maximum number of nodes allocated to the instance partition. If set, this number
  * should be greater than or equal to min_nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#max_nodes SpannerInstancePartition#max_nodes}
  */
  readonly maxNodes?: number;
  /**
  * Specifies maximum number of processing units allocated to the instance partition.
  * If set, this number should be multiples of 1000 and be greater than or equal to
  * min_processing_units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#max_processing_units SpannerInstancePartition#max_processing_units}
  */
  readonly maxProcessingUnits?: number;
  /**
  * Specifies number of nodes allocated to the instance partition. If set, this number
  * should be greater than or equal to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#min_nodes SpannerInstancePartition#min_nodes}
  */
  readonly minNodes?: number;
  /**
  * Specifies minimum number of processing units allocated to the instance partition.
  * If set, this number should be multiples of 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#min_processing_units SpannerInstancePartition#min_processing_units}
  */
  readonly minProcessingUnits?: number;
}

export function spannerInstancePartitionAutoscalingConfigAutoscalingLimitsToTerraform(struct?: SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference | SpannerInstancePartitionAutoscalingConfigAutoscalingLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_nodes: cdktn.numberToTerraform(struct!.maxNodes),
    max_processing_units: cdktn.numberToTerraform(struct!.maxProcessingUnits),
    min_nodes: cdktn.numberToTerraform(struct!.minNodes),
    min_processing_units: cdktn.numberToTerraform(struct!.minProcessingUnits),
  }
}


export function spannerInstancePartitionAutoscalingConfigAutoscalingLimitsToHclTerraform(struct?: SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference | SpannerInstancePartitionAutoscalingConfigAutoscalingLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_nodes: {
      value: cdktn.numberToHclTerraform(struct!.maxNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_processing_units: {
      value: cdktn.numberToHclTerraform(struct!.maxProcessingUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_nodes: {
      value: cdktn.numberToHclTerraform(struct!.minNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_processing_units: {
      value: cdktn.numberToHclTerraform(struct!.minProcessingUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpannerInstancePartitionAutoscalingConfigAutoscalingLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodes = this._maxNodes;
    }
    if (this._maxProcessingUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProcessingUnits = this._maxProcessingUnits;
    }
    if (this._minNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodes = this._minNodes;
    }
    if (this._minProcessingUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProcessingUnits = this._minProcessingUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpannerInstancePartitionAutoscalingConfigAutoscalingLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxNodes = undefined;
      this._maxProcessingUnits = undefined;
      this._minNodes = undefined;
      this._minProcessingUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxNodes = value.maxNodes;
      this._maxProcessingUnits = value.maxProcessingUnits;
      this._minNodes = value.minNodes;
      this._minProcessingUnits = value.minProcessingUnits;
    }
  }

  // max_nodes - computed: false, optional: true, required: false
  private _maxNodes?: number; 
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }
  public set maxNodes(value: number) {
    this._maxNodes = value;
  }
  public resetMaxNodes() {
    this._maxNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodesInput() {
    return this._maxNodes;
  }

  // max_processing_units - computed: false, optional: true, required: false
  private _maxProcessingUnits?: number; 
  public get maxProcessingUnits() {
    return this.getNumberAttribute('max_processing_units');
  }
  public set maxProcessingUnits(value: number) {
    this._maxProcessingUnits = value;
  }
  public resetMaxProcessingUnits() {
    this._maxProcessingUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxProcessingUnitsInput() {
    return this._maxProcessingUnits;
  }

  // min_nodes - computed: false, optional: true, required: false
  private _minNodes?: number; 
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }
  public set minNodes(value: number) {
    this._minNodes = value;
  }
  public resetMinNodes() {
    this._minNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodesInput() {
    return this._minNodes;
  }

  // min_processing_units - computed: false, optional: true, required: false
  private _minProcessingUnits?: number; 
  public get minProcessingUnits() {
    return this.getNumberAttribute('min_processing_units');
  }
  public set minProcessingUnits(value: number) {
    this._minProcessingUnits = value;
  }
  public resetMinProcessingUnits() {
    this._minProcessingUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minProcessingUnitsInput() {
    return this._minProcessingUnits;
  }
}
export interface SpannerInstancePartitionAutoscalingConfigAutoscalingTargets {
  /**
  * Specifies the target high priority cpu utilization percentage that the autoscaler
  * should be trying to achieve for the instance partition.
  * This number is on a scale from 0 (no utilization) to 100 (full utilization).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#high_priority_cpu_utilization_percent SpannerInstancePartition#high_priority_cpu_utilization_percent}
  */
  readonly highPriorityCpuUtilizationPercent?: number;
  /**
  * Specifies the target storage utilization percentage that the autoscaler
  * should be trying to achieve for the instance partition.
  * This number is on a scale from 0 (no utilization) to 100 (full utilization).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#storage_utilization_percent SpannerInstancePartition#storage_utilization_percent}
  */
  readonly storageUtilizationPercent?: number;
  /**
  * Specifies the target total cpu utilization percentage that the autoscaler
  * should be trying to achieve for the instance partition.
  * This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 90] inclusive.
  * If not specified or set to 0, the autoscaler will skip scaling based on total cpu utilization.
  * The value should be higher than high_priority_cpu_utilization_percent if present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#total_cpu_utilization_percent SpannerInstancePartition#total_cpu_utilization_percent}
  */
  readonly totalCpuUtilizationPercent?: number;
}

export function spannerInstancePartitionAutoscalingConfigAutoscalingTargetsToTerraform(struct?: SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference | SpannerInstancePartitionAutoscalingConfigAutoscalingTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_priority_cpu_utilization_percent: cdktn.numberToTerraform(struct!.highPriorityCpuUtilizationPercent),
    storage_utilization_percent: cdktn.numberToTerraform(struct!.storageUtilizationPercent),
    total_cpu_utilization_percent: cdktn.numberToTerraform(struct!.totalCpuUtilizationPercent),
  }
}


export function spannerInstancePartitionAutoscalingConfigAutoscalingTargetsToHclTerraform(struct?: SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference | SpannerInstancePartitionAutoscalingConfigAutoscalingTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_priority_cpu_utilization_percent: {
      value: cdktn.numberToHclTerraform(struct!.highPriorityCpuUtilizationPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_utilization_percent: {
      value: cdktn.numberToHclTerraform(struct!.storageUtilizationPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_cpu_utilization_percent: {
      value: cdktn.numberToHclTerraform(struct!.totalCpuUtilizationPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpannerInstancePartitionAutoscalingConfigAutoscalingTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highPriorityCpuUtilizationPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.highPriorityCpuUtilizationPercent = this._highPriorityCpuUtilizationPercent;
    }
    if (this._storageUtilizationPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageUtilizationPercent = this._storageUtilizationPercent;
    }
    if (this._totalCpuUtilizationPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCpuUtilizationPercent = this._totalCpuUtilizationPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpannerInstancePartitionAutoscalingConfigAutoscalingTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highPriorityCpuUtilizationPercent = undefined;
      this._storageUtilizationPercent = undefined;
      this._totalCpuUtilizationPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highPriorityCpuUtilizationPercent = value.highPriorityCpuUtilizationPercent;
      this._storageUtilizationPercent = value.storageUtilizationPercent;
      this._totalCpuUtilizationPercent = value.totalCpuUtilizationPercent;
    }
  }

  // high_priority_cpu_utilization_percent - computed: false, optional: true, required: false
  private _highPriorityCpuUtilizationPercent?: number; 
  public get highPriorityCpuUtilizationPercent() {
    return this.getNumberAttribute('high_priority_cpu_utilization_percent');
  }
  public set highPriorityCpuUtilizationPercent(value: number) {
    this._highPriorityCpuUtilizationPercent = value;
  }
  public resetHighPriorityCpuUtilizationPercent() {
    this._highPriorityCpuUtilizationPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highPriorityCpuUtilizationPercentInput() {
    return this._highPriorityCpuUtilizationPercent;
  }

  // storage_utilization_percent - computed: false, optional: true, required: false
  private _storageUtilizationPercent?: number; 
  public get storageUtilizationPercent() {
    return this.getNumberAttribute('storage_utilization_percent');
  }
  public set storageUtilizationPercent(value: number) {
    this._storageUtilizationPercent = value;
  }
  public resetStorageUtilizationPercent() {
    this._storageUtilizationPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUtilizationPercentInput() {
    return this._storageUtilizationPercent;
  }

  // total_cpu_utilization_percent - computed: false, optional: true, required: false
  private _totalCpuUtilizationPercent?: number; 
  public get totalCpuUtilizationPercent() {
    return this.getNumberAttribute('total_cpu_utilization_percent');
  }
  public set totalCpuUtilizationPercent(value: number) {
    this._totalCpuUtilizationPercent = value;
  }
  public resetTotalCpuUtilizationPercent() {
    this._totalCpuUtilizationPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCpuUtilizationPercentInput() {
    return this._totalCpuUtilizationPercent;
  }
}
export interface SpannerInstancePartitionAutoscalingConfig {
  /**
  * autoscaling_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#autoscaling_limits SpannerInstancePartition#autoscaling_limits}
  */
  readonly autoscalingLimits?: SpannerInstancePartitionAutoscalingConfigAutoscalingLimits;
  /**
  * autoscaling_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#autoscaling_targets SpannerInstancePartition#autoscaling_targets}
  */
  readonly autoscalingTargets?: SpannerInstancePartitionAutoscalingConfigAutoscalingTargets;
}

export function spannerInstancePartitionAutoscalingConfigToTerraform(struct?: SpannerInstancePartitionAutoscalingConfigOutputReference | SpannerInstancePartitionAutoscalingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_limits: spannerInstancePartitionAutoscalingConfigAutoscalingLimitsToTerraform(struct!.autoscalingLimits),
    autoscaling_targets: spannerInstancePartitionAutoscalingConfigAutoscalingTargetsToTerraform(struct!.autoscalingTargets),
  }
}


export function spannerInstancePartitionAutoscalingConfigToHclTerraform(struct?: SpannerInstancePartitionAutoscalingConfigOutputReference | SpannerInstancePartitionAutoscalingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling_limits: {
      value: spannerInstancePartitionAutoscalingConfigAutoscalingLimitsToHclTerraform(struct!.autoscalingLimits),
      isBlock: true,
      type: "list",
      storageClassType: "SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsList",
    },
    autoscaling_targets: {
      value: spannerInstancePartitionAutoscalingConfigAutoscalingTargetsToHclTerraform(struct!.autoscalingTargets),
      isBlock: true,
      type: "list",
      storageClassType: "SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpannerInstancePartitionAutoscalingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpannerInstancePartitionAutoscalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingLimits = this._autoscalingLimits?.internalValue;
    }
    if (this._autoscalingTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingTargets = this._autoscalingTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpannerInstancePartitionAutoscalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscalingLimits.internalValue = undefined;
      this._autoscalingTargets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscalingLimits.internalValue = value.autoscalingLimits;
      this._autoscalingTargets.internalValue = value.autoscalingTargets;
    }
  }

  // autoscaling_limits - computed: false, optional: true, required: false
  private _autoscalingLimits = new SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference(this, "autoscaling_limits");
  public get autoscalingLimits() {
    return this._autoscalingLimits;
  }
  public putAutoscalingLimits(value: SpannerInstancePartitionAutoscalingConfigAutoscalingLimits) {
    this._autoscalingLimits.internalValue = value;
  }
  public resetAutoscalingLimits() {
    this._autoscalingLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingLimitsInput() {
    return this._autoscalingLimits.internalValue;
  }

  // autoscaling_targets - computed: false, optional: true, required: false
  private _autoscalingTargets = new SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference(this, "autoscaling_targets");
  public get autoscalingTargets() {
    return this._autoscalingTargets;
  }
  public putAutoscalingTargets(value: SpannerInstancePartitionAutoscalingConfigAutoscalingTargets) {
    this._autoscalingTargets.internalValue = value;
  }
  public resetAutoscalingTargets() {
    this._autoscalingTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingTargetsInput() {
    return this._autoscalingTargets.internalValue;
  }
}
export interface SpannerInstancePartitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#create SpannerInstancePartition#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#delete SpannerInstancePartition#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#update SpannerInstancePartition#update}
  */
  readonly update?: string;
}

export function spannerInstancePartitionTimeoutsToTerraform(struct?: SpannerInstancePartitionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function spannerInstancePartitionTimeoutsToHclTerraform(struct?: SpannerInstancePartitionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class SpannerInstancePartitionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpannerInstancePartitionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SpannerInstancePartitionTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition google_spanner_instance_partition}
*/
export class SpannerInstancePartition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_spanner_instance_partition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SpannerInstancePartition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpannerInstancePartition to import
  * @param importFromId The id of the existing SpannerInstancePartition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpannerInstancePartition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_spanner_instance_partition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/spanner_instance_partition google_spanner_instance_partition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpannerInstancePartitionConfig
  */
  public constructor(scope: Construct, id: string, config: SpannerInstancePartitionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_spanner_instance_partition',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.32.0',
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
    this._config = config.config;
    this._displayName = config.displayName;
    this._id = config.id;
    this._instance = config.instance;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._processingUnits = config.processingUnits;
    this._project = config.project;
    this._autoscalingConfig.internalValue = config.autoscalingConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // processing_units - computed: true, optional: true, required: false
  private _processingUnits?: number; 
  public get processingUnits() {
    return this.getNumberAttribute('processing_units');
  }
  public set processingUnits(value: number) {
    this._processingUnits = value;
  }
  public resetProcessingUnits() {
    this._processingUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingUnitsInput() {
    return this._processingUnits;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // autoscaling_config - computed: false, optional: true, required: false
  private _autoscalingConfig = new SpannerInstancePartitionAutoscalingConfigOutputReference(this, "autoscaling_config");
  public get autoscalingConfig() {
    return this._autoscalingConfig;
  }
  public putAutoscalingConfig(value: SpannerInstancePartitionAutoscalingConfig) {
    this._autoscalingConfig.internalValue = value;
  }
  public resetAutoscalingConfig() {
    this._autoscalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingConfigInput() {
    return this._autoscalingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SpannerInstancePartitionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SpannerInstancePartitionTimeouts) {
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
      config: cdktn.stringToTerraform(this._config),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      name: cdktn.stringToTerraform(this._name),
      node_count: cdktn.numberToTerraform(this._nodeCount),
      processing_units: cdktn.numberToTerraform(this._processingUnits),
      project: cdktn.stringToTerraform(this._project),
      autoscaling_config: spannerInstancePartitionAutoscalingConfigToTerraform(this._autoscalingConfig.internalValue),
      timeouts: spannerInstancePartitionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktn.stringToHclTerraform(this._config),
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
      instance: {
        value: cdktn.stringToHclTerraform(this._instance),
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
      node_count: {
        value: cdktn.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      processing_units: {
        value: cdktn.numberToHclTerraform(this._processingUnits),
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
      autoscaling_config: {
        value: spannerInstancePartitionAutoscalingConfigToHclTerraform(this._autoscalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpannerInstancePartitionAutoscalingConfigList",
      },
      timeouts: {
        value: spannerInstancePartitionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpannerInstancePartitionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
