# `dataprocBatch` Submodule <a name="`dataprocBatch` Submodule" id="@cdktn/provider-google.dataprocBatch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocBatch <a name="DataprocBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch google_dataproc_batch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatch(Construct Scope, string Id, DataprocBatchConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig">DataprocBatchConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig">DataprocBatchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.putEnvironmentConfig">PutEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.putPysparkBatch">PutPysparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.putSparkBatch">PutSparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.putSparkRBatch">PutSparkRBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.putSparkSqlBatch">PutSparkSqlBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.resetBatchId">ResetBatchId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.resetEnvironmentConfig">ResetEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.resetPysparkBatch">ResetPysparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.resetRuntimeConfig">ResetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.resetSparkBatch">ResetSparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.resetSparkRBatch">ResetSparkRBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.resetSparkSqlBatch">ResetSparkSqlBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnvironmentConfig` <a name="PutEnvironmentConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.putEnvironmentConfig"></a>

```csharp
private void PutEnvironmentConfig(DataprocBatchEnvironmentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.putEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a>

---

##### `PutPysparkBatch` <a name="PutPysparkBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.putPysparkBatch"></a>

```csharp
private void PutPysparkBatch(DataprocBatchPysparkBatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.putPysparkBatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a>

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.putRuntimeConfig"></a>

```csharp
private void PutRuntimeConfig(DataprocBatchRuntimeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a>

---

##### `PutSparkBatch` <a name="PutSparkBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.putSparkBatch"></a>

```csharp
private void PutSparkBatch(DataprocBatchSparkBatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.putSparkBatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a>

---

##### `PutSparkRBatch` <a name="PutSparkRBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.putSparkRBatch"></a>

```csharp
private void PutSparkRBatch(DataprocBatchSparkRBatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.putSparkRBatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a>

---

##### `PutSparkSqlBatch` <a name="PutSparkSqlBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.putSparkSqlBatch"></a>

```csharp
private void PutSparkSqlBatch(DataprocBatchSparkSqlBatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.putSparkSqlBatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.putTimeouts"></a>

```csharp
private void PutTimeouts(DataprocBatchTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a>

---

##### `ResetBatchId` <a name="ResetBatchId" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.resetBatchId"></a>

```csharp
private void ResetBatchId()
```

##### `ResetEnvironmentConfig` <a name="ResetEnvironmentConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.resetEnvironmentConfig"></a>

```csharp
private void ResetEnvironmentConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPysparkBatch` <a name="ResetPysparkBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.resetPysparkBatch"></a>

```csharp
private void ResetPysparkBatch()
```

##### `ResetRuntimeConfig` <a name="ResetRuntimeConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.resetRuntimeConfig"></a>

```csharp
private void ResetRuntimeConfig()
```

##### `ResetSparkBatch` <a name="ResetSparkBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.resetSparkBatch"></a>

```csharp
private void ResetSparkBatch()
```

##### `ResetSparkRBatch` <a name="ResetSparkRBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.resetSparkRBatch"></a>

```csharp
private void ResetSparkRBatch()
```

##### `ResetSparkSqlBatch` <a name="ResetSparkSqlBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.resetSparkSqlBatch"></a>

```csharp
private void ResetSparkSqlBatch()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataprocBatch resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataprocBatch.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataprocBatch.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataprocBatch.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataprocBatch.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataprocBatch resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataprocBatch to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataprocBatch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataprocBatch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.environmentConfig">EnvironmentConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference">DataprocBatchEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.pysparkBatch">PysparkBatch</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference">DataprocBatchPysparkBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference">DataprocBatchRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.runtimeInfo">RuntimeInfo</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList">DataprocBatchRuntimeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.sparkBatch">SparkBatch</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference">DataprocBatchSparkBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.sparkRBatch">SparkRBatch</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference">DataprocBatchSparkRBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.sparkSqlBatch">SparkSqlBatch</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference">DataprocBatchSparkSqlBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.stateHistory">StateHistory</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList">DataprocBatchStateHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.stateTime">StateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference">DataprocBatchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.batchIdInput">BatchIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.environmentConfigInput">EnvironmentConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.pysparkBatchInput">PysparkBatchInput</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.sparkBatchInput">SparkBatchInput</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.sparkRBatchInput">SparkRBatchInput</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.sparkSqlBatchInput">SparkSqlBatchInput</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.batchId">BatchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EnvironmentConfig`<sup>Required</sup> <a name="EnvironmentConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.environmentConfig"></a>

```csharp
public DataprocBatchEnvironmentConfigOutputReference EnvironmentConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference">DataprocBatchEnvironmentConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `PysparkBatch`<sup>Required</sup> <a name="PysparkBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.pysparkBatch"></a>

```csharp
public DataprocBatchPysparkBatchOutputReference PysparkBatch { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference">DataprocBatchPysparkBatchOutputReference</a>

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.runtimeConfig"></a>

```csharp
public DataprocBatchRuntimeConfigOutputReference RuntimeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference">DataprocBatchRuntimeConfigOutputReference</a>

---

##### `RuntimeInfo`<sup>Required</sup> <a name="RuntimeInfo" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.runtimeInfo"></a>

```csharp
public DataprocBatchRuntimeInfoList RuntimeInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList">DataprocBatchRuntimeInfoList</a>

---

##### `SparkBatch`<sup>Required</sup> <a name="SparkBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.sparkBatch"></a>

```csharp
public DataprocBatchSparkBatchOutputReference SparkBatch { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference">DataprocBatchSparkBatchOutputReference</a>

---

##### `SparkRBatch`<sup>Required</sup> <a name="SparkRBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.sparkRBatch"></a>

```csharp
public DataprocBatchSparkRBatchOutputReference SparkRBatch { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference">DataprocBatchSparkRBatchOutputReference</a>

---

##### `SparkSqlBatch`<sup>Required</sup> <a name="SparkSqlBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.sparkSqlBatch"></a>

```csharp
public DataprocBatchSparkSqlBatchOutputReference SparkSqlBatch { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference">DataprocBatchSparkSqlBatchOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateHistory`<sup>Required</sup> <a name="StateHistory" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.stateHistory"></a>

```csharp
public DataprocBatchStateHistoryList StateHistory { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList">DataprocBatchStateHistoryList</a>

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `StateTime`<sup>Required</sup> <a name="StateTime" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.stateTime"></a>

```csharp
public string StateTime { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.timeouts"></a>

```csharp
public DataprocBatchTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference">DataprocBatchTimeoutsOutputReference</a>

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `BatchIdInput`<sup>Optional</sup> <a name="BatchIdInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.batchIdInput"></a>

```csharp
public string BatchIdInput { get; }
```

- *Type:* string

---

##### `EnvironmentConfigInput`<sup>Optional</sup> <a name="EnvironmentConfigInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.environmentConfigInput"></a>

```csharp
public DataprocBatchEnvironmentConfig EnvironmentConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PysparkBatchInput`<sup>Optional</sup> <a name="PysparkBatchInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.pysparkBatchInput"></a>

```csharp
public DataprocBatchPysparkBatch PysparkBatchInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a>

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.runtimeConfigInput"></a>

```csharp
public DataprocBatchRuntimeConfig RuntimeConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a>

---

##### `SparkBatchInput`<sup>Optional</sup> <a name="SparkBatchInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.sparkBatchInput"></a>

```csharp
public DataprocBatchSparkBatch SparkBatchInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a>

---

##### `SparkRBatchInput`<sup>Optional</sup> <a name="SparkRBatchInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.sparkRBatchInput"></a>

```csharp
public DataprocBatchSparkRBatch SparkRBatchInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a>

---

##### `SparkSqlBatchInput`<sup>Optional</sup> <a name="SparkSqlBatchInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.sparkSqlBatchInput"></a>

```csharp
public DataprocBatchSparkSqlBatch SparkSqlBatchInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.timeoutsInput"></a>

```csharp
public IResolvable|DataprocBatchTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a>

---

##### `BatchId`<sup>Required</sup> <a name="BatchId" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.batchId"></a>

```csharp
public string BatchId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatch.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataprocBatch.DataprocBatch.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocBatchConfig <a name="DataprocBatchConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BatchId = null,
    DataprocBatchEnvironmentConfig EnvironmentConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    DataprocBatchPysparkBatch PysparkBatch = null,
    DataprocBatchRuntimeConfig RuntimeConfig = null,
    DataprocBatchSparkBatch SparkBatch = null,
    DataprocBatchSparkRBatch SparkRBatch = null,
    DataprocBatchSparkSqlBatch SparkSqlBatch = null,
    DataprocBatchTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.batchId">BatchId</a></code> | <code>string</code> | The ID to use for the batch, which will become the final component of the batch's resource name. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.environmentConfig">EnvironmentConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#id DataprocBatch#id}. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels to associate with this batch. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.location">Location</a></code> | <code>string</code> | The location in which the batch will be created in. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#project DataprocBatch#project}. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.pysparkBatch">PysparkBatch</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a></code> | pyspark_batch block. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkBatch">SparkBatch</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a></code> | spark_batch block. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkRBatch">SparkRBatch</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a></code> | spark_r_batch block. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkSqlBatch">SparkSqlBatch</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a></code> | spark_sql_batch block. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BatchId`<sup>Optional</sup> <a name="BatchId" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.batchId"></a>

```csharp
public string BatchId { get; set; }
```

- *Type:* string

The ID to use for the batch, which will become the final component of the batch's resource name.

This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#batch_id DataprocBatch#batch_id}

---

##### `EnvironmentConfig`<sup>Optional</sup> <a name="EnvironmentConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.environmentConfig"></a>

```csharp
public DataprocBatchEnvironmentConfig EnvironmentConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#environment_config DataprocBatch#environment_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#id DataprocBatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels to associate with this batch.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#labels DataprocBatch#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location in which the batch will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#location DataprocBatch#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#project DataprocBatch#project}.

---

##### `PysparkBatch`<sup>Optional</sup> <a name="PysparkBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.pysparkBatch"></a>

```csharp
public DataprocBatchPysparkBatch PysparkBatch { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a>

pyspark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#pyspark_batch DataprocBatch#pyspark_batch}

---

##### `RuntimeConfig`<sup>Optional</sup> <a name="RuntimeConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.runtimeConfig"></a>

```csharp
public DataprocBatchRuntimeConfig RuntimeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#runtime_config DataprocBatch#runtime_config}

---

##### `SparkBatch`<sup>Optional</sup> <a name="SparkBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkBatch"></a>

```csharp
public DataprocBatchSparkBatch SparkBatch { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a>

spark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#spark_batch DataprocBatch#spark_batch}

---

##### `SparkRBatch`<sup>Optional</sup> <a name="SparkRBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkRBatch"></a>

```csharp
public DataprocBatchSparkRBatch SparkRBatch { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a>

spark_r_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#spark_r_batch DataprocBatch#spark_r_batch}

---

##### `SparkSqlBatch`<sup>Optional</sup> <a name="SparkSqlBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkSqlBatch"></a>

```csharp
public DataprocBatchSparkSqlBatch SparkSqlBatch { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a>

spark_sql_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#spark_sql_batch DataprocBatch#spark_sql_batch}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataprocBatch.DataprocBatchConfig.property.timeouts"></a>

```csharp
public DataprocBatchTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#timeouts DataprocBatch#timeouts}

---

### DataprocBatchEnvironmentConfig <a name="DataprocBatchEnvironmentConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchEnvironmentConfig {
    DataprocBatchEnvironmentConfigExecutionConfig ExecutionConfig = null,
    DataprocBatchEnvironmentConfigPeripheralsConfig PeripheralsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.property.executionConfig">ExecutionConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a></code> | execution_config block. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.property.peripheralsConfig">PeripheralsConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | peripherals_config block. |

---

##### `ExecutionConfig`<sup>Optional</sup> <a name="ExecutionConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.property.executionConfig"></a>

```csharp
public DataprocBatchEnvironmentConfigExecutionConfig ExecutionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#execution_config DataprocBatch#execution_config}

---

##### `PeripheralsConfig`<sup>Optional</sup> <a name="PeripheralsConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.property.peripheralsConfig"></a>

```csharp
public DataprocBatchEnvironmentConfigPeripheralsConfig PeripheralsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#peripherals_config DataprocBatch#peripherals_config}

---

### DataprocBatchEnvironmentConfigExecutionConfig <a name="DataprocBatchEnvironmentConfigExecutionConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchEnvironmentConfigExecutionConfig {
    DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig AuthenticationConfig = null,
    string KmsKey = null,
    string[] NetworkTags = null,
    string NetworkUri = null,
    string ServiceAccount = null,
    string StagingBucket = null,
    string SubnetworkUri = null,
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.authenticationConfig">AuthenticationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig">DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig</a></code> | authentication_config block. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | The Cloud KMS key to use for encryption. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | Tags used for network traffic control. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.networkUri">NetworkUri</a></code> | <code>string</code> | Network configuration for workload execution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Service account that used to execute workload. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.stagingBucket">StagingBucket</a></code> | <code>string</code> | A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.subnetworkUri">SubnetworkUri</a></code> | <code>string</code> | Subnetwork configuration for workload execution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.ttl">Ttl</a></code> | <code>string</code> | The duration after which the workload will be terminated. |

---

##### `AuthenticationConfig`<sup>Optional</sup> <a name="AuthenticationConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.authenticationConfig"></a>

```csharp
public DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig AuthenticationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig">DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig</a>

authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#authentication_config DataprocBatch#authentication_config}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#kms_key DataprocBatch#kms_key}

---

##### `NetworkTags`<sup>Optional</sup> <a name="NetworkTags" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; set; }
```

- *Type:* string[]

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#network_tags DataprocBatch#network_tags}

---

##### `NetworkUri`<sup>Optional</sup> <a name="NetworkUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.networkUri"></a>

```csharp
public string NetworkUri { get; set; }
```

- *Type:* string

Network configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#network_uri DataprocBatch#network_uri}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#service_account DataprocBatch#service_account}

---

##### `StagingBucket`<sup>Optional</sup> <a name="StagingBucket" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.stagingBucket"></a>

```csharp
public string StagingBucket { get; set; }
```

- *Type:* string

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#staging_bucket DataprocBatch#staging_bucket}

---

##### `SubnetworkUri`<sup>Optional</sup> <a name="SubnetworkUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.subnetworkUri"></a>

```csharp
public string SubnetworkUri { get; set; }
```

- *Type:* string

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#subnetwork_uri DataprocBatch#subnetwork_uri}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#ttl DataprocBatch#ttl}

---

### DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig <a name="DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig {
    string UserWorkloadAuthenticationType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig.property.userWorkloadAuthenticationType">UserWorkloadAuthenticationType</a></code> | <code>string</code> | Authentication type for the user workload running in containers. Possible values: ["SERVICE_ACCOUNT", "END_USER_CREDENTIALS"]. |

---

##### `UserWorkloadAuthenticationType`<sup>Optional</sup> <a name="UserWorkloadAuthenticationType" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig.property.userWorkloadAuthenticationType"></a>

```csharp
public string UserWorkloadAuthenticationType { get; set; }
```

- *Type:* string

Authentication type for the user workload running in containers. Possible values: ["SERVICE_ACCOUNT", "END_USER_CREDENTIALS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#user_workload_authentication_type DataprocBatch#user_workload_authentication_type}

---

### DataprocBatchEnvironmentConfigPeripheralsConfig <a name="DataprocBatchEnvironmentConfigPeripheralsConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchEnvironmentConfigPeripheralsConfig {
    string MetastoreService = null,
    DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig SparkHistoryServerConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.property.metastoreService">MetastoreService</a></code> | <code>string</code> | Resource name of an existing Dataproc Metastore service. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig">SparkHistoryServerConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `MetastoreService`<sup>Optional</sup> <a name="MetastoreService" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.property.metastoreService"></a>

```csharp
public string MetastoreService { get; set; }
```

- *Type:* string

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#metastore_service DataprocBatch#metastore_service}

---

##### `SparkHistoryServerConfig`<sup>Optional</sup> <a name="SparkHistoryServerConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig"></a>

```csharp
public DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig SparkHistoryServerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#spark_history_server_config DataprocBatch#spark_history_server_config}

---

### DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig <a name="DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig {
    string DataprocCluster = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster">DataprocCluster</a></code> | <code>string</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. |

---

##### `DataprocCluster`<sup>Optional</sup> <a name="DataprocCluster" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster"></a>

```csharp
public string DataprocCluster { get; set; }
```

- *Type:* string

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#dataproc_cluster DataprocBatch#dataproc_cluster}

---

### DataprocBatchPysparkBatch <a name="DataprocBatchPysparkBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchPysparkBatch {
    string[] ArchiveUris = null,
    string[] Args = null,
    string[] FileUris = null,
    string[] JarFileUris = null,
    string MainPythonFileUri = null,
    string[] PythonFileUris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.args">Args</a></code> | <code>string[]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.fileUris">FileUris</a></code> | <code>string[]</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.mainPythonFileUri">MainPythonFileUri</a></code> | <code>string</code> | The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.pythonFileUris">PythonFileUris</a></code> | <code>string[]</code> | HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; set; }
```

- *Type:* string[]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#args DataprocBatch#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.fileUris"></a>

```csharp
public string[] FileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}

---

##### `MainPythonFileUri`<sup>Optional</sup> <a name="MainPythonFileUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.mainPythonFileUri"></a>

```csharp
public string MainPythonFileUri { get; set; }
```

- *Type:* string

The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#main_python_file_uri DataprocBatch#main_python_file_uri}

---

##### `PythonFileUris`<sup>Optional</sup> <a name="PythonFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.pythonFileUris"></a>

```csharp
public string[] PythonFileUris { get; set; }
```

- *Type:* string[]

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#python_file_uris DataprocBatch#python_file_uris}

---

### DataprocBatchRuntimeConfig <a name="DataprocBatchRuntimeConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchRuntimeConfig {
    DataprocBatchRuntimeConfigAutotuningConfig AutotuningConfig = null,
    string Cohort = null,
    string ContainerImage = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.autotuningConfig">AutotuningConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a></code> | autotuning_config block. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.cohort">Cohort</a></code> | <code>string</code> | Optional. Cohort identifier. Identifies families of the workloads having the same shape, e.g. daily ETL jobs. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.containerImage">ContainerImage</a></code> | <code>string</code> | Optional custom container image for the job runtime environment. If not specified, a default container image will be used. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of property names to values, which are used to configure workload execution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.version">Version</a></code> | <code>string</code> | Version of the batch runtime. |

---

##### `AutotuningConfig`<sup>Optional</sup> <a name="AutotuningConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.autotuningConfig"></a>

```csharp
public DataprocBatchRuntimeConfigAutotuningConfig AutotuningConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a>

autotuning_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#autotuning_config DataprocBatch#autotuning_config}

---

##### `Cohort`<sup>Optional</sup> <a name="Cohort" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.cohort"></a>

```csharp
public string Cohort { get; set; }
```

- *Type:* string

Optional. Cohort identifier. Identifies families of the workloads having the same shape, e.g. daily ETL jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#cohort DataprocBatch#cohort}

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.containerImage"></a>

```csharp
public string ContainerImage { get; set; }
```

- *Type:* string

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#container_image DataprocBatch#container_image}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#properties DataprocBatch#properties}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Version of the batch runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#version DataprocBatch#version}

---

### DataprocBatchRuntimeConfigAutotuningConfig <a name="DataprocBatchRuntimeConfigAutotuningConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchRuntimeConfigAutotuningConfig {
    string[] Scenarios = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig.property.scenarios">Scenarios</a></code> | <code>string[]</code> | Optional. Scenarios for which tunings are applied. Possible values: ["SCALING", "BROADCAST_HASH_JOIN", "MEMORY"]. |

---

##### `Scenarios`<sup>Optional</sup> <a name="Scenarios" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig.property.scenarios"></a>

```csharp
public string[] Scenarios { get; set; }
```

- *Type:* string[]

Optional. Scenarios for which tunings are applied. Possible values: ["SCALING", "BROADCAST_HASH_JOIN", "MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#scenarios DataprocBatch#scenarios}

---

### DataprocBatchRuntimeInfo <a name="DataprocBatchRuntimeInfo" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchRuntimeInfo {

};
```


### DataprocBatchRuntimeInfoApproximateUsage <a name="DataprocBatchRuntimeInfoApproximateUsage" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchRuntimeInfoApproximateUsage {

};
```


### DataprocBatchRuntimeInfoCurrentUsage <a name="DataprocBatchRuntimeInfoCurrentUsage" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchRuntimeInfoCurrentUsage {

};
```


### DataprocBatchSparkBatch <a name="DataprocBatchSparkBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchSparkBatch {
    string[] ArchiveUris = null,
    string[] Args = null,
    string[] FileUris = null,
    string[] JarFileUris = null,
    string MainClass = null,
    string MainJarFileUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.args">Args</a></code> | <code>string[]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.fileUris">FileUris</a></code> | <code>string[]</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.mainClass">MainClass</a></code> | <code>string</code> | The name of the driver main class. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.mainJarFileUri">MainJarFileUri</a></code> | <code>string</code> | The HCFS URI of the jar file that contains the main class. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; set; }
```

- *Type:* string[]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#args DataprocBatch#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.fileUris"></a>

```csharp
public string[] FileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}

---

##### `MainClass`<sup>Optional</sup> <a name="MainClass" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.mainClass"></a>

```csharp
public string MainClass { get; set; }
```

- *Type:* string

The name of the driver main class.

The jar file that contains the class must be in the
classpath or specified in jarFileUris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#main_class DataprocBatch#main_class}

---

##### `MainJarFileUri`<sup>Optional</sup> <a name="MainJarFileUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.mainJarFileUri"></a>

```csharp
public string MainJarFileUri { get; set; }
```

- *Type:* string

The HCFS URI of the jar file that contains the main class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#main_jar_file_uri DataprocBatch#main_jar_file_uri}

---

### DataprocBatchSparkRBatch <a name="DataprocBatchSparkRBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchSparkRBatch {
    string[] ArchiveUris = null,
    string[] Args = null,
    string[] FileUris = null,
    string MainRFileUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.args">Args</a></code> | <code>string[]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.fileUris">FileUris</a></code> | <code>string[]</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.mainRFileUri">MainRFileUri</a></code> | <code>string</code> | The HCFS URI of the main R file to use as the driver. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; set; }
```

- *Type:* string[]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#args DataprocBatch#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.fileUris"></a>

```csharp
public string[] FileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}

---

##### `MainRFileUri`<sup>Optional</sup> <a name="MainRFileUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.mainRFileUri"></a>

```csharp
public string MainRFileUri { get; set; }
```

- *Type:* string

The HCFS URI of the main R file to use as the driver.

Must be a .R or .r file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#main_r_file_uri DataprocBatch#main_r_file_uri}

---

### DataprocBatchSparkSqlBatch <a name="DataprocBatchSparkSqlBatch" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchSparkSqlBatch {
    string[] JarFileUris = null,
    string QueryFileUri = null,
    System.Collections.Generic.IDictionary<string, string> QueryVariables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.queryFileUri">QueryFileUri</a></code> | <code>string</code> | The HCFS URI of the script that contains Spark SQL queries to execute. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.queryVariables">QueryVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). |

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}

---

##### `QueryFileUri`<sup>Optional</sup> <a name="QueryFileUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.queryFileUri"></a>

```csharp
public string QueryFileUri { get; set; }
```

- *Type:* string

The HCFS URI of the script that contains Spark SQL queries to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#query_file_uri DataprocBatch#query_file_uri}

---

##### `QueryVariables`<sup>Optional</sup> <a name="QueryVariables" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.queryVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> QueryVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#query_variables DataprocBatch#query_variables}

---

### DataprocBatchStateHistory <a name="DataprocBatchStateHistory" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchStateHistory {

};
```


### DataprocBatchTimeouts <a name="DataprocBatchTimeouts" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#create DataprocBatch#create}. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#delete DataprocBatch#delete}. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#update DataprocBatch#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#create DataprocBatch#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#delete DataprocBatch#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataproc_batch#update DataprocBatch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference <a name="DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resetUserWorkloadAuthenticationType">ResetUserWorkloadAuthenticationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserWorkloadAuthenticationType` <a name="ResetUserWorkloadAuthenticationType" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resetUserWorkloadAuthenticationType"></a>

