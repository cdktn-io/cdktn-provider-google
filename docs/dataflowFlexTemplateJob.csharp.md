# `dataflowFlexTemplateJob` Submodule <a name="`dataflowFlexTemplateJob` Submodule" id="@cdktn/provider-google.dataflowFlexTemplateJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowFlexTemplateJob <a name="DataflowFlexTemplateJob" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job google_dataflow_flex_template_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataflowFlexTemplateJob(Construct Scope, string Id, DataflowFlexTemplateJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig">DataflowFlexTemplateJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig">DataflowFlexTemplateJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalExperiments">ResetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalPipelineOptions">ResetAdditionalPipelineOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAutoscalingAlgorithm">ResetAutoscalingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetCreateIgnoreAlreadyExists">ResetCreateIgnoreAlreadyExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetEnableStreamingEngine">ResetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetIpConfiguration">ResetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLauncherMachineType">ResetLauncherMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOnDelete">ResetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSdkContainerImage">ResetSdkContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSkipWaitOnJobTermination">ResetSkipWaitOnJobTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetStagingLocation">ResetStagingLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTempLocation">ResetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTransformNameMapping">ResetTransformNameMapping</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAdditionalExperiments` <a name="ResetAdditionalExperiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalExperiments"></a>

```csharp
private void ResetAdditionalExperiments()
```

##### `ResetAdditionalPipelineOptions` <a name="ResetAdditionalPipelineOptions" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAdditionalPipelineOptions"></a>

```csharp
private void ResetAdditionalPipelineOptions()
```

##### `ResetAutoscalingAlgorithm` <a name="ResetAutoscalingAlgorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetAutoscalingAlgorithm"></a>

```csharp
private void ResetAutoscalingAlgorithm()
```

##### `ResetCreateIgnoreAlreadyExists` <a name="ResetCreateIgnoreAlreadyExists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetCreateIgnoreAlreadyExists"></a>

```csharp
private void ResetCreateIgnoreAlreadyExists()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEnableStreamingEngine` <a name="ResetEnableStreamingEngine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetEnableStreamingEngine"></a>

```csharp
private void ResetEnableStreamingEngine()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpConfiguration` <a name="ResetIpConfiguration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetIpConfiguration"></a>

```csharp
private void ResetIpConfiguration()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLauncherMachineType` <a name="ResetLauncherMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetLauncherMachineType"></a>

```csharp
private void ResetLauncherMachineType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetMaxWorkers"></a>

```csharp
private void ResetMaxWorkers()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetNumWorkers"></a>

```csharp
private void ResetNumWorkers()
```

##### `ResetOnDelete` <a name="ResetOnDelete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetOnDelete"></a>

```csharp
private void ResetOnDelete()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSdkContainerImage` <a name="ResetSdkContainerImage" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSdkContainerImage"></a>

```csharp
private void ResetSdkContainerImage()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetServiceAccountEmail"></a>

```csharp
private void ResetServiceAccountEmail()
```

##### `ResetSkipWaitOnJobTermination` <a name="ResetSkipWaitOnJobTermination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSkipWaitOnJobTermination"></a>

```csharp
private void ResetSkipWaitOnJobTermination()
```

##### `ResetStagingLocation` <a name="ResetStagingLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetStagingLocation"></a>

```csharp
private void ResetStagingLocation()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```

##### `ResetTempLocation` <a name="ResetTempLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTempLocation"></a>

```csharp
private void ResetTempLocation()
```

##### `ResetTransformNameMapping` <a name="ResetTransformNameMapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.resetTransformNameMapping"></a>

```csharp
private void ResetTransformNameMapping()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataflowFlexTemplateJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataflowFlexTemplateJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataflowFlexTemplateJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataflowFlexTemplateJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataflowFlexTemplateJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataflowFlexTemplateJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataflowFlexTemplateJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataflowFlexTemplateJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataflowFlexTemplateJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperimentsInput">AdditionalExperimentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptionsInput">AdditionalPipelineOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithmInput">AutoscalingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPathInput">ContainerSpecGcsPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExistsInput">CreateIgnoreAlreadyExistsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngineInput">EnableStreamingEngineInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfigurationInput">IpConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineTypeInput">LauncherMachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkersInput">NumWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDeleteInput">OnDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImageInput">SdkContainerImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput">SkipWaitOnJobTerminationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocationInput">StagingLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocationInput">TempLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMappingInput">TransformNameMappingInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperiments">AdditionalExperiments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptions">AdditionalPipelineOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithm">AutoscalingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPath">ContainerSpecGcsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExists">CreateIgnoreAlreadyExists</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfiguration">IpConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineType">LauncherMachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkers">NumWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDelete">OnDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImage">SdkContainerImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTermination">SkipWaitOnJobTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocation">StagingLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocation">TempLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMapping">TransformNameMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AdditionalExperimentsInput`<sup>Optional</sup> <a name="AdditionalExperimentsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperimentsInput"></a>

