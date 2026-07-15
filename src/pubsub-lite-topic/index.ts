/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PubsubLiteTopicConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#deletion_policy PubsubLiteTopic#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#id PubsubLiteTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#name PubsubLiteTopic#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#project PubsubLiteTopic#project}
  */
  readonly project?: string;
  /**
  * The region of the pubsub lite topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#region PubsubLiteTopic#region}
  */
  readonly region?: string;
  /**
  * The zone of the pubsub lite topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#zone PubsubLiteTopic#zone}
  */
  readonly zone?: string;
  /**
  * partition_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#partition_config PubsubLiteTopic#partition_config}
  */
  readonly partitionConfig?: PubsubLiteTopicPartitionConfig;
  /**
  * reservation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#reservation_config PubsubLiteTopic#reservation_config}
  */
  readonly reservationConfig?: PubsubLiteTopicReservationConfig;
  /**
  * retention_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#retention_config PubsubLiteTopic#retention_config}
  */
  readonly retentionConfig?: PubsubLiteTopicRetentionConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#timeouts PubsubLiteTopic#timeouts}
  */
  readonly timeouts?: PubsubLiteTopicTimeouts;
}
export interface PubsubLiteTopicPartitionConfigCapacity {
  /**
  * Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#publish_mib_per_sec PubsubLiteTopic#publish_mib_per_sec}
  */
  readonly publishMibPerSec: number;
  /**
  * Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#subscribe_mib_per_sec PubsubLiteTopic#subscribe_mib_per_sec}
  */
  readonly subscribeMibPerSec: number;
}

export function pubsubLiteTopicPartitionConfigCapacityToTerraform(struct?: PubsubLiteTopicPartitionConfigCapacityOutputReference | PubsubLiteTopicPartitionConfigCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    publish_mib_per_sec: cdktn.numberToTerraform(struct!.publishMibPerSec),
    subscribe_mib_per_sec: cdktn.numberToTerraform(struct!.subscribeMibPerSec),
  }
}


