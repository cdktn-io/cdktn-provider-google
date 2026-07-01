# `migrationCenterAssetsExportJob` Submodule <a name="`migrationCenterAssetsExportJob` Submodule" id="@cdktn/provider-google.migrationCenterAssetsExportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterAssetsExportJob <a name="MigrationCenterAssetsExportJob" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job google_migration_center_assets_export_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJob(Construct Scope, string Id, MigrationCenterAssetsExportJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig">MigrationCenterAssetsExportJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig">MigrationCenterAssetsExportJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putPerformanceData">PutPerformanceData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putSignedUriDestination">PutSignedUriDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetPerformanceData">ResetPerformanceData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetShowHidden">ResetShowHidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetSignedUriDestination">ResetSignedUriDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putCondition"></a>

```csharp
private void PutCondition(MigrationCenterAssetsExportJobCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a>

---

##### `PutPerformanceData` <a name="PutPerformanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putPerformanceData"></a>

```csharp
private void PutPerformanceData(MigrationCenterAssetsExportJobPerformanceData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putPerformanceData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a>

---

##### `PutSignedUriDestination` <a name="PutSignedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putSignedUriDestination"></a>

```csharp
private void PutSignedUriDestination(MigrationCenterAssetsExportJobSignedUriDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putSignedUriDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putTimeouts"></a>

```csharp
private void PutTimeouts(MigrationCenterAssetsExportJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPerformanceData` <a name="ResetPerformanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetPerformanceData"></a>

```csharp
private void ResetPerformanceData()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetShowHidden` <a name="ResetShowHidden" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetShowHidden"></a>

```csharp
private void ResetShowHidden()
```

##### `ResetSignedUriDestination` <a name="ResetSignedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetSignedUriDestination"></a>

```csharp
private void ResetSignedUriDestination()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MigrationCenterAssetsExportJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterAssetsExportJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterAssetsExportJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterAssetsExportJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterAssetsExportJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MigrationCenterAssetsExportJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MigrationCenterAssetsExportJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MigrationCenterAssetsExportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterAssetsExportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference">MigrationCenterAssetsExportJobConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.inventory">Inventory</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList">MigrationCenterAssetsExportJobInventoryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.networkDependencies">NetworkDependencies</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList">MigrationCenterAssetsExportJobNetworkDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.performanceData">PerformanceData</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference">MigrationCenterAssetsExportJobPerformanceDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.recentExecutions">RecentExecutions</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList">MigrationCenterAssetsExportJobRecentExecutionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.signedUriDestination">SignedUriDestination</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference">MigrationCenterAssetsExportJobSignedUriDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference">MigrationCenterAssetsExportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.assetsExportJobIdInput">AssetsExportJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.performanceDataInput">PerformanceDataInput</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.showHiddenInput">ShowHiddenInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.signedUriDestinationInput">SignedUriDestinationInput</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.assetsExportJobId">AssetsExportJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.showHidden">ShowHidden</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.condition"></a>

```csharp
public MigrationCenterAssetsExportJobConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference">MigrationCenterAssetsExportJobConditionOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Inventory`<sup>Required</sup> <a name="Inventory" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.inventory"></a>

```csharp
public MigrationCenterAssetsExportJobInventoryList Inventory { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList">MigrationCenterAssetsExportJobInventoryList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkDependencies`<sup>Required</sup> <a name="NetworkDependencies" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.networkDependencies"></a>

```csharp
public MigrationCenterAssetsExportJobNetworkDependenciesList NetworkDependencies { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList">MigrationCenterAssetsExportJobNetworkDependenciesList</a>

---

##### `PerformanceData`<sup>Required</sup> <a name="PerformanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.performanceData"></a>

```csharp
public MigrationCenterAssetsExportJobPerformanceDataOutputReference PerformanceData { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference">MigrationCenterAssetsExportJobPerformanceDataOutputReference</a>

---

##### `RecentExecutions`<sup>Required</sup> <a name="RecentExecutions" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.recentExecutions"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsList RecentExecutions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList">MigrationCenterAssetsExportJobRecentExecutionsList</a>

---

##### `SignedUriDestination`<sup>Required</sup> <a name="SignedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.signedUriDestination"></a>

```csharp
public MigrationCenterAssetsExportJobSignedUriDestinationOutputReference SignedUriDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference">MigrationCenterAssetsExportJobSignedUriDestinationOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.timeouts"></a>

```csharp
public MigrationCenterAssetsExportJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference">MigrationCenterAssetsExportJobTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AssetsExportJobIdInput`<sup>Optional</sup> <a name="AssetsExportJobIdInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.assetsExportJobIdInput"></a>

```csharp
public string AssetsExportJobIdInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.conditionInput"></a>

```csharp
public MigrationCenterAssetsExportJobCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PerformanceDataInput`<sup>Optional</sup> <a name="PerformanceDataInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.performanceDataInput"></a>

```csharp
public MigrationCenterAssetsExportJobPerformanceData PerformanceDataInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ShowHiddenInput`<sup>Optional</sup> <a name="ShowHiddenInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.showHiddenInput"></a>

```csharp
public bool|IResolvable ShowHiddenInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SignedUriDestinationInput`<sup>Optional</sup> <a name="SignedUriDestinationInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.signedUriDestinationInput"></a>

```csharp
public MigrationCenterAssetsExportJobSignedUriDestination SignedUriDestinationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.timeoutsInput"></a>

```csharp
public IResolvable|MigrationCenterAssetsExportJobTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a>

---

##### `AssetsExportJobId`<sup>Required</sup> <a name="AssetsExportJobId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.assetsExportJobId"></a>

```csharp
public string AssetsExportJobId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ShowHidden`<sup>Required</sup> <a name="ShowHidden" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.showHidden"></a>

```csharp
public bool|IResolvable ShowHidden { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterAssetsExportJobCondition <a name="MigrationCenterAssetsExportJobCondition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobCondition {
    string Filter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition.property.filter">Filter</a></code> | <code>string</code> | Assets filter, supports the same syntax as asset listing. |

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Assets filter, supports the same syntax as asset listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#filter MigrationCenterAssetsExportJob#filter}

---

### MigrationCenterAssetsExportJobConfig <a name="MigrationCenterAssetsExportJobConfig" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AssetsExportJobId,
    string Location,
    MigrationCenterAssetsExportJobCondition Condition = null,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    MigrationCenterAssetsExportJobPerformanceData PerformanceData = null,
    string Project = null,
    bool|IResolvable ShowHidden = null,
    MigrationCenterAssetsExportJobSignedUriDestination SignedUriDestination = null,
    MigrationCenterAssetsExportJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.assetsExportJobId">AssetsExportJobId</a></code> | <code>string</code> | The ID to use for the asset export job. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#id MigrationCenterAssetsExportJob#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. Labels must meet the following constraints:. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.performanceData">PerformanceData</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a></code> | performance_data block. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#project MigrationCenterAssetsExportJob#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.showHidden">ShowHidden</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When this value is set to 'true' the response will include all assets, including those that are hidden. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.signedUriDestination">SignedUriDestination</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a></code> | signed_uri_destination block. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssetsExportJobId`<sup>Required</sup> <a name="AssetsExportJobId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.assetsExportJobId"></a>

```csharp
public string AssetsExportJobId { get; set; }
```

- *Type:* string

The ID to use for the asset export job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#assets_export_job_id MigrationCenterAssetsExportJob#assets_export_job_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#location MigrationCenterAssetsExportJob#location}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.condition"></a>

```csharp
public MigrationCenterAssetsExportJobCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#condition MigrationCenterAssetsExportJob#condition}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#deletion_policy MigrationCenterAssetsExportJob#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#id MigrationCenterAssetsExportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs. Labels must meet the following constraints:.

* Keys and values can contain only lowercase letters, numeric characters,
  underscores, and dashes.
* All characters must use UTF-8 encoding, and international characters are
  allowed.
* Keys must start with a lowercase letter or international character.
* Each resource is limited to a maximum of 64 labels.

Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#labels MigrationCenterAssetsExportJob#labels}

---

##### `PerformanceData`<sup>Optional</sup> <a name="PerformanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.performanceData"></a>

```csharp
public MigrationCenterAssetsExportJobPerformanceData PerformanceData { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a>

performance_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#performance_data MigrationCenterAssetsExportJob#performance_data}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#project MigrationCenterAssetsExportJob#project}.

---

##### `ShowHidden`<sup>Optional</sup> <a name="ShowHidden" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.showHidden"></a>

```csharp
public bool|IResolvable ShowHidden { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When this value is set to 'true' the response will include all assets, including those that are hidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#show_hidden MigrationCenterAssetsExportJob#show_hidden}

---

##### `SignedUriDestination`<sup>Optional</sup> <a name="SignedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.signedUriDestination"></a>

```csharp
public MigrationCenterAssetsExportJobSignedUriDestination SignedUriDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a>

signed_uri_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#signed_uri_destination MigrationCenterAssetsExportJob#signed_uri_destination}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.timeouts"></a>

```csharp
public MigrationCenterAssetsExportJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#timeouts MigrationCenterAssetsExportJob#timeouts}

---

### MigrationCenterAssetsExportJobInventory <a name="MigrationCenterAssetsExportJobInventory" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobInventory {

};
```


### MigrationCenterAssetsExportJobNetworkDependencies <a name="MigrationCenterAssetsExportJobNetworkDependencies" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependencies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobNetworkDependencies {

};
```


### MigrationCenterAssetsExportJobPerformanceData <a name="MigrationCenterAssetsExportJobPerformanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobPerformanceData {
    double MaxDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData.property.maxDays">MaxDays</a></code> | <code>double</code> | When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available. |

---

##### `MaxDays`<sup>Optional</sup> <a name="MaxDays" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData.property.maxDays"></a>

```csharp
public double MaxDays { get; set; }
```

- *Type:* double

When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available.

When this value is unset (or set to zero),
all available data is returned.
The maximum value is 420; values above 420 will be coerced to 420.
If unset (0 value) a default value of 40 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#max_days MigrationCenterAssetsExportJob#max_days}

---

### MigrationCenterAssetsExportJobRecentExecutions <a name="MigrationCenterAssetsExportJobRecentExecutions" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutions {

};
```


### MigrationCenterAssetsExportJobRecentExecutionsResult <a name="MigrationCenterAssetsExportJobRecentExecutionsResult" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResult {

};
```


### MigrationCenterAssetsExportJobRecentExecutionsResultError <a name="MigrationCenterAssetsExportJobRecentExecutionsResultError" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultError {

};
```


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails {

};
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles {

};
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries {

};
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile {

};
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri {

};
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile {

};
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri {

};
```


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris {

};
```


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris {

};
```


### MigrationCenterAssetsExportJobSignedUriDestination <a name="MigrationCenterAssetsExportJobSignedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobSignedUriDestination {
    string FileFormat
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination.property.fileFormat">FileFormat</a></code> | <code>string</code> | The file format to export. Possible values: CSV XLSX. |

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination.property.fileFormat"></a>

```csharp
public string FileFormat { get; set; }
```

- *Type:* string

The file format to export. Possible values: CSV XLSX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#file_format MigrationCenterAssetsExportJob#file_format}

---

### MigrationCenterAssetsExportJobTimeouts <a name="MigrationCenterAssetsExportJobTimeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#create MigrationCenterAssetsExportJob#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#delete MigrationCenterAssetsExportJob#delete}. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#update MigrationCenterAssetsExportJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#create MigrationCenterAssetsExportJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#delete MigrationCenterAssetsExportJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#update MigrationCenterAssetsExportJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterAssetsExportJobConditionOutputReference <a name="MigrationCenterAssetsExportJobConditionOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a>

---


### MigrationCenterAssetsExportJobInventoryList <a name="MigrationCenterAssetsExportJobInventoryList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobInventoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.get"></a>

```csharp
private MigrationCenterAssetsExportJobInventoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterAssetsExportJobInventoryOutputReference <a name="MigrationCenterAssetsExportJobInventoryOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobInventoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventory">MigrationCenterAssetsExportJobInventory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobInventory InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventory">MigrationCenterAssetsExportJobInventory</a>

---


### MigrationCenterAssetsExportJobNetworkDependenciesList <a name="MigrationCenterAssetsExportJobNetworkDependenciesList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobNetworkDependenciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.get"></a>

```csharp
private MigrationCenterAssetsExportJobNetworkDependenciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterAssetsExportJobNetworkDependenciesOutputReference <a name="MigrationCenterAssetsExportJobNetworkDependenciesOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobNetworkDependenciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependencies">MigrationCenterAssetsExportJobNetworkDependencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobNetworkDependencies InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependencies">MigrationCenterAssetsExportJobNetworkDependencies</a>

---


### MigrationCenterAssetsExportJobPerformanceDataOutputReference <a name="MigrationCenterAssetsExportJobPerformanceDataOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobPerformanceDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resetMaxDays">ResetMaxDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxDays` <a name="ResetMaxDays" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resetMaxDays"></a>

```csharp
private void ResetMaxDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDaysInput">MaxDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDays">MaxDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxDaysInput`<sup>Optional</sup> <a name="MaxDaysInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDaysInput"></a>

```csharp
public double MaxDaysInput { get; }
```

- *Type:* double

---

##### `MaxDays`<sup>Required</sup> <a name="MaxDays" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDays"></a>

```csharp
public double MaxDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobPerformanceData InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsList <a name="MigrationCenterAssetsExportJobRecentExecutionsList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.get"></a>

```csharp
private MigrationCenterAssetsExportJobRecentExecutionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.executionId">ExecutionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.requestedAssetCount">RequestedAssetCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.result">Result</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList">MigrationCenterAssetsExportJobRecentExecutionsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutions">MigrationCenterAssetsExportJobRecentExecutions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `ExecutionId`<sup>Required</sup> <a name="ExecutionId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.executionId"></a>

```csharp
public string ExecutionId { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `RequestedAssetCount`<sup>Required</sup> <a name="RequestedAssetCount" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.requestedAssetCount"></a>

```csharp
public double RequestedAssetCount { get; }
```

- *Type:* double

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.result"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList">MigrationCenterAssetsExportJobRecentExecutionsResultList</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutions">MigrationCenterAssetsExportJobRecentExecutions</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get"></a>

```csharp
private MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails">MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails">MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get"></a>

```csharp
private MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList">MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultError">MigrationCenterAssetsExportJobRecentExecutionsResultError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.details"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList Details { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList">MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultError">MigrationCenterAssetsExportJobRecentExecutionsResultError</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.get"></a>

```csharp
private MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get"></a>

```csharp
private MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.columnsCount">ColumnsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.rowCount">RowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.signedUri">SignedUri</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnsCount`<sup>Required</sup> <a name="ColumnsCount" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.columnsCount"></a>

```csharp
public double ColumnsCount { get; }
```

- *Type:* double

---

##### `RowCount`<sup>Required</sup> <a name="RowCount" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.rowCount"></a>

```csharp
public double RowCount { get; }
```

- *Type:* double

---

##### `SignedUri`<sup>Required</sup> <a name="SignedUri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.signedUri"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList SignedUri { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get"></a>

```csharp
private MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.file">File</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.file"></a>

```csharp
public string File { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get"></a>

```csharp
private MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.csvOutputFile">CsvOutputFile</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fileSizeBytes">FileSizeBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.xlsxOutputFile">XlsxOutputFile</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CsvOutputFile`<sup>Required</sup> <a name="CsvOutputFile" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.csvOutputFile"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList CsvOutputFile { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList</a>

---

##### `FileSizeBytes`<sup>Required</sup> <a name="FileSizeBytes" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fileSizeBytes"></a>

```csharp
public string FileSizeBytes { get; }
```

- *Type:* string

---

##### `XlsxOutputFile`<sup>Required</sup> <a name="XlsxOutputFile" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.xlsxOutputFile"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList XlsxOutputFile { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get"></a>

```csharp
private MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.signedUri">SignedUri</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SignedUri`<sup>Required</sup> <a name="SignedUri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.signedUri"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList SignedUri { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get"></a>

```csharp
private MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.file">File</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.file"></a>

```csharp
public string File { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get"></a>

```csharp
private MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.entries">Entries</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.entries"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList Entries { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList">MigrationCenterAssetsExportJobRecentExecutionsResultErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.outputFiles">OutputFiles</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.signedUris">SignedUris</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResult">MigrationCenterAssetsExportJobRecentExecutionsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.error"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList">MigrationCenterAssetsExportJobRecentExecutionsResultErrorList</a>

---

##### `OutputFiles`<sup>Required</sup> <a name="OutputFiles" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.outputFiles"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList OutputFiles { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList</a>

---

##### `SignedUris`<sup>Required</sup> <a name="SignedUris" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.signedUris"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList SignedUris { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResult">MigrationCenterAssetsExportJobRecentExecutionsResult</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get"></a>

```csharp
private MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.signedUris">SignedUris</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SignedUris`<sup>Required</sup> <a name="SignedUris" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.signedUris"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList SignedUris { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get"></a>

```csharp
private MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.file">File</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.file"></a>

```csharp
public string File { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris</a>

---


### MigrationCenterAssetsExportJobSignedUriDestinationOutputReference <a name="MigrationCenterAssetsExportJobSignedUriDestinationOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobSignedUriDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormatInput">FileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormat">FileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileFormatInput`<sup>Optional</sup> <a name="FileFormatInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormatInput"></a>

```csharp
public string FileFormatInput { get; }
```

- *Type:* string

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormat"></a>

```csharp
public string FileFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterAssetsExportJobSignedUriDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a>

---


### MigrationCenterAssetsExportJobTimeoutsOutputReference <a name="MigrationCenterAssetsExportJobTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterAssetsExportJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MigrationCenterAssetsExportJobTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a>

---