```csharp
public string[] AdditionalExperimentsInput { get; }
```

- *Type:* string[]

---

##### `AdditionalPipelineOptionsInput`<sup>Optional</sup> <a name="AdditionalPipelineOptionsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptionsInput"></a>

```csharp
public string[] AdditionalPipelineOptionsInput { get; }
```

- *Type:* string[]

---

##### `AutoscalingAlgorithmInput`<sup>Optional</sup> <a name="AutoscalingAlgorithmInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithmInput"></a>

```csharp
public string AutoscalingAlgorithmInput { get; }
```

- *Type:* string

---

##### `ContainerSpecGcsPathInput`<sup>Optional</sup> <a name="ContainerSpecGcsPathInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPathInput"></a>

```csharp
public string ContainerSpecGcsPathInput { get; }
```

- *Type:* string

---

##### `CreateIgnoreAlreadyExistsInput`<sup>Optional</sup> <a name="CreateIgnoreAlreadyExistsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExistsInput"></a>

```csharp
public bool|IResolvable CreateIgnoreAlreadyExistsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `EnableStreamingEngineInput`<sup>Optional</sup> <a name="EnableStreamingEngineInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngineInput"></a>

```csharp
public bool|IResolvable EnableStreamingEngineInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpConfigurationInput`<sup>Optional</sup> <a name="IpConfigurationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfigurationInput"></a>

```csharp
public string IpConfigurationInput { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LauncherMachineTypeInput`<sup>Optional</sup> <a name="LauncherMachineTypeInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineTypeInput"></a>

```csharp
public string LauncherMachineTypeInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkersInput"></a>

```csharp
public double MaxWorkersInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkersInput"></a>

```csharp
public double NumWorkersInput { get; }
```

- *Type:* double

---

##### `OnDeleteInput`<sup>Optional</sup> <a name="OnDeleteInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDeleteInput"></a>

```csharp
public string OnDeleteInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SdkContainerImageInput`<sup>Optional</sup> <a name="SdkContainerImageInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImageInput"></a>

```csharp
public string SdkContainerImageInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `SkipWaitOnJobTerminationInput`<sup>Optional</sup> <a name="SkipWaitOnJobTerminationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput"></a>

```csharp
public bool|IResolvable SkipWaitOnJobTerminationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StagingLocationInput`<sup>Optional</sup> <a name="StagingLocationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocationInput"></a>

```csharp
public string StagingLocationInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `TempLocationInput`<sup>Optional</sup> <a name="TempLocationInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocationInput"></a>

```csharp
public string TempLocationInput { get; }
```

- *Type:* string

---

##### `TransformNameMappingInput`<sup>Optional</sup> <a name="TransformNameMappingInput" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMappingInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TransformNameMappingInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AdditionalExperiments`<sup>Required</sup> <a name="AdditionalExperiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalExperiments"></a>

```csharp
public string[] AdditionalExperiments { get; }
```

- *Type:* string[]

---

##### `AdditionalPipelineOptions`<sup>Required</sup> <a name="AdditionalPipelineOptions" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.additionalPipelineOptions"></a>

```csharp
public string[] AdditionalPipelineOptions { get; }
```

- *Type:* string[]

---

##### `AutoscalingAlgorithm`<sup>Required</sup> <a name="AutoscalingAlgorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.autoscalingAlgorithm"></a>

```csharp
public string AutoscalingAlgorithm { get; }
```

- *Type:* string

---

##### `ContainerSpecGcsPath`<sup>Required</sup> <a name="ContainerSpecGcsPath" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.containerSpecGcsPath"></a>

```csharp
public string ContainerSpecGcsPath { get; }
```

- *Type:* string

---

##### `CreateIgnoreAlreadyExists`<sup>Required</sup> <a name="CreateIgnoreAlreadyExists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.createIgnoreAlreadyExists"></a>

```csharp
public bool|IResolvable CreateIgnoreAlreadyExists { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `EnableStreamingEngine`<sup>Required</sup> <a name="EnableStreamingEngine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.enableStreamingEngine"></a>

```csharp
public bool|IResolvable EnableStreamingEngine { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.ipConfiguration"></a>

```csharp
public string IpConfiguration { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LauncherMachineType`<sup>Required</sup> <a name="LauncherMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.launcherMachineType"></a>

```csharp
public string LauncherMachineType { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.numWorkers"></a>

```csharp
public double NumWorkers { get; }
```

- *Type:* double

---

##### `OnDelete`<sup>Required</sup> <a name="OnDelete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.onDelete"></a>

```csharp
public string OnDelete { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SdkContainerImage`<sup>Required</sup> <a name="SdkContainerImage" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.sdkContainerImage"></a>

```csharp
public string SdkContainerImage { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `SkipWaitOnJobTermination`<sup>Required</sup> <a name="SkipWaitOnJobTermination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.skipWaitOnJobTermination"></a>

```csharp
public bool|IResolvable SkipWaitOnJobTermination { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StagingLocation`<sup>Required</sup> <a name="StagingLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.stagingLocation"></a>

```csharp
public string StagingLocation { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `TempLocation`<sup>Required</sup> <a name="TempLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tempLocation"></a>

```csharp
public string TempLocation { get; }
```

- *Type:* string

---

##### `TransformNameMapping`<sup>Required</sup> <a name="TransformNameMapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.transformNameMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TransformNameMapping { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowFlexTemplateJobConfig <a name="DataflowFlexTemplateJobConfig" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataflowFlexTemplateJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ContainerSpecGcsPath,
    string Name,
    string[] AdditionalExperiments = null,
    string[] AdditionalPipelineOptions = null,
    string AutoscalingAlgorithm = null,
    bool|IResolvable CreateIgnoreAlreadyExists = null,
    string DeletionPolicy = null,
    bool|IResolvable EnableStreamingEngine = null,
    string Id = null,
    string IpConfiguration = null,
    string KmsKeyName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string LauncherMachineType = null,
    string MachineType = null,
    double MaxWorkers = null,
    string Network = null,
    double NumWorkers = null,
    string OnDelete = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string Project = null,
    string Region = null,
    string SdkContainerImage = null,
    string ServiceAccountEmail = null,
    bool|IResolvable SkipWaitOnJobTermination = null,
    string StagingLocation = null,
    string Subnetwork = null,
    string TempLocation = null,
    System.Collections.Generic.IDictionary<string, string> TransformNameMapping = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.containerSpecGcsPath">ContainerSpecGcsPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#container_spec_gcs_path DataflowFlexTemplateJob#container_spec_gcs_path}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#name DataflowFlexTemplateJob#name}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalExperiments">AdditionalExperiments</a></code> | <code>string[]</code> | List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"]. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalPipelineOptions">AdditionalPipelineOptions</a></code> | <code>string[]</code> | List of pipeline options that should be used by the job. An example value is ["numberOfWorkerHarnessThreads=20"]. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.autoscalingAlgorithm">AutoscalingAlgorithm</a></code> | <code>string</code> | The algorithm to use for autoscaling. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.createIgnoreAlreadyExists">CreateIgnoreAlreadyExists</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, if a 409 AlreadyExists error is returned on create, the provider will ignore it and adopt the existing resource. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.enableStreamingEngine">EnableStreamingEngine</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if the job should use the streaming engine feature. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#id DataflowFlexTemplateJob#id}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.ipConfiguration">IpConfiguration</a></code> | <code>string</code> | The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User labels to be specified for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.launcherMachineType">LauncherMachineType</a></code> | <code>string</code> | The machine type to use for launching the job. The default is n1-standard-1. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.machineType">MachineType</a></code> | <code>string</code> | The machine type to use for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.network">Network</a></code> | <code>string</code> | The network to which VMs will be assigned. If it is not provided, "default" will be used. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.numWorkers">NumWorkers</a></code> | <code>double</code> | The initial number of Google Compute Engine instances for the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.onDelete">OnDelete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#on_delete DataflowFlexTemplateJob#on_delete}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#parameters DataflowFlexTemplateJob#parameters}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#project DataflowFlexTemplateJob#project}. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.region">Region</a></code> | <code>string</code> | The region in which the created job should run. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.sdkContainerImage">SdkContainerImage</a></code> | <code>string</code> | Docker registry location of container image to use for the 'worker harness. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | The Service Account email used to create the job. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination">SkipWaitOnJobTermination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.stagingLocation">StagingLocation</a></code> | <code>string</code> | The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.subnetwork">Subnetwork</a></code> | <code>string</code> | The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.tempLocation">TempLocation</a></code> | <code>string</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.transformNameMapping">TransformNameMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Only applicable when updating a pipeline. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ContainerSpecGcsPath`<sup>Required</sup> <a name="ContainerSpecGcsPath" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.containerSpecGcsPath"></a>

```csharp
public string ContainerSpecGcsPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#container_spec_gcs_path DataflowFlexTemplateJob#container_spec_gcs_path}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#name DataflowFlexTemplateJob#name}.

---

##### `AdditionalExperiments`<sup>Optional</sup> <a name="AdditionalExperiments" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalExperiments"></a>

```csharp
public string[] AdditionalExperiments { get; set; }
```

- *Type:* string[]

List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#additional_experiments DataflowFlexTemplateJob#additional_experiments}

---

##### `AdditionalPipelineOptions`<sup>Optional</sup> <a name="AdditionalPipelineOptions" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.additionalPipelineOptions"></a>

```csharp
public string[] AdditionalPipelineOptions { get; set; }
```

- *Type:* string[]

List of pipeline options that should be used by the job. An example value is ["numberOfWorkerHarnessThreads=20"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#additional_pipeline_options DataflowFlexTemplateJob#additional_pipeline_options}

---

##### `AutoscalingAlgorithm`<sup>Optional</sup> <a name="AutoscalingAlgorithm" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.autoscalingAlgorithm"></a>

```csharp
public string AutoscalingAlgorithm { get; set; }
```

- *Type:* string

The algorithm to use for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#autoscaling_algorithm DataflowFlexTemplateJob#autoscaling_algorithm}

---

##### `CreateIgnoreAlreadyExists`<sup>Optional</sup> <a name="CreateIgnoreAlreadyExists" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.createIgnoreAlreadyExists"></a>

```csharp
public bool|IResolvable CreateIgnoreAlreadyExists { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, if a 409 AlreadyExists error is returned on create, the provider will ignore it and adopt the existing resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#create_ignore_already_exists DataflowFlexTemplateJob#create_ignore_already_exists}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
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

##### `EnableStreamingEngine`<sup>Optional</sup> <a name="EnableStreamingEngine" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.enableStreamingEngine"></a>

```csharp
public bool|IResolvable EnableStreamingEngine { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if the job should use the streaming engine feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#enable_streaming_engine DataflowFlexTemplateJob#enable_streaming_engine}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#id DataflowFlexTemplateJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpConfiguration`<sup>Optional</sup> <a name="IpConfiguration" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.ipConfiguration"></a>

```csharp
public string IpConfiguration { get; set; }
```

- *Type:* string

The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#ip_configuration DataflowFlexTemplateJob#ip_configuration}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#kms_key_name DataflowFlexTemplateJob#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#labels DataflowFlexTemplateJob#labels}

---

##### `LauncherMachineType`<sup>Optional</sup> <a name="LauncherMachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.launcherMachineType"></a>

```csharp
public string LauncherMachineType { get; set; }
```

- *Type:* string

The machine type to use for launching the job. The default is n1-standard-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#launcher_machine_type DataflowFlexTemplateJob#launcher_machine_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The machine type to use for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#machine_type DataflowFlexTemplateJob#machine_type}

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; set; }
```

- *Type:* double

The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#max_workers DataflowFlexTemplateJob#max_workers}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The network to which VMs will be assigned. If it is not provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#network DataflowFlexTemplateJob#network}

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.numWorkers"></a>

```csharp
public double NumWorkers { get; set; }
```

- *Type:* double

The initial number of Google Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#num_workers DataflowFlexTemplateJob#num_workers}

---

##### `OnDelete`<sup>Optional</sup> <a name="OnDelete" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.onDelete"></a>

```csharp
public string OnDelete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#on_delete DataflowFlexTemplateJob#on_delete}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#parameters DataflowFlexTemplateJob#parameters}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#project DataflowFlexTemplateJob#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#region DataflowFlexTemplateJob#region}

---

##### `SdkContainerImage`<sup>Optional</sup> <a name="SdkContainerImage" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.sdkContainerImage"></a>

```csharp
public string SdkContainerImage { get; set; }
```

- *Type:* string

Docker registry location of container image to use for the 'worker harness.

Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#sdk_container_image DataflowFlexTemplateJob#sdk_container_image}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

The Service Account email used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#service_account_email DataflowFlexTemplateJob#service_account_email}

---

##### `SkipWaitOnJobTermination`<sup>Optional</sup> <a name="SkipWaitOnJobTermination" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination"></a>

```csharp
public bool|IResolvable SkipWaitOnJobTermination { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#skip_wait_on_job_termination DataflowFlexTemplateJob#skip_wait_on_job_termination}

---

##### `StagingLocation`<sup>Optional</sup> <a name="StagingLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.stagingLocation"></a>

```csharp
public string StagingLocation { get; set; }
```

- *Type:* string

The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#staging_location DataflowFlexTemplateJob#staging_location}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#subnetwork DataflowFlexTemplateJob#subnetwork}

---

##### `TempLocation`<sup>Optional</sup> <a name="TempLocation" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.tempLocation"></a>

```csharp
public string TempLocation { get; set; }
```

- *Type:* string

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#temp_location DataflowFlexTemplateJob#temp_location}

---

##### `TransformNameMapping`<sup>Optional</sup> <a name="TransformNameMapping" id="@cdktn/provider-google.dataflowFlexTemplateJob.DataflowFlexTemplateJobConfig.property.transformNameMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TransformNameMapping { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Only applicable when updating a pipeline.

Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/dataflow_flex_template_job#transform_name_mapping DataflowFlexTemplateJob#transform_name_mapping}

---