export function pubsubLiteTopicPartitionConfigCapacityToHclTerraform(struct?: PubsubLiteTopicPartitionConfigCapacityOutputReference | PubsubLiteTopicPartitionConfigCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    publish_mib_per_sec: {
      value: cdktn.numberToHclTerraform(struct!.publishMibPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subscribe_mib_per_sec: {
      value: cdktn.numberToHclTerraform(struct!.subscribeMibPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubLiteTopicPartitionConfigCapacityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubLiteTopicPartitionConfigCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publishMibPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishMibPerSec = this._publishMibPerSec;
    }
    if (this._subscribeMibPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribeMibPerSec = this._subscribeMibPerSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubLiteTopicPartitionConfigCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publishMibPerSec = undefined;
      this._subscribeMibPerSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publishMibPerSec = value.publishMibPerSec;
      this._subscribeMibPerSec = value.subscribeMibPerSec;
    }
  }

  // publish_mib_per_sec - computed: false, optional: false, required: true
  private _publishMibPerSec?: number; 
  public get publishMibPerSec() {
    return this.getNumberAttribute('publish_mib_per_sec');
  }
  public set publishMibPerSec(value: number) {
    this._publishMibPerSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishMibPerSecInput() {
    return this._publishMibPerSec;
  }

  // subscribe_mib_per_sec - computed: false, optional: false, required: true
  private _subscribeMibPerSec?: number; 
  public get subscribeMibPerSec() {
    return this.getNumberAttribute('subscribe_mib_per_sec');
  }
  public set subscribeMibPerSec(value: number) {
    this._subscribeMibPerSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeMibPerSecInput() {
    return this._subscribeMibPerSec;
  }
}
export interface PubsubLiteTopicPartitionConfig {
  /**
  * The number of partitions in the topic. Must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#count PubsubLiteTopic#count}
  */
  readonly count: number;
  /**
  * capacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#capacity PubsubLiteTopic#capacity}
  */
  readonly capacity?: PubsubLiteTopicPartitionConfigCapacity;
}

export function pubsubLiteTopicPartitionConfigToTerraform(struct?: PubsubLiteTopicPartitionConfigOutputReference | PubsubLiteTopicPartitionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    capacity: pubsubLiteTopicPartitionConfigCapacityToTerraform(struct!.capacity),
  }
}


export function pubsubLiteTopicPartitionConfigToHclTerraform(struct?: PubsubLiteTopicPartitionConfigOutputReference | PubsubLiteTopicPartitionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capacity: {
      value: pubsubLiteTopicPartitionConfigCapacityToHclTerraform(struct!.capacity),
      isBlock: true,
      type: "list",
      storageClassType: "PubsubLiteTopicPartitionConfigCapacityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubLiteTopicPartitionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubLiteTopicPartitionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._capacity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubLiteTopicPartitionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._capacity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._capacity.internalValue = value.capacity;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity = new PubsubLiteTopicPartitionConfigCapacityOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }
  public putCapacity(value: PubsubLiteTopicPartitionConfigCapacity) {
    this._capacity.internalValue = value;
  }
  public resetCapacity() {
    this._capacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity.internalValue;
  }
}
export interface PubsubLiteTopicReservationConfig {
  /**
  * The Reservation to use for this topic's throughput capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#throughput_reservation PubsubLiteTopic#throughput_reservation}
  */
  readonly throughputReservation?: string;
}

export function pubsubLiteTopicReservationConfigToTerraform(struct?: PubsubLiteTopicReservationConfigOutputReference | PubsubLiteTopicReservationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    throughput_reservation: cdktn.stringToTerraform(struct!.throughputReservation),
  }
}


export function pubsubLiteTopicReservationConfigToHclTerraform(struct?: PubsubLiteTopicReservationConfigOutputReference | PubsubLiteTopicReservationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    throughput_reservation: {
      value: cdktn.stringToHclTerraform(struct!.throughputReservation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubLiteTopicReservationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubLiteTopicReservationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._throughputReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputReservation = this._throughputReservation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubLiteTopicReservationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._throughputReservation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._throughputReservation = value.throughputReservation;
    }
  }

  // throughput_reservation - computed: false, optional: true, required: false
  private _throughputReservation?: string; 
  public get throughputReservation() {
    return this.getStringAttribute('throughput_reservation');
  }
  public set throughputReservation(value: string) {
    this._throughputReservation = value;
  }
  public resetThroughputReservation() {
    this._throughputReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputReservationInput() {
    return this._throughputReservation;
  }
}
export interface PubsubLiteTopicRetentionConfig {
  /**
  * The provisioned storage, in bytes, per partition. If the number of bytes stored
  * in any of the topic's partitions grows beyond this value, older messages will be
  * dropped to make room for newer ones, regardless of the value of period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#per_partition_bytes PubsubLiteTopic#per_partition_bytes}
  */
  readonly perPartitionBytes: string;
  /**
  * How long a published message is retained. If unset, messages will be retained as
  * long as the bytes retained for each partition is below perPartitionBytes. A
  * duration in seconds with up to nine fractional digits, terminated by 's'.
  * Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#period PubsubLiteTopic#period}
  */
  readonly period?: string;
}

export function pubsubLiteTopicRetentionConfigToTerraform(struct?: PubsubLiteTopicRetentionConfigOutputReference | PubsubLiteTopicRetentionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    per_partition_bytes: cdktn.stringToTerraform(struct!.perPartitionBytes),
    period: cdktn.stringToTerraform(struct!.period),
  }
}


export function pubsubLiteTopicRetentionConfigToHclTerraform(struct?: PubsubLiteTopicRetentionConfigOutputReference | PubsubLiteTopicRetentionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    per_partition_bytes: {
      value: cdktn.stringToHclTerraform(struct!.perPartitionBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktn.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubLiteTopicRetentionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubLiteTopicRetentionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perPartitionBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.perPartitionBytes = this._perPartitionBytes;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubLiteTopicRetentionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perPartitionBytes = undefined;
      this._period = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perPartitionBytes = value.perPartitionBytes;
      this._period = value.period;
    }
  }

  // per_partition_bytes - computed: false, optional: false, required: true
  private _perPartitionBytes?: string; 
  public get perPartitionBytes() {
    return this.getStringAttribute('per_partition_bytes');
  }
  public set perPartitionBytes(value: string) {
    this._perPartitionBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perPartitionBytesInput() {
    return this._perPartitionBytes;
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }
}
export interface PubsubLiteTopicTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#create PubsubLiteTopic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#delete PubsubLiteTopic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#update PubsubLiteTopic#update}
  */
  readonly update?: string;
}

export function pubsubLiteTopicTimeoutsToTerraform(struct?: PubsubLiteTopicTimeouts | cdktn.IResolvable): any {
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


export function pubsubLiteTopicTimeoutsToHclTerraform(struct?: PubsubLiteTopicTimeouts | cdktn.IResolvable): any {
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

export class PubsubLiteTopicTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PubsubLiteTopicTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PubsubLiteTopicTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic google_pubsub_lite_topic}
*/
export class PubsubLiteTopic extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_pubsub_lite_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PubsubLiteTopic resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PubsubLiteTopic to import
  * @param importFromId The id of the existing PubsubLiteTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PubsubLiteTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_pubsub_lite_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/pubsub_lite_topic google_pubsub_lite_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PubsubLiteTopicConfig
  */
  public constructor(scope: Construct, id: string, config: PubsubLiteTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_lite_topic',
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
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._zone = config.zone;
    this._partitionConfig.internalValue = config.partitionConfig;
    this._reservationConfig.internalValue = config.reservationConfig;
    this._retentionConfig.internalValue = config.retentionConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // partition_config - computed: false, optional: true, required: false
  private _partitionConfig = new PubsubLiteTopicPartitionConfigOutputReference(this, "partition_config");
  public get partitionConfig() {
    return this._partitionConfig;
  }
  public putPartitionConfig(value: PubsubLiteTopicPartitionConfig) {
    this._partitionConfig.internalValue = value;
  }
  public resetPartitionConfig() {
    this._partitionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionConfigInput() {
    return this._partitionConfig.internalValue;
  }

  // reservation_config - computed: false, optional: true, required: false
  private _reservationConfig = new PubsubLiteTopicReservationConfigOutputReference(this, "reservation_config");
  public get reservationConfig() {
    return this._reservationConfig;
  }
  public putReservationConfig(value: PubsubLiteTopicReservationConfig) {
    this._reservationConfig.internalValue = value;
  }
  public resetReservationConfig() {
    this._reservationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationConfigInput() {
    return this._reservationConfig.internalValue;
  }

  // retention_config - computed: false, optional: true, required: false
  private _retentionConfig = new PubsubLiteTopicRetentionConfigOutputReference(this, "retention_config");
  public get retentionConfig() {
    return this._retentionConfig;
  }
  public putRetentionConfig(value: PubsubLiteTopicRetentionConfig) {
    this._retentionConfig.internalValue = value;
  }
  public resetRetentionConfig() {
    this._retentionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionConfigInput() {
    return this._retentionConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PubsubLiteTopicTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PubsubLiteTopicTimeouts) {
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
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      zone: cdktn.stringToTerraform(this._zone),
      partition_config: pubsubLiteTopicPartitionConfigToTerraform(this._partitionConfig.internalValue),
      reservation_config: pubsubLiteTopicReservationConfigToTerraform(this._reservationConfig.internalValue),
      retention_config: pubsubLiteTopicRetentionConfigToTerraform(this._retentionConfig.internalValue),
      timeouts: pubsubLiteTopicTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      zone: {
        value: cdktn.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_config: {
        value: pubsubLiteTopicPartitionConfigToHclTerraform(this._partitionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PubsubLiteTopicPartitionConfigList",
      },
      reservation_config: {
        value: pubsubLiteTopicReservationConfigToHclTerraform(this._reservationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PubsubLiteTopicReservationConfigList",
      },
      retention_config: {
        value: pubsubLiteTopicRetentionConfigToHclTerraform(this._retentionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PubsubLiteTopicRetentionConfigList",
      },
      timeouts: {
        value: pubsubLiteTopicTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PubsubLiteTopicTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