```csharp
private void ResetUserWorkloadAuthenticationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationTypeInput">UserWorkloadAuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationType">UserWorkloadAuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig">DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserWorkloadAuthenticationTypeInput`<sup>Optional</sup> <a name="UserWorkloadAuthenticationTypeInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationTypeInput"></a>

```csharp
public string UserWorkloadAuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `UserWorkloadAuthenticationType`<sup>Required</sup> <a name="UserWorkloadAuthenticationType" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationType"></a>

```csharp
public string UserWorkloadAuthenticationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig">DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig</a>

---


### DataprocBatchEnvironmentConfigExecutionConfigOutputReference <a name="DataprocBatchEnvironmentConfigExecutionConfigOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchEnvironmentConfigExecutionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.putAuthenticationConfig">PutAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetAuthenticationConfig">ResetAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags">ResetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkUri">ResetNetworkUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket">ResetStagingBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri">ResetSubnetworkUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticationConfig` <a name="PutAuthenticationConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.putAuthenticationConfig"></a>

```csharp
private void PutAuthenticationConfig(DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.putAuthenticationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig">DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig</a>

---

##### `ResetAuthenticationConfig` <a name="ResetAuthenticationConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetAuthenticationConfig"></a>

```csharp
private void ResetAuthenticationConfig()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetNetworkTags` <a name="ResetNetworkTags" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags"></a>

```csharp
private void ResetNetworkTags()
```

##### `ResetNetworkUri` <a name="ResetNetworkUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkUri"></a>

```csharp
private void ResetNetworkUri()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetStagingBucket` <a name="ResetStagingBucket" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket"></a>

```csharp
private void ResetStagingBucket()
```

##### `ResetSubnetworkUri` <a name="ResetSubnetworkUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri"></a>

```csharp
private void ResetSubnetworkUri()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfig">AuthenticationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference">DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfigInput">AuthenticationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig">DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput">NetworkTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUriInput">NetworkUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput">StagingBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput">SubnetworkUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUri">NetworkUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket">StagingBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri">SubnetworkUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationConfig`<sup>Required</sup> <a name="AuthenticationConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfig"></a>

