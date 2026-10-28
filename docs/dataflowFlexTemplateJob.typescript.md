# `dataflowFlexTemplateJob` Submodule <a name="`dataflowFlexTemplateJob` Submodule" id="@cdktn/provider-google.dataflowFlexTemplateJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowFlexTemplateJob <a name="DataflowFlexTemplateJob" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job google_dataflow_flex_template_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer"></a>

```typescript
import { dataflowFlexTemplateJob } from '@cdktn/provider-google'

new dataflowFlexTemplateJob.DataflowFlexTemplateJob(scope: Construct, id: string, config: DataflowFlexTemplateJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig">DataflowFlexTemplateJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig">DataflowFlexTemplateJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalExperiments">resetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalPipelineOptions">resetAdditionalPipelineOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAutoscalingAlgorithm">resetAutoscalingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetCreateIgnoreAlreadyExists">resetCreateIgnoreAlreadyExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetEnableStreamingEngine">resetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetIpConfiguration">resetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLauncherMachineType">resetLauncherMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMaxWorkers">resetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNumWorkers">resetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOnDelete">resetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSdkContainerImage">resetSdkContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSkipWaitOnJobTermination">resetSkipWaitOnJobTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetStagingLocation">resetStagingLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTempLocation">resetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTransformNameMapping">resetTransformNameMapping</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAdditionalExperiments` <a name="resetAdditionalExperiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalExperiments"></a>

```typescript
public resetAdditionalExperiments(): void
```

##### `resetAdditionalPipelineOptions` <a name="resetAdditionalPipelineOptions" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalPipelineOptions"></a>

```typescript
public resetAdditionalPipelineOptions(): void
```

##### `resetAutoscalingAlgorithm` <a name="resetAutoscalingAlgorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAutoscalingAlgorithm"></a>

```typescript
public resetAutoscalingAlgorithm(): void
```

##### `resetCreateIgnoreAlreadyExists` <a name="resetCreateIgnoreAlreadyExists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetCreateIgnoreAlreadyExists"></a>

```typescript
public resetCreateIgnoreAlreadyExists(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEnableStreamingEngine` <a name="resetEnableStreamingEngine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetEnableStreamingEngine"></a>

```typescript
public resetEnableStreamingEngine(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpConfiguration` <a name="resetIpConfiguration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetIpConfiguration"></a>

```typescript
public resetIpConfiguration(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLauncherMachineType` <a name="resetLauncherMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLauncherMachineType"></a>

```typescript
public resetLauncherMachineType(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetMaxWorkers` <a name="resetMaxWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMaxWorkers"></a>

```typescript
public resetMaxWorkers(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNumWorkers` <a name="resetNumWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNumWorkers"></a>

```typescript
public resetNumWorkers(): void
```

##### `resetOnDelete` <a name="resetOnDelete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOnDelete"></a>

```typescript
public resetOnDelete(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSdkContainerImage` <a name="resetSdkContainerImage" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSdkContainerImage"></a>

```typescript
public resetSdkContainerImage(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```

##### `resetSkipWaitOnJobTermination` <a name="resetSkipWaitOnJobTermination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSkipWaitOnJobTermination"></a>

```typescript
public resetSkipWaitOnJobTermination(): void
```

##### `resetStagingLocation` <a name="resetStagingLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetStagingLocation"></a>

```typescript
public resetStagingLocation(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTempLocation` <a name="resetTempLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTempLocation"></a>

```typescript
public resetTempLocation(): void
```

##### `resetTransformNameMapping` <a name="resetTransformNameMapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTransformNameMapping"></a>

```typescript
public resetTransformNameMapping(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataflowFlexTemplateJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct"></a>

```typescript
import { dataflowFlexTemplateJob } from '@cdktn/provider-google'

dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement"></a>

```typescript
import { dataflowFlexTemplateJob } from '@cdktn/provider-google'

dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource"></a>

```typescript
import { dataflowFlexTemplateJob } from '@cdktn/provider-google'

dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport"></a>

