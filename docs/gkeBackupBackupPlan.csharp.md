# `gkeBackupBackupPlan` Submodule <a name="`gkeBackupBackupPlan` Submodule" id="@cdktn/provider-google.gkeBackupBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeBackupBackupPlan <a name="GkeBackupBackupPlan" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan google_gke_backup_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlan(Construct Scope, string Id, GkeBackupBackupPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig">GkeBackupBackupPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig">GkeBackupBackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupConfig">PutBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupSchedule">PutBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetBackupConfig">ResetBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetBackupSchedule">ResetBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetDeactivated">ResetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupConfig` <a name="PutBackupConfig" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupConfig"></a>

```csharp
private void PutBackupConfig(GkeBackupBackupPlanBackupConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a>

---

##### `PutBackupSchedule` <a name="PutBackupSchedule" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupSchedule"></a>

```csharp
private void PutBackupSchedule(GkeBackupBackupPlanBackupSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putBackupSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a>

---

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putRetentionPolicy"></a>

```csharp
private void PutRetentionPolicy(GkeBackupBackupPlanRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putTimeouts"></a>

```csharp
private void PutTimeouts(GkeBackupBackupPlanTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a>

---

##### `ResetBackupConfig` <a name="ResetBackupConfig" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetBackupConfig"></a>

```csharp
private void ResetBackupConfig()
```

##### `ResetBackupSchedule` <a name="ResetBackupSchedule" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetBackupSchedule"></a>

```csharp
private void ResetBackupSchedule()
```

##### `ResetDeactivated` <a name="ResetDeactivated" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetDeactivated"></a>

```csharp
private void ResetDeactivated()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetRetentionPolicy"></a>

```csharp
private void ResetRetentionPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GkeBackupBackupPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

GkeBackupBackupPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

GkeBackupBackupPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

GkeBackupBackupPlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

GkeBackupBackupPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GkeBackupBackupPlan resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeBackupBackupPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeBackupBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GkeBackupBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupConfig">BackupConfig</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference">GkeBackupBackupPlanBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupSchedule">BackupSchedule</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference">GkeBackupBackupPlanBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.protectedNamespaceCount">ProtectedNamespaceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.protectedPodCount">ProtectedPodCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference">GkeBackupBackupPlanRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.stateReason">StateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference">GkeBackupBackupPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupConfigInput">BackupConfigInput</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupScheduleInput">BackupScheduleInput</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deactivatedInput">DeactivatedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deactivated">Deactivated</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupConfig`<sup>Required</sup> <a name="BackupConfig" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupConfig"></a>

```csharp
public GkeBackupBackupPlanBackupConfigOutputReference BackupConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference">GkeBackupBackupPlanBackupConfigOutputReference</a>

---

##### `BackupSchedule`<sup>Required</sup> <a name="BackupSchedule" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupSchedule"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleOutputReference BackupSchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference">GkeBackupBackupPlanBackupScheduleOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ProtectedNamespaceCount`<sup>Required</sup> <a name="ProtectedNamespaceCount" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.protectedNamespaceCount"></a>

```csharp
public double ProtectedNamespaceCount { get; }
```

- *Type:* double

---

##### `ProtectedPodCount`<sup>Required</sup> <a name="ProtectedPodCount" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.protectedPodCount"></a>

```csharp
public double ProtectedPodCount { get; }
```

- *Type:* double

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.retentionPolicy"></a>

```csharp
public GkeBackupBackupPlanRetentionPolicyOutputReference RetentionPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference">GkeBackupBackupPlanRetentionPolicyOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.stateReason"></a>

```csharp
public string StateReason { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.timeouts"></a>

```csharp
public GkeBackupBackupPlanTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference">GkeBackupBackupPlanTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `BackupConfigInput`<sup>Optional</sup> <a name="BackupConfigInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupConfigInput"></a>

```csharp
public GkeBackupBackupPlanBackupConfig BackupConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a>

---

##### `BackupScheduleInput`<sup>Optional</sup> <a name="BackupScheduleInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.backupScheduleInput"></a>

```csharp
public GkeBackupBackupPlanBackupSchedule BackupScheduleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `DeactivatedInput`<sup>Optional</sup> <a name="DeactivatedInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deactivatedInput"></a>

```csharp
public bool|IResolvable DeactivatedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.retentionPolicyInput"></a>

```csharp
public GkeBackupBackupPlanRetentionPolicy RetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.timeoutsInput"></a>

```csharp
public IResolvable|GkeBackupBackupPlanTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a>

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Deactivated`<sup>Required</sup> <a name="Deactivated" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deactivated"></a>

```csharp
public bool|IResolvable Deactivated { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeBackupBackupPlanBackupConfig <a name="GkeBackupBackupPlanBackupConfig" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfig {
    bool|IResolvable AllNamespaces = null,
    GkeBackupBackupPlanBackupConfigEncryptionKey EncryptionKey = null,
    bool|IResolvable IncludeSecrets = null,
    bool|IResolvable IncludeVolumeData = null,
    bool|IResolvable PermissiveMode = null,
    GkeBackupBackupPlanBackupConfigSelectedApplications SelectedApplications = null,
    GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels SelectedNamespaceLabels = null,
    GkeBackupBackupPlanBackupConfigSelectedNamespaces SelectedNamespaces = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.allNamespaces">AllNamespaces</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If True, include all namespaced resources. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.includeSecrets">IncludeSecrets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.includeVolumeData">IncludeVolumeData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.permissiveMode">PermissiveMode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | This flag specifies whether Backups will not fail when Backup for GKE detects Kubernetes configuration that is non-standard or requires additional setup to restore. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.selectedApplications">SelectedApplications</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | selected_applications block. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.selectedNamespaceLabels">SelectedNamespaceLabels</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a></code> | selected_namespace_labels block. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.selectedNamespaces">SelectedNamespaces</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | selected_namespaces block. |

---

##### `AllNamespaces`<sup>Optional</sup> <a name="AllNamespaces" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.allNamespaces"></a>

```csharp
public bool|IResolvable AllNamespaces { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If True, include all namespaced resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#all_namespaces GkeBackupBackupPlan#all_namespaces}

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.encryptionKey"></a>

```csharp
public GkeBackupBackupPlanBackupConfigEncryptionKey EncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#encryption_key GkeBackupBackupPlan#encryption_key}

---

##### `IncludeSecrets`<sup>Optional</sup> <a name="IncludeSecrets" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.includeSecrets"></a>

```csharp
public bool|IResolvable IncludeSecrets { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#include_secrets GkeBackupBackupPlan#include_secrets}

---

##### `IncludeVolumeData`<sup>Optional</sup> <a name="IncludeVolumeData" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.includeVolumeData"></a>

```csharp
public bool|IResolvable IncludeVolumeData { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#include_volume_data GkeBackupBackupPlan#include_volume_data}

---

##### `PermissiveMode`<sup>Optional</sup> <a name="PermissiveMode" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.permissiveMode"></a>

```csharp
public bool|IResolvable PermissiveMode { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

This flag specifies whether Backups will not fail when Backup for GKE detects Kubernetes configuration that is non-standard or requires additional setup to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#permissive_mode GkeBackupBackupPlan#permissive_mode}

---

##### `SelectedApplications`<sup>Optional</sup> <a name="SelectedApplications" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.selectedApplications"></a>

```csharp
public GkeBackupBackupPlanBackupConfigSelectedApplications SelectedApplications { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a>

selected_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#selected_applications GkeBackupBackupPlan#selected_applications}

---

##### `SelectedNamespaceLabels`<sup>Optional</sup> <a name="SelectedNamespaceLabels" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.selectedNamespaceLabels"></a>

```csharp
public GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels SelectedNamespaceLabels { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a>

selected_namespace_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#selected_namespace_labels GkeBackupBackupPlan#selected_namespace_labels}

---

##### `SelectedNamespaces`<sup>Optional</sup> <a name="SelectedNamespaces" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig.property.selectedNamespaces"></a>

```csharp
public GkeBackupBackupPlanBackupConfigSelectedNamespaces SelectedNamespaces { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

selected_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#selected_namespaces GkeBackupBackupPlan#selected_namespaces}

---

### GkeBackupBackupPlanBackupConfigEncryptionKey <a name="GkeBackupBackupPlanBackupConfigEncryptionKey" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigEncryptionKey {
    string GcpKmsEncryptionKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey.property.gcpKmsEncryptionKey">GcpKmsEncryptionKey</a></code> | <code>string</code> | Google Cloud KMS encryption key. Format: projects/* /locations/* /keyRings/* /cryptoKeys/*. |

---

##### `GcpKmsEncryptionKey`<sup>Required</sup> <a name="GcpKmsEncryptionKey" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey.property.gcpKmsEncryptionKey"></a>

```csharp
public string GcpKmsEncryptionKey { get; set; }
```

- *Type:* string

Google Cloud KMS encryption key. Format: projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#gcp_kms_encryption_key GkeBackupBackupPlan#gcp_kms_encryption_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GkeBackupBackupPlanBackupConfigSelectedApplications <a name="GkeBackupBackupPlanBackupConfigSelectedApplications" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigSelectedApplications {
    IResolvable|GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames[] NamespacedNames
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications.property.namespacedNames">NamespacedNames</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>[]</code> | namespaced_names block. |

---

##### `NamespacedNames`<sup>Required</sup> <a name="NamespacedNames" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications.property.namespacedNames"></a>

```csharp
public IResolvable|GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames[] NamespacedNames { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>[]

namespaced_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#namespaced_names GkeBackupBackupPlan#namespaced_names}

---

### GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames <a name="GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames {
    string Name,
    string Namespace
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.name">Name</a></code> | <code>string</code> | The name of a Kubernetes Resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.namespace">Namespace</a></code> | <code>string</code> | The namespace of a Kubernetes Resource. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#name GkeBackupBackupPlan#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#namespace GkeBackupBackupPlan#namespace}

---

### GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels <a name="GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels {
    IResolvable|GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels[] ResourceLabels
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels.property.resourceLabels">ResourceLabels</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>[]</code> | resource_labels block. |

---

##### `ResourceLabels`<sup>Required</sup> <a name="ResourceLabels" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels.property.resourceLabels"></a>

```csharp
public IResolvable|GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels[] ResourceLabels { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>[]

resource_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#resource_labels GkeBackupBackupPlan#resource_labels}

---

### GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels <a name="GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.property.key">Key</a></code> | <code>string</code> | The key of the kubernetes label. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.property.value">Value</a></code> | <code>string</code> | The value of the Label. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the kubernetes label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#key GkeBackupBackupPlan#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the Label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#value GkeBackupBackupPlan#value}

---

### GkeBackupBackupPlanBackupConfigSelectedNamespaces <a name="GkeBackupBackupPlanBackupConfigSelectedNamespaces" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigSelectedNamespaces {
    string[] Namespaces
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces.property.namespaces">Namespaces</a></code> | <code>string[]</code> | A list of Kubernetes Namespaces. |

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces.property.namespaces"></a>

```csharp
public string[] Namespaces { get; set; }
```

- *Type:* string[]

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#namespaces GkeBackupBackupPlan#namespaces}

---

### GkeBackupBackupPlanBackupSchedule <a name="GkeBackupBackupPlanBackupSchedule" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupSchedule {
    string CronSchedule = null,
    bool|IResolvable Paused = null,
    GkeBackupBackupPlanBackupScheduleRpoConfig RpoConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.cronSchedule">CronSchedule</a></code> | <code>string</code> | A standard cron string that defines a repeating schedule for creating Backups via this BackupPlan. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.paused">Paused</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | This flag denotes whether automatic Backup creation is paused for this BackupPlan. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.rpoConfig">RpoConfig</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig">GkeBackupBackupPlanBackupScheduleRpoConfig</a></code> | rpo_config block. |

---

##### `CronSchedule`<sup>Optional</sup> <a name="CronSchedule" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.cronSchedule"></a>

```csharp
public string CronSchedule { get; set; }
```

- *Type:* string

A standard cron string that defines a repeating schedule for creating Backups via this BackupPlan.

This is mutually exclusive with the rpoConfig field since at most one
schedule can be defined for a BackupPlan.
If this is defined, then backupRetainDays must also be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#cron_schedule GkeBackupBackupPlan#cron_schedule}

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.paused"></a>

```csharp
public bool|IResolvable Paused { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

This flag denotes whether automatic Backup creation is paused for this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#paused GkeBackupBackupPlan#paused}

---

##### `RpoConfig`<sup>Optional</sup> <a name="RpoConfig" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule.property.rpoConfig"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfig RpoConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig">GkeBackupBackupPlanBackupScheduleRpoConfig</a>

rpo_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#rpo_config GkeBackupBackupPlan#rpo_config}

---

### GkeBackupBackupPlanBackupScheduleRpoConfig <a name="GkeBackupBackupPlanBackupScheduleRpoConfig" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupScheduleRpoConfig {
    double TargetRpoMinutes,
    IResolvable|GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows[] ExclusionWindows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig.property.targetRpoMinutes">TargetRpoMinutes</a></code> | <code>double</code> | Defines the target RPO for the BackupPlan in minutes, which means the target maximum data loss in time that is acceptable for this BackupPlan. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig.property.exclusionWindows">ExclusionWindows</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>[]</code> | exclusion_windows block. |

---

##### `TargetRpoMinutes`<sup>Required</sup> <a name="TargetRpoMinutes" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig.property.targetRpoMinutes"></a>

```csharp
public double TargetRpoMinutes { get; set; }
```

- *Type:* double

Defines the target RPO for the BackupPlan in minutes, which means the target maximum data loss in time that is acceptable for this BackupPlan.

This must be
at least 60, i.e., 1 hour, and at most 86400, i.e., 60 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#target_rpo_minutes GkeBackupBackupPlan#target_rpo_minutes}

---

##### `ExclusionWindows`<sup>Optional</sup> <a name="ExclusionWindows" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig.property.exclusionWindows"></a>

```csharp
public IResolvable|GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows[] ExclusionWindows { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>[]

exclusion_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#exclusion_windows GkeBackupBackupPlan#exclusion_windows}

---

### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows {
    string Duration,
    GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime StartTime,
    bool|IResolvable Daily = null,
    GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek DaysOfWeek = null,
    GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate SingleOccurrenceDate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.duration">Duration</a></code> | <code>string</code> | Specifies duration of the window in seconds with up to nine fractional digits, terminated by 's'. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a></code> | start_time block. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daily">Daily</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The exclusion window occurs every day if set to "True". |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a></code> | days_of_week block. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.singleOccurrenceDate">SingleOccurrenceDate</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a></code> | single_occurrence_date block. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Specifies duration of the window in seconds with up to nine fractional digits, terminated by 's'.

Example: "3.5s". Restrictions for duration based on the
recurrence type to allow some time for backup to happen:

* single_occurrence_date:  no restriction
* daily window: duration < 24 hours
* weekly window:

  * days of week includes all seven days of a week: duration < 24 hours
  * all other weekly window: duration < 168 hours (i.e., 24 * 7 hours)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#duration GkeBackupBackupPlan#duration}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.startTime"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime StartTime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#start_time GkeBackupBackupPlan#start_time}

---

##### `Daily`<sup>Optional</sup> <a name="Daily" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daily"></a>

```csharp
public bool|IResolvable Daily { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The exclusion window occurs every day if set to "True".

Specifying this field to "False" is an error.
Only one of singleOccurrenceDate, daily and daysOfWeek may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#daily GkeBackupBackupPlan#daily}

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daysOfWeek"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek DaysOfWeek { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#days_of_week GkeBackupBackupPlan#days_of_week}

---

##### `SingleOccurrenceDate`<sup>Optional</sup> <a name="SingleOccurrenceDate" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.singleOccurrenceDate"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate SingleOccurrenceDate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

single_occurrence_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#single_occurrence_date GkeBackupBackupPlan#single_occurrence_date}

---

### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek {
    string[] DaysOfWeek = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | A list of days of week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

A list of days of week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#days_of_week GkeBackupBackupPlan#days_of_week}

---

### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate {
    double Day = null,
    double Month = null,
    double Year = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.day">Day</a></code> | <code>double</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.month">Month</a></code> | <code>double</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.year">Year</a></code> | <code>double</code> | Year of the date. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of a month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#day GkeBackupBackupPlan#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#month GkeBackupBackupPlan#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of the date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#year GkeBackupBackupPlan#year}

---

### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime {
    double Hours = null,
    double Minutes = null,
    double Nanos = null,
    double Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.hours">Hours</a></code> | <code>double</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.minutes">Minutes</a></code> | <code>double</code> | Minutes of hour of day. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.nanos">Nanos</a></code> | <code>double</code> | Fractions of seconds in nanoseconds. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.seconds">Seconds</a></code> | <code>double</code> | Seconds of minutes of the time. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Hours of day in 24 hour format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#hours GkeBackupBackupPlan#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Minutes of hour of day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#minutes GkeBackupBackupPlan#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Fractions of seconds in nanoseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#nanos GkeBackupBackupPlan#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Seconds of minutes of the time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#seconds GkeBackupBackupPlan#seconds}

---

### GkeBackupBackupPlanConfig <a name="GkeBackupBackupPlanConfig" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Cluster,
    string Location,
    string Name,
    GkeBackupBackupPlanBackupConfig BackupConfig = null,
    GkeBackupBackupPlanBackupSchedule BackupSchedule = null,
    bool|IResolvable Deactivated = null,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GkeBackupBackupPlanRetentionPolicy RetentionPolicy = null,
    GkeBackupBackupPlanTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.cluster">Cluster</a></code> | <code>string</code> | The source cluster from which Backups will be created via this BackupPlan. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.location">Location</a></code> | <code>string</code> | The region of the Backup Plan. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.name">Name</a></code> | <code>string</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.backupConfig">BackupConfig</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.backupSchedule">BackupSchedule</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a></code> | backup_schedule block. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.deactivated">Deactivated</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | This flag indicates whether this BackupPlan has been deactivated. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.description">Description</a></code> | <code>string</code> | User specified descriptive string for this BackupPlan. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#id GkeBackupBackupPlan#id}. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#project GkeBackupBackupPlan#project}. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The source cluster from which Backups will be created via this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#cluster GkeBackupBackupPlan#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The region of the Backup Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#location GkeBackupBackupPlan#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#name GkeBackupBackupPlan#name}

---

##### `BackupConfig`<sup>Optional</sup> <a name="BackupConfig" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.backupConfig"></a>

```csharp
public GkeBackupBackupPlanBackupConfig BackupConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#backup_config GkeBackupBackupPlan#backup_config}

---

##### `BackupSchedule`<sup>Optional</sup> <a name="BackupSchedule" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.backupSchedule"></a>

```csharp
public GkeBackupBackupPlanBackupSchedule BackupSchedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a>

backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#backup_schedule GkeBackupBackupPlan#backup_schedule}

---

##### `Deactivated`<sup>Optional</sup> <a name="Deactivated" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.deactivated"></a>

```csharp
public bool|IResolvable Deactivated { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

This flag indicates whether this BackupPlan has been deactivated.

Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#deactivated GkeBackupBackupPlan#deactivated}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#deletion_policy GkeBackupBackupPlan#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

User specified descriptive string for this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#description GkeBackupBackupPlan#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#id GkeBackupBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#labels GkeBackupBackupPlan#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#project GkeBackupBackupPlan#project}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.retentionPolicy"></a>

```csharp
public GkeBackupBackupPlanRetentionPolicy RetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#retention_policy GkeBackupBackupPlan#retention_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanConfig.property.timeouts"></a>

```csharp
public GkeBackupBackupPlanTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#timeouts GkeBackupBackupPlan#timeouts}

---

### GkeBackupBackupPlanRetentionPolicy <a name="GkeBackupBackupPlanRetentionPolicy" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanRetentionPolicy {
    double BackupDeleteLockDays = null,
    double BackupRetainDays = null,
    bool|IResolvable Locked = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.backupDeleteLockDays">BackupDeleteLockDays</a></code> | <code>double</code> | Minimum age for a Backup created via this BackupPlan (in days). |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.backupRetainDays">BackupRetainDays</a></code> | <code>double</code> | The default maximum age of a Backup created via this BackupPlan. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.locked">Locked</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | This flag denotes whether the retention policy of this BackupPlan is locked. |

---

##### `BackupDeleteLockDays`<sup>Optional</sup> <a name="BackupDeleteLockDays" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.backupDeleteLockDays"></a>

```csharp
public double BackupDeleteLockDays { get; set; }
```

- *Type:* double

Minimum age for a Backup created via this BackupPlan (in days).

Must be an integer value between 0-90 (inclusive).
A Backup created under this BackupPlan will not be deletable
until it reaches Backup's (create time + backup_delete_lock_days).
Updating this field of a BackupPlan does not affect existing Backups.
Backups created after a successful update will inherit this new value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#backup_delete_lock_days GkeBackupBackupPlan#backup_delete_lock_days}

---

##### `BackupRetainDays`<sup>Optional</sup> <a name="BackupRetainDays" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.backupRetainDays"></a>

```csharp
public double BackupRetainDays { get; set; }
```

- *Type:* double

The default maximum age of a Backup created via this BackupPlan.

This field MUST be an integer value >= 0 and <= 365. If specified,
a Backup created under this BackupPlan will be automatically deleted
after its age reaches (createTime + backupRetainDays).
If not specified, Backups created under this BackupPlan will NOT be
subject to automatic deletion. Updating this field does NOT affect
existing Backups under it. Backups created AFTER a successful update
will automatically pick up the new value.
NOTE: backupRetainDays must be >= backupDeleteLockDays.
If cronSchedule is defined, then this must be <= 360 * the creation interval.
If rpo_config is defined, then this must be
<= 360 * targetRpoMinutes/(1440minutes/day)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#backup_retain_days GkeBackupBackupPlan#backup_retain_days}

---

##### `Locked`<sup>Optional</sup> <a name="Locked" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy.property.locked"></a>

```csharp
public bool|IResolvable Locked { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

This flag denotes whether the retention policy of this BackupPlan is locked.

If set to True, no further update is allowed on this policy, including
the locked field itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#locked GkeBackupBackupPlan#locked}

---

### GkeBackupBackupPlanTimeouts <a name="GkeBackupBackupPlanTimeouts" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#create GkeBackupBackupPlan#create}. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#delete GkeBackupBackupPlan#delete}. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#update GkeBackupBackupPlan#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#create GkeBackupBackupPlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#delete GkeBackupBackupPlan#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_backup_backup_plan#update GkeBackupBackupPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference <a name="GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKeyInput">GcpKmsEncryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKey">GcpKmsEncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcpKmsEncryptionKeyInput`<sup>Optional</sup> <a name="GcpKmsEncryptionKeyInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKeyInput"></a>

```csharp
public string GcpKmsEncryptionKeyInput { get; }
```

- *Type:* string

---

##### `GcpKmsEncryptionKey`<sup>Required</sup> <a name="GcpKmsEncryptionKey" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKey"></a>

```csharp
public string GcpKmsEncryptionKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public GkeBackupBackupPlanBackupConfigEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a>

---


### GkeBackupBackupPlanBackupConfigOutputReference <a name="GkeBackupBackupPlanBackupConfigOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey">PutEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications">PutSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaceLabels">PutSelectedNamespaceLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces">PutSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetAllNamespaces">ResetAllNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetIncludeSecrets">ResetIncludeSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetIncludeVolumeData">ResetIncludeVolumeData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetPermissiveMode">ResetPermissiveMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetSelectedApplications">ResetSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaceLabels">ResetSelectedNamespaceLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaces">ResetSelectedNamespaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionKey` <a name="PutEncryptionKey" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey"></a>

```csharp
private void PutEncryptionKey(GkeBackupBackupPlanBackupConfigEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a>

---

##### `PutSelectedApplications` <a name="PutSelectedApplications" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications"></a>

```csharp
private void PutSelectedApplications(GkeBackupBackupPlanBackupConfigSelectedApplications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a>

---

##### `PutSelectedNamespaceLabels` <a name="PutSelectedNamespaceLabels" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaceLabels"></a>

```csharp
private void PutSelectedNamespaceLabels(GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaceLabels.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a>

---

##### `PutSelectedNamespaces` <a name="PutSelectedNamespaces" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces"></a>

```csharp
private void PutSelectedNamespaces(GkeBackupBackupPlanBackupConfigSelectedNamespaces Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---

##### `ResetAllNamespaces` <a name="ResetAllNamespaces" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetAllNamespaces"></a>

```csharp
private void ResetAllNamespaces()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetEncryptionKey"></a>

```csharp
private void ResetEncryptionKey()
```

##### `ResetIncludeSecrets` <a name="ResetIncludeSecrets" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetIncludeSecrets"></a>

```csharp
private void ResetIncludeSecrets()
```

##### `ResetIncludeVolumeData` <a name="ResetIncludeVolumeData" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetIncludeVolumeData"></a>

```csharp
private void ResetIncludeVolumeData()
```

##### `ResetPermissiveMode` <a name="ResetPermissiveMode" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetPermissiveMode"></a>

```csharp
private void ResetPermissiveMode()
```

##### `ResetSelectedApplications` <a name="ResetSelectedApplications" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetSelectedApplications"></a>

```csharp
private void ResetSelectedApplications()
```

##### `ResetSelectedNamespaceLabels` <a name="ResetSelectedNamespaceLabels" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaceLabels"></a>

```csharp
private void ResetSelectedNamespaceLabels()
```

##### `ResetSelectedNamespaces` <a name="ResetSelectedNamespaces" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaces"></a>

```csharp
private void ResetSelectedNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference">GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplications">SelectedApplications</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference">GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaceLabels">SelectedNamespaceLabels</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaces">SelectedNamespaces</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference">GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.allNamespacesInput">AllNamespacesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeSecretsInput">IncludeSecretsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeDataInput">IncludeVolumeDataInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.permissiveModeInput">PermissiveModeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplicationsInput">SelectedApplicationsInput</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaceLabelsInput">SelectedNamespaceLabelsInput</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespacesInput">SelectedNamespacesInput</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.allNamespaces">AllNamespaces</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeSecrets">IncludeSecrets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeData">IncludeVolumeData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.permissiveMode">PermissiveMode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKey"></a>

```csharp
public GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference EncryptionKey { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference">GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference</a>

---

##### `SelectedApplications`<sup>Required</sup> <a name="SelectedApplications" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplications"></a>

```csharp
public GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference SelectedApplications { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference">GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference</a>

---

##### `SelectedNamespaceLabels`<sup>Required</sup> <a name="SelectedNamespaceLabels" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaceLabels"></a>

```csharp
public GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference SelectedNamespaceLabels { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference</a>

---

##### `SelectedNamespaces`<sup>Required</sup> <a name="SelectedNamespaces" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaces"></a>

```csharp
public GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference SelectedNamespaces { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference">GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference</a>

---

##### `AllNamespacesInput`<sup>Optional</sup> <a name="AllNamespacesInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.allNamespacesInput"></a>

```csharp
public bool|IResolvable AllNamespacesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKeyInput"></a>

```csharp
public GkeBackupBackupPlanBackupConfigEncryptionKey EncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigEncryptionKey">GkeBackupBackupPlanBackupConfigEncryptionKey</a>

---

##### `IncludeSecretsInput`<sup>Optional</sup> <a name="IncludeSecretsInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeSecretsInput"></a>

```csharp
public bool|IResolvable IncludeSecretsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeVolumeDataInput`<sup>Optional</sup> <a name="IncludeVolumeDataInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeDataInput"></a>

```csharp
public bool|IResolvable IncludeVolumeDataInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PermissiveModeInput`<sup>Optional</sup> <a name="PermissiveModeInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.permissiveModeInput"></a>

```csharp
public bool|IResolvable PermissiveModeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SelectedApplicationsInput`<sup>Optional</sup> <a name="SelectedApplicationsInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplicationsInput"></a>

```csharp
public GkeBackupBackupPlanBackupConfigSelectedApplications SelectedApplicationsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a>

---

##### `SelectedNamespaceLabelsInput`<sup>Optional</sup> <a name="SelectedNamespaceLabelsInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaceLabelsInput"></a>

```csharp
public GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels SelectedNamespaceLabelsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a>

---

##### `SelectedNamespacesInput`<sup>Optional</sup> <a name="SelectedNamespacesInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespacesInput"></a>

```csharp
public GkeBackupBackupPlanBackupConfigSelectedNamespaces SelectedNamespacesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---

##### `AllNamespaces`<sup>Required</sup> <a name="AllNamespaces" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.allNamespaces"></a>

```csharp
public bool|IResolvable AllNamespaces { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeSecrets`<sup>Required</sup> <a name="IncludeSecrets" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeSecrets"></a>

```csharp
public bool|IResolvable IncludeSecrets { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeVolumeData`<sup>Required</sup> <a name="IncludeVolumeData" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeData"></a>

```csharp
public bool|IResolvable IncludeVolumeData { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PermissiveMode`<sup>Required</sup> <a name="PermissiveMode" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.permissiveMode"></a>

```csharp
public bool|IResolvable PermissiveMode { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigOutputReference.property.internalValue"></a>

```csharp
public GkeBackupBackupPlanBackupConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfig">GkeBackupBackupPlanBackupConfig</a>

---


### GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList <a name="GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get"></a>

```csharp
private GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.internalValue"></a>

```csharp
public IResolvable|GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>[]

---


### GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference <a name="GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>

---


### GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference <a name="GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames">PutNamespacedNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNamespacedNames` <a name="PutNamespacedNames" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames"></a>

```csharp
private void PutNamespacedNames(IResolvable|GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNames">NamespacedNames</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNamesInput">NamespacedNamesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamespacedNames`<sup>Required</sup> <a name="NamespacedNames" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNames"></a>

```csharp
public GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList NamespacedNames { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList</a>

---

##### `NamespacedNamesInput`<sup>Optional</sup> <a name="NamespacedNamesInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNamesInput"></a>

```csharp
public IResolvable|GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames[] NamespacedNamesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.internalValue"></a>

```csharp
public GkeBackupBackupPlanBackupConfigSelectedApplications InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedApplications">GkeBackupBackupPlanBackupConfigSelectedApplications</a>

---


### GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference <a name="GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.putResourceLabels">PutResourceLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceLabels` <a name="PutResourceLabels" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.putResourceLabels"></a>

```csharp
private void PutResourceLabels(IResolvable|GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.putResourceLabels.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.resourceLabels">ResourceLabels</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.resourceLabelsInput">ResourceLabelsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceLabels`<sup>Required</sup> <a name="ResourceLabels" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.resourceLabels"></a>

```csharp
public GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList ResourceLabels { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList</a>

---

##### `ResourceLabelsInput`<sup>Optional</sup> <a name="ResourceLabelsInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.resourceLabelsInput"></a>

```csharp
public IResolvable|GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels[] ResourceLabelsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.internalValue"></a>

```csharp
public GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a>

---


### GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList <a name="GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.get"></a>

```csharp
private GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.internalValue"></a>

```csharp
public IResolvable|GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>[]

---


### GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference <a name="GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>

---


### GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference <a name="GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespaces">Namespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespacesInput"></a>

```csharp
public string[] NamespacesInput { get; }
```

- *Type:* string[]

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespaces"></a>

```csharp
public string[] Namespaces { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.internalValue"></a>

```csharp
public GkeBackupBackupPlanBackupConfigSelectedNamespaces InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupConfigSelectedNamespaces">GkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---


### GkeBackupBackupPlanBackupScheduleOutputReference <a name="GkeBackupBackupPlanBackupScheduleOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.putRpoConfig">PutRpoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetCronSchedule">ResetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetPaused">ResetPaused</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetRpoConfig">ResetRpoConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRpoConfig` <a name="PutRpoConfig" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.putRpoConfig"></a>

```csharp
private void PutRpoConfig(GkeBackupBackupPlanBackupScheduleRpoConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.putRpoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig">GkeBackupBackupPlanBackupScheduleRpoConfig</a>

---

##### `ResetCronSchedule` <a name="ResetCronSchedule" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetCronSchedule"></a>

```csharp
private void ResetCronSchedule()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetPaused"></a>

```csharp
private void ResetPaused()
```

##### `ResetRpoConfig` <a name="ResetRpoConfig" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.resetRpoConfig"></a>

```csharp
private void ResetRpoConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfig">RpoConfig</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.cronScheduleInput">CronScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.pausedInput">PausedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfigInput">RpoConfigInput</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig">GkeBackupBackupPlanBackupScheduleRpoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.cronSchedule">CronSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.paused">Paused</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RpoConfig`<sup>Required</sup> <a name="RpoConfig" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfig"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference RpoConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference</a>

---

##### `CronScheduleInput`<sup>Optional</sup> <a name="CronScheduleInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.cronScheduleInput"></a>

```csharp
public string CronScheduleInput { get; }
```

- *Type:* string

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.pausedInput"></a>

```csharp
public bool|IResolvable PausedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RpoConfigInput`<sup>Optional</sup> <a name="RpoConfigInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfigInput"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfig RpoConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig">GkeBackupBackupPlanBackupScheduleRpoConfig</a>

---

##### `CronSchedule`<sup>Required</sup> <a name="CronSchedule" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.cronSchedule"></a>

```csharp
public string CronSchedule { get; }
```

- *Type:* string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.paused"></a>

```csharp
public bool|IResolvable Paused { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleOutputReference.property.internalValue"></a>

```csharp
public GkeBackupBackupPlanBackupSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupSchedule">GkeBackupBackupPlanBackupSchedule</a>

---


### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

---


### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.get"></a>

```csharp
private GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.internalValue"></a>

```csharp
public IResolvable|GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>[]

---


### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putDaysOfWeek">PutDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putSingleOccurrenceDate">PutSingleOccurrenceDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaily">ResetDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetSingleOccurrenceDate">ResetSingleOccurrenceDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDaysOfWeek` <a name="PutDaysOfWeek" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putDaysOfWeek"></a>

```csharp
private void PutDaysOfWeek(GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

---

##### `PutSingleOccurrenceDate` <a name="PutSingleOccurrenceDate" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putSingleOccurrenceDate"></a>

```csharp
private void PutSingleOccurrenceDate(GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putSingleOccurrenceDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

---

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putStartTime"></a>

```csharp
private void PutStartTime(GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

---

##### `ResetDaily` <a name="ResetDaily" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaily"></a>

```csharp
private void ResetDaily()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetSingleOccurrenceDate` <a name="ResetSingleOccurrenceDate" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetSingleOccurrenceDate"></a>

```csharp
private void ResetSingleOccurrenceDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDate">SingleOccurrenceDate</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.dailyInput">DailyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDateInput">SingleOccurrenceDateInput</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daily">Daily</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeek"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference DaysOfWeek { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference</a>

---

##### `SingleOccurrenceDate`<sup>Required</sup> <a name="SingleOccurrenceDate" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDate"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference SingleOccurrenceDate { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTime"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference StartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference</a>

---

##### `DailyInput`<sup>Optional</sup> <a name="DailyInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.dailyInput"></a>

```csharp
public bool|IResolvable DailyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeekInput"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek DaysOfWeekInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `SingleOccurrenceDateInput`<sup>Optional</sup> <a name="SingleOccurrenceDateInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDateInput"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate SingleOccurrenceDateInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTimeInput"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime StartTimeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

---

##### `Daily`<sup>Required</sup> <a name="Daily" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daily"></a>

```csharp
public bool|IResolvable Daily { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>

---


### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetMonth"></a>

```csharp
private void ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetYear"></a>

```csharp
private void ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.internalValue"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

---


### GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference <a name="GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.internalValue"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

---


### GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference <a name="GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.putExclusionWindows">PutExclusionWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resetExclusionWindows">ResetExclusionWindows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusionWindows` <a name="PutExclusionWindows" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.putExclusionWindows"></a>

```csharp
private void PutExclusionWindows(IResolvable|GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.putExclusionWindows.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>[]

---

##### `ResetExclusionWindows` <a name="ResetExclusionWindows" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resetExclusionWindows"></a>

```csharp
private void ResetExclusionWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindows">ExclusionWindows</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindowsInput">ExclusionWindowsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutesInput">TargetRpoMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutes">TargetRpoMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig">GkeBackupBackupPlanBackupScheduleRpoConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExclusionWindows`<sup>Required</sup> <a name="ExclusionWindows" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindows"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList ExclusionWindows { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList</a>

---

##### `ExclusionWindowsInput`<sup>Optional</sup> <a name="ExclusionWindowsInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindowsInput"></a>

```csharp
public IResolvable|GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows[] ExclusionWindowsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>[]

---

##### `TargetRpoMinutesInput`<sup>Optional</sup> <a name="TargetRpoMinutesInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutesInput"></a>

```csharp
public double TargetRpoMinutesInput { get; }
```

- *Type:* double

---

##### `TargetRpoMinutes`<sup>Required</sup> <a name="TargetRpoMinutes" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutes"></a>

```csharp
public double TargetRpoMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.internalValue"></a>

```csharp
public GkeBackupBackupPlanBackupScheduleRpoConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanBackupScheduleRpoConfig">GkeBackupBackupPlanBackupScheduleRpoConfig</a>

---


### GkeBackupBackupPlanRetentionPolicyOutputReference <a name="GkeBackupBackupPlanRetentionPolicyOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupDeleteLockDays">ResetBackupDeleteLockDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupRetainDays">ResetBackupRetainDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetLocked">ResetLocked</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupDeleteLockDays` <a name="ResetBackupDeleteLockDays" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupDeleteLockDays"></a>

```csharp
private void ResetBackupDeleteLockDays()
```

##### `ResetBackupRetainDays` <a name="ResetBackupRetainDays" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupRetainDays"></a>

```csharp
private void ResetBackupRetainDays()
```

##### `ResetLocked` <a name="ResetLocked" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.resetLocked"></a>

```csharp
private void ResetLocked()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDaysInput">BackupDeleteLockDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDaysInput">BackupRetainDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.lockedInput">LockedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDays">BackupDeleteLockDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDays">BackupRetainDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.locked">Locked</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupDeleteLockDaysInput`<sup>Optional</sup> <a name="BackupDeleteLockDaysInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDaysInput"></a>

```csharp
public double BackupDeleteLockDaysInput { get; }
```

- *Type:* double

---

##### `BackupRetainDaysInput`<sup>Optional</sup> <a name="BackupRetainDaysInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDaysInput"></a>

```csharp
public double BackupRetainDaysInput { get; }
```

- *Type:* double

---

##### `LockedInput`<sup>Optional</sup> <a name="LockedInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.lockedInput"></a>

```csharp
public bool|IResolvable LockedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BackupDeleteLockDays`<sup>Required</sup> <a name="BackupDeleteLockDays" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDays"></a>

```csharp
public double BackupDeleteLockDays { get; }
```

- *Type:* double

---

##### `BackupRetainDays`<sup>Required</sup> <a name="BackupRetainDays" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDays"></a>

```csharp
public double BackupRetainDays { get; }
```

- *Type:* double

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.locked"></a>

```csharp
public bool|IResolvable Locked { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public GkeBackupBackupPlanRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanRetentionPolicy">GkeBackupBackupPlanRetentionPolicy</a>

---


### GkeBackupBackupPlanTimeoutsOutputReference <a name="GkeBackupBackupPlanTimeoutsOutputReference" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeBackupBackupPlanTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GkeBackupBackupPlanTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeBackupBackupPlan.GkeBackupBackupPlanTimeouts">GkeBackupBackupPlanTimeouts</a>

---