```csharp
public DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference AuthenticationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference">DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference</a>

---

##### `AuthenticationConfigInput`<sup>Optional</sup> <a name="AuthenticationConfigInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfigInput"></a>

```csharp
public DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig AuthenticationConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig">DataprocBatchEnvironmentConfigExecutionConfigAuthenticationConfig</a>

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `NetworkTagsInput`<sup>Optional</sup> <a name="NetworkTagsInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput"></a>

```csharp
public string[] NetworkTagsInput { get; }
```

- *Type:* string[]

---

##### `NetworkUriInput`<sup>Optional</sup> <a name="NetworkUriInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUriInput"></a>

```csharp
public string NetworkUriInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `StagingBucketInput`<sup>Optional</sup> <a name="StagingBucketInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput"></a>

```csharp
public string StagingBucketInput { get; }
```

- *Type:* string

---

##### `SubnetworkUriInput`<sup>Optional</sup> <a name="SubnetworkUriInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput"></a>

```csharp
public string SubnetworkUriInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `NetworkTags`<sup>Required</sup> <a name="NetworkTags" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; }
```

- *Type:* string[]

---

##### `NetworkUri`<sup>Required</sup> <a name="NetworkUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUri"></a>

```csharp
public string NetworkUri { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `StagingBucket`<sup>Required</sup> <a name="StagingBucket" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket"></a>

```csharp
public string StagingBucket { get; }
```

- *Type:* string

---

##### `SubnetworkUri`<sup>Required</sup> <a name="SubnetworkUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri"></a>

```csharp
public string SubnetworkUri { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchEnvironmentConfigExecutionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a>

---


### DataprocBatchEnvironmentConfigOutputReference <a name="DataprocBatchEnvironmentConfigOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchEnvironmentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig">PutExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig">PutPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resetExecutionConfig">ResetExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resetPeripheralsConfig">ResetPeripheralsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExecutionConfig` <a name="PutExecutionConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig"></a>

```csharp
private void PutExecutionConfig(DataprocBatchEnvironmentConfigExecutionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a>

---

##### `PutPeripheralsConfig` <a name="PutPeripheralsConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig"></a>

```csharp
private void PutPeripheralsConfig(DataprocBatchEnvironmentConfigPeripheralsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a>

---

##### `ResetExecutionConfig` <a name="ResetExecutionConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resetExecutionConfig"></a>

```csharp
private void ResetExecutionConfig()
```

##### `ResetPeripheralsConfig` <a name="ResetPeripheralsConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resetPeripheralsConfig"></a>

```csharp
private void ResetPeripheralsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.executionConfig">ExecutionConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference">DataprocBatchEnvironmentConfigExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfig">PeripheralsConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference">DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.executionConfigInput">ExecutionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfigInput">PeripheralsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionConfig`<sup>Required</sup> <a name="ExecutionConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.executionConfig"></a>

```csharp
public DataprocBatchEnvironmentConfigExecutionConfigOutputReference ExecutionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference">DataprocBatchEnvironmentConfigExecutionConfigOutputReference</a>

---

##### `PeripheralsConfig`<sup>Required</sup> <a name="PeripheralsConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfig"></a>

```csharp
public DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference PeripheralsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference">DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference</a>

---

##### `ExecutionConfigInput`<sup>Optional</sup> <a name="ExecutionConfigInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.executionConfigInput"></a>

```csharp
public DataprocBatchEnvironmentConfigExecutionConfig ExecutionConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a>

---

##### `PeripheralsConfigInput`<sup>Optional</sup> <a name="PeripheralsConfigInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfigInput"></a>

```csharp
public DataprocBatchEnvironmentConfigPeripheralsConfig PeripheralsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchEnvironmentConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a>

---


### DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference <a name="DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig">PutSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService">ResetMetastoreService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig">ResetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSparkHistoryServerConfig` <a name="PutSparkHistoryServerConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig"></a>

```csharp
private void PutSparkHistoryServerConfig(DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `ResetMetastoreService` <a name="ResetMetastoreService" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService"></a>

```csharp
private void ResetMetastoreService()
```

##### `ResetSparkHistoryServerConfig` <a name="ResetSparkHistoryServerConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig"></a>

```csharp
private void ResetSparkHistoryServerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig">SparkHistoryServerConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput">MetastoreServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput">SparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService">MetastoreService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SparkHistoryServerConfig`<sup>Required</sup> <a name="SparkHistoryServerConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig"></a>

```csharp
public DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference SparkHistoryServerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a>

---

##### `MetastoreServiceInput`<sup>Optional</sup> <a name="MetastoreServiceInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput"></a>

```csharp
public string MetastoreServiceInput { get; }
```

- *Type:* string

---

##### `SparkHistoryServerConfigInput`<sup>Optional</sup> <a name="SparkHistoryServerConfigInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput"></a>

```csharp
public DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig SparkHistoryServerConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `MetastoreService`<sup>Required</sup> <a name="MetastoreService" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService"></a>

```csharp
public string MetastoreService { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchEnvironmentConfigPeripheralsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a>

---


### DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference <a name="DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster">ResetDataprocCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataprocCluster` <a name="ResetDataprocCluster" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```csharp
private void ResetDataprocCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">DataprocClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster">DataprocCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataprocClusterInput`<sup>Optional</sup> <a name="DataprocClusterInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```csharp
public string DataprocClusterInput { get; }
```

- *Type:* string

---

##### `DataprocCluster`<sup>Required</sup> <a name="DataprocCluster" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```csharp
public string DataprocCluster { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---


### DataprocBatchPysparkBatchOutputReference <a name="DataprocBatchPysparkBatchOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchPysparkBatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetMainPythonFileUri">ResetMainPythonFileUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetPythonFileUris">ResetPythonFileUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetArchiveUris"></a>

```csharp
private void ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetFileUris"></a>

```csharp
private void ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetJarFileUris"></a>

```csharp
private void ResetJarFileUris()
```

##### `ResetMainPythonFileUri` <a name="ResetMainPythonFileUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetMainPythonFileUri"></a>

```csharp
private void ResetMainPythonFileUri()
```

##### `ResetPythonFileUris` <a name="ResetPythonFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetPythonFileUris"></a>

```csharp
private void ResetPythonFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.mainPythonFileUriInput">MainPythonFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.pythonFileUrisInput">PythonFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fileUris">FileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.mainPythonFileUri">MainPythonFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.pythonFileUris">PythonFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.archiveUrisInput"></a>

```csharp
public string[] ArchiveUrisInput { get; }
```

- *Type:* string[]

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fileUrisInput"></a>

```csharp
public string[] FileUrisInput { get; }
```

- *Type:* string[]

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.jarFileUrisInput"></a>

```csharp
public string[] JarFileUrisInput { get; }
```

- *Type:* string[]

---

##### `MainPythonFileUriInput`<sup>Optional</sup> <a name="MainPythonFileUriInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.mainPythonFileUriInput"></a>

```csharp
public string MainPythonFileUriInput { get; }
```

- *Type:* string

---

##### `PythonFileUrisInput`<sup>Optional</sup> <a name="PythonFileUrisInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.pythonFileUrisInput"></a>

```csharp
public string[] PythonFileUrisInput { get; }
```

- *Type:* string[]

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; }
```

- *Type:* string[]

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fileUris"></a>

```csharp
public string[] FileUris { get; }
```

- *Type:* string[]

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; }
```

- *Type:* string[]

---

##### `MainPythonFileUri`<sup>Required</sup> <a name="MainPythonFileUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.mainPythonFileUri"></a>

```csharp
public string MainPythonFileUri { get; }
```

- *Type:* string

---

##### `PythonFileUris`<sup>Required</sup> <a name="PythonFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.pythonFileUris"></a>

```csharp
public string[] PythonFileUris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchPysparkBatch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a>

---


### DataprocBatchRuntimeConfigAutotuningConfigOutputReference <a name="DataprocBatchRuntimeConfigAutotuningConfigOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchRuntimeConfigAutotuningConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resetScenarios">ResetScenarios</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScenarios` <a name="ResetScenarios" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resetScenarios"></a>

```csharp
private void ResetScenarios()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenariosInput">ScenariosInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenarios">Scenarios</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScenariosInput`<sup>Optional</sup> <a name="ScenariosInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenariosInput"></a>

```csharp
public string[] ScenariosInput { get; }
```

- *Type:* string[]

---

##### `Scenarios`<sup>Required</sup> <a name="Scenarios" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenarios"></a>

```csharp
public string[] Scenarios { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchRuntimeConfigAutotuningConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a>

---


### DataprocBatchRuntimeConfigOutputReference <a name="DataprocBatchRuntimeConfigOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchRuntimeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.putAutotuningConfig">PutAutotuningConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetAutotuningConfig">ResetAutotuningConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetCohort">ResetCohort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutotuningConfig` <a name="PutAutotuningConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.putAutotuningConfig"></a>

```csharp
private void PutAutotuningConfig(DataprocBatchRuntimeConfigAutotuningConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.putAutotuningConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a>

---

##### `ResetAutotuningConfig` <a name="ResetAutotuningConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetAutotuningConfig"></a>

```csharp
private void ResetAutotuningConfig()
```

##### `ResetCohort` <a name="ResetCohort" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetCohort"></a>

```csharp
private void ResetCohort()
```

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetContainerImage"></a>

```csharp
private void ResetContainerImage()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.autotuningConfig">AutotuningConfig</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference">DataprocBatchRuntimeConfigAutotuningConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.effectiveProperties">EffectiveProperties</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.autotuningConfigInput">AutotuningConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.cohortInput">CohortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.containerImageInput">ContainerImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.cohort">Cohort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.containerImage">ContainerImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutotuningConfig`<sup>Required</sup> <a name="AutotuningConfig" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.autotuningConfig"></a>

```csharp
public DataprocBatchRuntimeConfigAutotuningConfigOutputReference AutotuningConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference">DataprocBatchRuntimeConfigAutotuningConfigOutputReference</a>

---

##### `EffectiveProperties`<sup>Required</sup> <a name="EffectiveProperties" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.effectiveProperties"></a>

```csharp
public StringMap EffectiveProperties { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `AutotuningConfigInput`<sup>Optional</sup> <a name="AutotuningConfigInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.autotuningConfigInput"></a>

```csharp
public DataprocBatchRuntimeConfigAutotuningConfig AutotuningConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a>

---

##### `CohortInput`<sup>Optional</sup> <a name="CohortInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.cohortInput"></a>

```csharp
public string CohortInput { get; }
```

- *Type:* string

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.containerImageInput"></a>

```csharp
public string ContainerImageInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Cohort`<sup>Required</sup> <a name="Cohort" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.cohort"></a>

```csharp
public string Cohort { get; }
```

- *Type:* string

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.containerImage"></a>

```csharp
public string ContainerImage { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchRuntimeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a>

---


### DataprocBatchRuntimeInfoApproximateUsageList <a name="DataprocBatchRuntimeInfoApproximateUsageList" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchRuntimeInfoApproximateUsageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.get"></a>

```csharp
private DataprocBatchRuntimeInfoApproximateUsageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataprocBatchRuntimeInfoApproximateUsageOutputReference <a name="DataprocBatchRuntimeInfoApproximateUsageOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchRuntimeInfoApproximateUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliAcceleratorSeconds">MilliAcceleratorSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliDcuSeconds">MilliDcuSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.shuffleStorageGbSeconds">ShuffleStorageGbSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsage">DataprocBatchRuntimeInfoApproximateUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `MilliAcceleratorSeconds`<sup>Required</sup> <a name="MilliAcceleratorSeconds" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliAcceleratorSeconds"></a>

```csharp
public string MilliAcceleratorSeconds { get; }
```

- *Type:* string

---

##### `MilliDcuSeconds`<sup>Required</sup> <a name="MilliDcuSeconds" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliDcuSeconds"></a>

```csharp
public string MilliDcuSeconds { get; }
```

- *Type:* string

---

##### `ShuffleStorageGbSeconds`<sup>Required</sup> <a name="ShuffleStorageGbSeconds" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.shuffleStorageGbSeconds"></a>

```csharp
public string ShuffleStorageGbSeconds { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchRuntimeInfoApproximateUsage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsage">DataprocBatchRuntimeInfoApproximateUsage</a>

---


### DataprocBatchRuntimeInfoCurrentUsageList <a name="DataprocBatchRuntimeInfoCurrentUsageList" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchRuntimeInfoCurrentUsageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.get"></a>

```csharp
private DataprocBatchRuntimeInfoCurrentUsageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataprocBatchRuntimeInfoCurrentUsageOutputReference <a name="DataprocBatchRuntimeInfoCurrentUsageOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchRuntimeInfoCurrentUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliAccelerator">MilliAccelerator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcu">MilliDcu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcuPremium">MilliDcuPremium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGb">ShuffleStorageGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGbPremium">ShuffleStorageGbPremium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.snapshotTime">SnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsage">DataprocBatchRuntimeInfoCurrentUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `MilliAccelerator`<sup>Required</sup> <a name="MilliAccelerator" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliAccelerator"></a>

```csharp
public string MilliAccelerator { get; }
```

- *Type:* string

---

##### `MilliDcu`<sup>Required</sup> <a name="MilliDcu" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcu"></a>

```csharp
public string MilliDcu { get; }
```

- *Type:* string

---

##### `MilliDcuPremium`<sup>Required</sup> <a name="MilliDcuPremium" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcuPremium"></a>

```csharp
public string MilliDcuPremium { get; }
```

- *Type:* string

---

##### `ShuffleStorageGb`<sup>Required</sup> <a name="ShuffleStorageGb" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGb"></a>

```csharp
public string ShuffleStorageGb { get; }
```

- *Type:* string

---

##### `ShuffleStorageGbPremium`<sup>Required</sup> <a name="ShuffleStorageGbPremium" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGbPremium"></a>

```csharp
public string ShuffleStorageGbPremium { get; }
```

- *Type:* string

---

##### `SnapshotTime`<sup>Required</sup> <a name="SnapshotTime" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.snapshotTime"></a>

```csharp
public string SnapshotTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchRuntimeInfoCurrentUsage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsage">DataprocBatchRuntimeInfoCurrentUsage</a>

---


### DataprocBatchRuntimeInfoList <a name="DataprocBatchRuntimeInfoList" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchRuntimeInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.get"></a>

```csharp
private DataprocBatchRuntimeInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataprocBatchRuntimeInfoOutputReference <a name="DataprocBatchRuntimeInfoOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchRuntimeInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.approximateUsage">ApproximateUsage</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList">DataprocBatchRuntimeInfoApproximateUsageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.currentUsage">CurrentUsage</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList">DataprocBatchRuntimeInfoCurrentUsageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.diagnosticOutputUri">DiagnosticOutputUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.endpoints">Endpoints</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.outputUri">OutputUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfo">DataprocBatchRuntimeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApproximateUsage`<sup>Required</sup> <a name="ApproximateUsage" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.approximateUsage"></a>

```csharp
public DataprocBatchRuntimeInfoApproximateUsageList ApproximateUsage { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList">DataprocBatchRuntimeInfoApproximateUsageList</a>

---

##### `CurrentUsage`<sup>Required</sup> <a name="CurrentUsage" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.currentUsage"></a>

```csharp
public DataprocBatchRuntimeInfoCurrentUsageList CurrentUsage { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList">DataprocBatchRuntimeInfoCurrentUsageList</a>

---

##### `DiagnosticOutputUri`<sup>Required</sup> <a name="DiagnosticOutputUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.diagnosticOutputUri"></a>

```csharp
public string DiagnosticOutputUri { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.endpoints"></a>

```csharp
public StringMap Endpoints { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `OutputUri`<sup>Required</sup> <a name="OutputUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.outputUri"></a>

```csharp
public string OutputUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchRuntimeInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchRuntimeInfo">DataprocBatchRuntimeInfo</a>

---


### DataprocBatchSparkBatchOutputReference <a name="DataprocBatchSparkBatchOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchSparkBatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetMainClass">ResetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetMainJarFileUri">ResetMainJarFileUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetArchiveUris"></a>

```csharp
private void ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetFileUris"></a>

```csharp
private void ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetJarFileUris"></a>

```csharp
private void ResetJarFileUris()
```

##### `ResetMainClass` <a name="ResetMainClass" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetMainClass"></a>

```csharp
private void ResetMainClass()
```

##### `ResetMainJarFileUri` <a name="ResetMainJarFileUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetMainJarFileUri"></a>

```csharp
private void ResetMainJarFileUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainClassInput">MainClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainJarFileUriInput">MainJarFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fileUris">FileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainClass">MainClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainJarFileUri">MainJarFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.archiveUrisInput"></a>

```csharp
public string[] ArchiveUrisInput { get; }
```

- *Type:* string[]

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fileUrisInput"></a>

```csharp
public string[] FileUrisInput { get; }
```

- *Type:* string[]

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.jarFileUrisInput"></a>

```csharp
public string[] JarFileUrisInput { get; }
```

- *Type:* string[]

---

##### `MainClassInput`<sup>Optional</sup> <a name="MainClassInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainClassInput"></a>

```csharp
public string MainClassInput { get; }
```

- *Type:* string

---

##### `MainJarFileUriInput`<sup>Optional</sup> <a name="MainJarFileUriInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainJarFileUriInput"></a>

```csharp
public string MainJarFileUriInput { get; }
```

- *Type:* string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; }
```

- *Type:* string[]

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fileUris"></a>

```csharp
public string[] FileUris { get; }
```

- *Type:* string[]

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; }
```

- *Type:* string[]

---

##### `MainClass`<sup>Required</sup> <a name="MainClass" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainClass"></a>

```csharp
public string MainClass { get; }
```

- *Type:* string

---

##### `MainJarFileUri`<sup>Required</sup> <a name="MainJarFileUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainJarFileUri"></a>

```csharp
public string MainJarFileUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchSparkBatch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a>

---


### DataprocBatchSparkRBatchOutputReference <a name="DataprocBatchSparkRBatchOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchSparkRBatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetMainRFileUri">ResetMainRFileUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetArchiveUris"></a>

```csharp
private void ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetFileUris"></a>

```csharp
private void ResetFileUris()
```

##### `ResetMainRFileUri` <a name="ResetMainRFileUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetMainRFileUri"></a>

```csharp
private void ResetMainRFileUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.mainRFileUriInput">MainRFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fileUris">FileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.mainRFileUri">MainRFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.archiveUrisInput"></a>

```csharp
public string[] ArchiveUrisInput { get; }
```

- *Type:* string[]

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fileUrisInput"></a>

```csharp
public string[] FileUrisInput { get; }
```

- *Type:* string[]

---

##### `MainRFileUriInput`<sup>Optional</sup> <a name="MainRFileUriInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.mainRFileUriInput"></a>

```csharp
public string MainRFileUriInput { get; }
```

- *Type:* string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; }
```

- *Type:* string[]

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fileUris"></a>

```csharp
public string[] FileUris { get; }
```

- *Type:* string[]

---

##### `MainRFileUri`<sup>Required</sup> <a name="MainRFileUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.mainRFileUri"></a>

```csharp
public string MainRFileUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchSparkRBatch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a>

---


### DataprocBatchSparkSqlBatchOutputReference <a name="DataprocBatchSparkSqlBatchOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchSparkSqlBatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetQueryFileUri">ResetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetQueryVariables">ResetQueryVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetJarFileUris"></a>

```csharp
private void ResetJarFileUris()
```

##### `ResetQueryFileUri` <a name="ResetQueryFileUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetQueryFileUri"></a>

```csharp
private void ResetQueryFileUri()
```

##### `ResetQueryVariables` <a name="ResetQueryVariables" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetQueryVariables"></a>

```csharp
private void ResetQueryVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryFileUriInput">QueryFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryVariablesInput">QueryVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryFileUri">QueryFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryVariables">QueryVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.jarFileUrisInput"></a>

```csharp
public string[] JarFileUrisInput { get; }
```

- *Type:* string[]

---

##### `QueryFileUriInput`<sup>Optional</sup> <a name="QueryFileUriInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryFileUriInput"></a>

```csharp
public string QueryFileUriInput { get; }
```

- *Type:* string

---

##### `QueryVariablesInput`<sup>Optional</sup> <a name="QueryVariablesInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> QueryVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; }
```

- *Type:* string[]

---

##### `QueryFileUri`<sup>Required</sup> <a name="QueryFileUri" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryFileUri"></a>

```csharp
public string QueryFileUri { get; }
```

- *Type:* string

---

##### `QueryVariables`<sup>Required</sup> <a name="QueryVariables" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> QueryVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchSparkSqlBatch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a>

---


### DataprocBatchStateHistoryList <a name="DataprocBatchStateHistoryList" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchStateHistoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.get"></a>

```csharp
private DataprocBatchStateHistoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataprocBatchStateHistoryOutputReference <a name="DataprocBatchStateHistoryOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchStateHistoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.stateStartTime">StateStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistory">DataprocBatchStateHistory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `StateStartTime`<sup>Required</sup> <a name="StateStartTime" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.stateStartTime"></a>

```csharp
public string StateStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.internalValue"></a>

```csharp
public DataprocBatchStateHistory InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchStateHistory">DataprocBatchStateHistory</a>

---


### DataprocBatchTimeoutsOutputReference <a name="DataprocBatchTimeoutsOutputReference" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocBatchTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataprocBatchTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a>

---