```typescript
import { dataflowFlexTemplateJob } from '@cdktn/provider-google'

dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataflowFlexTemplateJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataflowFlexTemplateJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataflowFlexTemplateJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataflowFlexTemplateJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperimentsInput">additionalExperimentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptionsInput">additionalPipelineOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithmInput">autoscalingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPathInput">containerSpecGcsPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExistsInput">createIgnoreAlreadyExistsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngineInput">enableStreamingEngineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineTypeInput">launcherMachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkersInput">maxWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkersInput">numWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDeleteInput">onDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImageInput">sdkContainerImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput">skipWaitOnJobTerminationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocationInput">stagingLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocationInput">tempLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMappingInput">transformNameMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperiments">additionalExperiments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptions">additionalPipelineOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithm">autoscalingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPath">containerSpecGcsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExists">createIgnoreAlreadyExists</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfiguration">ipConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineType">launcherMachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkers">numWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDelete">onDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImage">sdkContainerImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTermination">skipWaitOnJobTermination</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocation">stagingLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocation">tempLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMapping">transformNameMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `additionalExperimentsInput`<sup>Optional</sup> <a name="additionalExperimentsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperimentsInput"></a>

```typescript
public readonly additionalExperimentsInput: string[];
```

- *Type:* string[]

---

##### `additionalPipelineOptionsInput`<sup>Optional</sup> <a name="additionalPipelineOptionsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptionsInput"></a>

```typescript
public readonly additionalPipelineOptionsInput: string[];
```

- *Type:* string[]

---

##### `autoscalingAlgorithmInput`<sup>Optional</sup> <a name="autoscalingAlgorithmInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithmInput"></a>

```typescript
public readonly autoscalingAlgorithmInput: string;
```

- *Type:* string

---

##### `containerSpecGcsPathInput`<sup>Optional</sup> <a name="containerSpecGcsPathInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPathInput"></a>

```typescript
public readonly containerSpecGcsPathInput: string;
```

- *Type:* string

---

##### `createIgnoreAlreadyExistsInput`<sup>Optional</sup> <a name="createIgnoreAlreadyExistsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExistsInput"></a>

```typescript
public readonly createIgnoreAlreadyExistsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `enableStreamingEngineInput`<sup>Optional</sup> <a name="enableStreamingEngineInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngineInput"></a>

```typescript
public readonly enableStreamingEngineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfigurationInput"></a>

```typescript
public readonly ipConfigurationInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launcherMachineTypeInput`<sup>Optional</sup> <a name="launcherMachineTypeInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineTypeInput"></a>

```typescript
public readonly launcherMachineTypeInput: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `maxWorkersInput`<sup>Optional</sup> <a name="maxWorkersInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkersInput"></a>

```typescript
public readonly maxWorkersInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `numWorkersInput`<sup>Optional</sup> <a name="numWorkersInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkersInput"></a>

```typescript
public readonly numWorkersInput: number;
```

- *Type:* number

---

##### `onDeleteInput`<sup>Optional</sup> <a name="onDeleteInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDeleteInput"></a>

```typescript
public readonly onDeleteInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sdkContainerImageInput`<sup>Optional</sup> <a name="sdkContainerImageInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImageInput"></a>

```typescript
public readonly sdkContainerImageInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `skipWaitOnJobTerminationInput`<sup>Optional</sup> <a name="skipWaitOnJobTerminationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput"></a>

```typescript
public readonly skipWaitOnJobTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `stagingLocationInput`<sup>Optional</sup> <a name="stagingLocationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocationInput"></a>

```typescript
public readonly stagingLocationInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `tempLocationInput`<sup>Optional</sup> <a name="tempLocationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocationInput"></a>

```typescript
public readonly tempLocationInput: string;
```

- *Type:* string

---

##### `transformNameMappingInput`<sup>Optional</sup> <a name="transformNameMappingInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMappingInput"></a>

```typescript
public readonly transformNameMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `additionalExperiments`<sup>Required</sup> <a name="additionalExperiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperiments"></a>

```typescript
public readonly additionalExperiments: string[];
```

- *Type:* string[]

---

##### `additionalPipelineOptions`<sup>Required</sup> <a name="additionalPipelineOptions" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptions"></a>

```typescript
public readonly additionalPipelineOptions: string[];
```

- *Type:* string[]

---

##### `autoscalingAlgorithm`<sup>Required</sup> <a name="autoscalingAlgorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithm"></a>

```typescript
public readonly autoscalingAlgorithm: string;
```

- *Type:* string

---

##### `containerSpecGcsPath`<sup>Required</sup> <a name="containerSpecGcsPath" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPath"></a>

```typescript
public readonly containerSpecGcsPath: string;
```

- *Type:* string

---

##### `createIgnoreAlreadyExists`<sup>Required</sup> <a name="createIgnoreAlreadyExists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExists"></a>

```typescript
public readonly createIgnoreAlreadyExists: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `enableStreamingEngine`<sup>Required</sup> <a name="enableStreamingEngine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngine"></a>

```typescript
public readonly enableStreamingEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launcherMachineType`<sup>Required</sup> <a name="launcherMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineType"></a>

```typescript
public readonly launcherMachineType: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `maxWorkers`<sup>Required</sup> <a name="maxWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `numWorkers`<sup>Required</sup> <a name="numWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkers"></a>

```typescript
public readonly numWorkers: number;
```

- *Type:* number

---

##### `onDelete`<sup>Required</sup> <a name="onDelete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDelete"></a>

```typescript
public readonly onDelete: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sdkContainerImage`<sup>Required</sup> <a name="sdkContainerImage" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImage"></a>

```typescript
public readonly sdkContainerImage: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `skipWaitOnJobTermination`<sup>Required</sup> <a name="skipWaitOnJobTermination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTermination"></a>

```typescript
public readonly skipWaitOnJobTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `stagingLocation`<sup>Required</sup> <a name="stagingLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocation"></a>

```typescript
public readonly stagingLocation: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `tempLocation`<sup>Required</sup> <a name="tempLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocation"></a>

```typescript
public readonly tempLocation: string;
```

- *Type:* string

---

##### `transformNameMapping`<sup>Required</sup> <a name="transformNameMapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMapping"></a>

```typescript
public readonly transformNameMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowFlexTemplateJobConfig <a name="DataflowFlexTemplateJobConfig" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.Initializer"></a>

```typescript
import { dataflowFlexTemplateJob } from '@cdktn/provider-google'

const dataflowFlexTemplateJobConfig: dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.containerSpecGcsPath">containerSpecGcsPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#container_spec_gcs_path DataflowFlexTemplateJob#container_spec_gcs_path}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#name DataflowFlexTemplateJob#name}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalExperiments">additionalExperiments</a></code> | <code>string[]</code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalPipelineOptions">additionalPipelineOptions</a></code> | <code>string[]</code> | List of pipeline options that should be used by the job. An example value is ["numberOfWorkerHarnessThreads=20"]. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.autoscalingAlgorithm">autoscalingAlgorithm</a></code> | <code>string</code> | The algorithm to use for autoscaling. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.createIgnoreAlreadyExists">createIgnoreAlreadyExists</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, if a 409 AlreadyExists error is returned on create, the provider will ignore it and adopt the existing resource. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#id DataflowFlexTemplateJob#id}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.ipConfiguration">ipConfiguration</a></code> | <code>string</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User labels to be specified for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.launcherMachineType">launcherMachineType</a></code> | <code>string</code> | The machine type to use for launching the job. The default is n1-standard-1. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.machineType">machineType</a></code> | <code>string</code> | The machine type to use for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.network">network</a></code> | <code>string</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.numWorkers">numWorkers</a></code> | <code>number</code> | The initial number of Google Compute Engine instances for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.onDelete">onDelete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#on_delete DataflowFlexTemplateJob#on_delete}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#parameters DataflowFlexTemplateJob#parameters}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#project DataflowFlexTemplateJob#project}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.region">region</a></code> | <code>string</code> | The region in which the created job should run. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.sdkContainerImage">sdkContainerImage</a></code> | <code>string</code> | Docker registry location of container image to use for the 'worker harness. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination">skipWaitOnJobTermination</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.stagingLocation">stagingLocation</a></code> | <code>string</code> | The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.tempLocation">tempLocation</a></code> | <code>string</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.transformNameMapping">transformNameMapping</a></code> | <code>{[ key: string ]: string}</code> | Only applicable when updating a pipeline. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `containerSpecGcsPath`<sup>Required</sup> <a name="containerSpecGcsPath" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.containerSpecGcsPath"></a>

```typescript
public readonly containerSpecGcsPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#container_spec_gcs_path DataflowFlexTemplateJob#container_spec_gcs_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#name DataflowFlexTemplateJob#name}.

---

##### `additionalExperiments`<sup>Optional</sup> <a name="additionalExperiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalExperiments"></a>

```typescript
public readonly additionalExperiments: string[];
```

- *Type:* string[]

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#additional_experiments DataflowFlexTemplateJob#additional_experiments}

---

##### `additionalPipelineOptions`<sup>Optional</sup> <a name="additionalPipelineOptions" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalPipelineOptions"></a>

```typescript
public readonly additionalPipelineOptions: string[];
```

- *Type:* string[]

List of pipeline options that should be used by the job. An example value is ["numberOfWorkerHarnessThreads=20"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#additional_pipeline_options DataflowFlexTemplateJob#additional_pipeline_options}

---

##### `autoscalingAlgorithm`<sup>Optional</sup> <a name="autoscalingAlgorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.autoscalingAlgorithm"></a>

```typescript
public readonly autoscalingAlgorithm: string;
```

- *Type:* string

The algorithm to use for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#autoscaling_algorithm DataflowFlexTemplateJob#autoscaling_algorithm}

---

##### `createIgnoreAlreadyExists`<sup>Optional</sup> <a name="createIgnoreAlreadyExists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.createIgnoreAlreadyExists"></a>

```typescript
public readonly createIgnoreAlreadyExists: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, if a 409 AlreadyExists error is returned on create, the provider will ignore it and adopt the existing resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#create_ignore_already_exists DataflowFlexTemplateJob#create_ignore_already_exists}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#deletion_policy DataflowFlexTemplateJob#deletion_policy}

---

##### `enableStreamingEngine`<sup>Optional</sup> <a name="enableStreamingEngine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.enableStreamingEngine"></a>

```typescript
public readonly enableStreamingEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#enable_streaming_engine DataflowFlexTemplateJob#enable_streaming_engine}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#id DataflowFlexTemplateJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: string;
```

- *Type:* string

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#ip_configuration DataflowFlexTemplateJob#ip_configuration}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#kms_key_name DataflowFlexTemplateJob#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
				Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#labels DataflowFlexTemplateJob#labels}

---

##### `launcherMachineType`<sup>Optional</sup> <a name="launcherMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.launcherMachineType"></a>

```typescript
public readonly launcherMachineType: string;
```

- *Type:* string

The machine type to use for launching the job. The default is n1-standard-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#launcher_machine_type DataflowFlexTemplateJob#launcher_machine_type}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#machine_type DataflowFlexTemplateJob#machine_type}

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#max_workers DataflowFlexTemplateJob#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#network DataflowFlexTemplateJob#network}

---

##### `numWorkers`<sup>Optional</sup> <a name="numWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.numWorkers"></a>

```typescript
public readonly numWorkers: number;
```

- *Type:* number

The initial number of Google Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#num_workers DataflowFlexTemplateJob#num_workers}

---

##### `onDelete`<sup>Optional</sup> <a name="onDelete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.onDelete"></a>

```typescript
public readonly onDelete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#on_delete DataflowFlexTemplateJob#on_delete}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#parameters DataflowFlexTemplateJob#parameters}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#project DataflowFlexTemplateJob#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#region DataflowFlexTemplateJob#region}

---

##### `sdkContainerImage`<sup>Optional</sup> <a name="sdkContainerImage" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.sdkContainerImage"></a>

```typescript
public readonly sdkContainerImage: string;
```

- *Type:* string

Docker registry location of container image to use for the 'worker harness.

Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#sdk_container_image DataflowFlexTemplateJob#sdk_container_image}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#service_account_email DataflowFlexTemplateJob#service_account_email}

---

##### `skipWaitOnJobTermination`<sup>Optional</sup> <a name="skipWaitOnJobTermination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination"></a>

```typescript
public readonly skipWaitOnJobTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#skip_wait_on_job_termination DataflowFlexTemplateJob#skip_wait_on_job_termination}

---

##### `stagingLocation`<sup>Optional</sup> <a name="stagingLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.stagingLocation"></a>

```typescript
public readonly stagingLocation: string;
```

- *Type:* string

The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#staging_location DataflowFlexTemplateJob#staging_location}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#subnetwork DataflowFlexTemplateJob#subnetwork}

---

##### `tempLocation`<sup>Optional</sup> <a name="tempLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.tempLocation"></a>

```typescript
public readonly tempLocation: string;
```

- *Type:* string

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#temp_location DataflowFlexTemplateJob#temp_location}

---

##### `transformNameMapping`<sup>Optional</sup> <a name="transformNameMapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.transformNameMapping"></a>

```typescript
public readonly transformNameMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#transform_name_mapping DataflowFlexTemplateJob#transform_name_mapping}

---



