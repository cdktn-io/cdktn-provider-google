# `gkeHubRolloutSequence` Submodule <a name="`gkeHubRolloutSequence` Submodule" id="@cdktn/provider-google.gkeHubRolloutSequence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubRolloutSequence <a name="GkeHubRolloutSequence" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence google_gke_hub_rollout_sequence}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequence(Construct Scope, string Id, GkeHubRolloutSequenceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig">GkeHubRolloutSequenceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig">GkeHubRolloutSequenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putAutoUpgradeConfig">PutAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putIgnoredClustersSelector">PutIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putStages">PutStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetAutoUpgradeConfig">ResetAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetIgnoredClustersSelector">ResetIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetMinControlPlaneVersion">ResetMinControlPlaneVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetMinNodeVersion">ResetMinNodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoUpgradeConfig` <a name="PutAutoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putAutoUpgradeConfig"></a>

```csharp
private void PutAutoUpgradeConfig(GkeHubRolloutSequenceAutoUpgradeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putAutoUpgradeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `PutIgnoredClustersSelector` <a name="PutIgnoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putIgnoredClustersSelector"></a>

```csharp
private void PutIgnoredClustersSelector(GkeHubRolloutSequenceIgnoredClustersSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putIgnoredClustersSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `PutStages` <a name="PutStages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putStages"></a>

```csharp
private void PutStages(IResolvable|GkeHubRolloutSequenceStages[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putStages.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putTimeouts"></a>

```csharp
private void PutTimeouts(GkeHubRolloutSequenceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

---

##### `ResetAutoUpgradeConfig` <a name="ResetAutoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetAutoUpgradeConfig"></a>

```csharp
private void ResetAutoUpgradeConfig()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoredClustersSelector` <a name="ResetIgnoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetIgnoredClustersSelector"></a>

```csharp
private void ResetIgnoredClustersSelector()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMinControlPlaneVersion` <a name="ResetMinControlPlaneVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetMinControlPlaneVersion"></a>

```csharp
private void ResetMinControlPlaneVersion()
```

##### `ResetMinNodeVersion` <a name="ResetMinNodeVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetMinNodeVersion"></a>

```csharp
private void ResetMinNodeVersion()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GkeHubRolloutSequence resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

GkeHubRolloutSequence.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

GkeHubRolloutSequence.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

GkeHubRolloutSequence.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

GkeHubRolloutSequence.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GkeHubRolloutSequence resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeHubRolloutSequence to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeHubRolloutSequence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GkeHubRolloutSequence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfig">AutoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelector">IgnoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.operationalState">OperationalState</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList">GkeHubRolloutSequenceOperationalStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stages">Stages</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList">GkeHubRolloutSequenceStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.targetControlPlaneVersion">TargetControlPlaneVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.targetNodeVersion">TargetNodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference">GkeHubRolloutSequenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfigInput">AutoUpgradeConfigInput</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelectorInput">IgnoredClustersSelectorInput</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minControlPlaneVersionInput">MinControlPlaneVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minNodeVersionInput">MinNodeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceIdInput">RolloutSequenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stagesInput">StagesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minControlPlaneVersion">MinControlPlaneVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minNodeVersion">MinNodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceId">RolloutSequenceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoUpgradeConfig`<sup>Required</sup> <a name="AutoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfig"></a>

```csharp
public GkeHubRolloutSequenceAutoUpgradeConfigOutputReference AutoUpgradeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `IgnoredClustersSelector`<sup>Required</sup> <a name="IgnoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelector"></a>

```csharp
public GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference IgnoredClustersSelector { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OperationalState`<sup>Required</sup> <a name="OperationalState" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.operationalState"></a>

```csharp
public GkeHubRolloutSequenceOperationalStateList OperationalState { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList">GkeHubRolloutSequenceOperationalStateList</a>

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stages"></a>

```csharp
public GkeHubRolloutSequenceStagesList Stages { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList">GkeHubRolloutSequenceStagesList</a>

---

##### `TargetControlPlaneVersion`<sup>Required</sup> <a name="TargetControlPlaneVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.targetControlPlaneVersion"></a>

```csharp
public string TargetControlPlaneVersion { get; }
```

- *Type:* string

---

##### `TargetNodeVersion`<sup>Required</sup> <a name="TargetNodeVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.targetNodeVersion"></a>

```csharp
public string TargetNodeVersion { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeouts"></a>

```csharp
public GkeHubRolloutSequenceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference">GkeHubRolloutSequenceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AutoUpgradeConfigInput`<sup>Optional</sup> <a name="AutoUpgradeConfigInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfigInput"></a>

```csharp
public GkeHubRolloutSequenceAutoUpgradeConfig AutoUpgradeConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoredClustersSelectorInput`<sup>Optional</sup> <a name="IgnoredClustersSelectorInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelectorInput"></a>

```csharp
public GkeHubRolloutSequenceIgnoredClustersSelector IgnoredClustersSelectorInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MinControlPlaneVersionInput`<sup>Optional</sup> <a name="MinControlPlaneVersionInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minControlPlaneVersionInput"></a>

```csharp
public string MinControlPlaneVersionInput { get; }
```

- *Type:* string

---

##### `MinNodeVersionInput`<sup>Optional</sup> <a name="MinNodeVersionInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minNodeVersionInput"></a>

```csharp
public string MinNodeVersionInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RolloutSequenceIdInput`<sup>Optional</sup> <a name="RolloutSequenceIdInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceIdInput"></a>

```csharp
public string RolloutSequenceIdInput { get; }
```

- *Type:* string

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stagesInput"></a>

```csharp
public IResolvable|GkeHubRolloutSequenceStages[] StagesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeoutsInput"></a>

```csharp
public IResolvable|GkeHubRolloutSequenceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MinControlPlaneVersion`<sup>Required</sup> <a name="MinControlPlaneVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minControlPlaneVersion"></a>

```csharp
public string MinControlPlaneVersion { get; }
```

- *Type:* string

---

##### `MinNodeVersion`<sup>Required</sup> <a name="MinNodeVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minNodeVersion"></a>

```csharp
public string MinNodeVersion { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RolloutSequenceId`<sup>Required</sup> <a name="RolloutSequenceId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceId"></a>

```csharp
public string RolloutSequenceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubRolloutSequenceAutoUpgradeConfig <a name="GkeHubRolloutSequenceAutoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceAutoUpgradeConfig {
    GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope RolloutCreationScope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope">RolloutCreationScope</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | rollout_creation_scope block. |

---

##### `RolloutCreationScope`<sup>Optional</sup> <a name="RolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope"></a>

```csharp
public GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope RolloutCreationScope { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

rollout_creation_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#rollout_creation_scope GkeHubRolloutSequence#rollout_creation_scope}

---

### GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope <a name="GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope {
    string[] UpgradeTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes">UpgradeTypes</a></code> | <code>string[]</code> | The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'. |

---

##### `UpgradeTypes`<sup>Optional</sup> <a name="UpgradeTypes" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes"></a>

```csharp
public string[] UpgradeTypes { get; set; }
```

- *Type:* string[]

The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#upgrade_types GkeHubRolloutSequence#upgrade_types}

---

### GkeHubRolloutSequenceConfig <a name="GkeHubRolloutSequenceConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RolloutSequenceId,
    IResolvable|GkeHubRolloutSequenceStages[] Stages,
    GkeHubRolloutSequenceAutoUpgradeConfig AutoUpgradeConfig = null,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    GkeHubRolloutSequenceIgnoredClustersSelector IgnoredClustersSelector = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string MinControlPlaneVersion = null,
    string MinNodeVersion = null,
    string Project = null,
    GkeHubRolloutSequenceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.rolloutSequenceId">RolloutSequenceId</a></code> | <code>string</code> | The user-provided identifier of the RolloutSequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.stages">Stages</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>[]</code> | stages block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.autoUpgradeConfig">AutoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a></code> | auto_upgrade_config block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human readable display name of the Rollout Sequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#id GkeHubRolloutSequence#id}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.ignoredClustersSelector">IgnoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a></code> | ignored_clusters_selector block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels for this Rollout Sequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.minControlPlaneVersion">MinControlPlaneVersion</a></code> | <code>string</code> | Minimum control plane version that the clusters in the sequence should be upgraded to. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.minNodeVersion">MinNodeVersion</a></code> | <code>string</code> | Minimum node version that the clusters in the sequence should be upgraded to. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#project GkeHubRolloutSequence#project}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RolloutSequenceId`<sup>Required</sup> <a name="RolloutSequenceId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.rolloutSequenceId"></a>

```csharp
public string RolloutSequenceId { get; set; }
```

- *Type:* string

The user-provided identifier of the RolloutSequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#rollout_sequence_id GkeHubRolloutSequence#rollout_sequence_id}

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.stages"></a>

```csharp
public IResolvable|GkeHubRolloutSequenceStages[] Stages { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>[]

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#stages GkeHubRolloutSequence#stages}

---

##### `AutoUpgradeConfig`<sup>Optional</sup> <a name="AutoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.autoUpgradeConfig"></a>

```csharp
public GkeHubRolloutSequenceAutoUpgradeConfig AutoUpgradeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

auto_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#auto_upgrade_config GkeHubRolloutSequence#auto_upgrade_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#deletion_policy GkeHubRolloutSequence#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human readable display name of the Rollout Sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#display_name GkeHubRolloutSequence#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#id GkeHubRolloutSequence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoredClustersSelector`<sup>Optional</sup> <a name="IgnoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.ignoredClustersSelector"></a>

```csharp
public GkeHubRolloutSequenceIgnoredClustersSelector IgnoredClustersSelector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

ignored_clusters_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#ignored_clusters_selector GkeHubRolloutSequence#ignored_clusters_selector}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels for this Rollout Sequence.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#labels GkeHubRolloutSequence#labels}

---

##### `MinControlPlaneVersion`<sup>Optional</sup> <a name="MinControlPlaneVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.minControlPlaneVersion"></a>

```csharp
public string MinControlPlaneVersion { get; set; }
```

- *Type:* string

Minimum control plane version that the clusters in the sequence should be upgraded to.

Setting this field will cause the creation of a rollout to the specified version.
Any rollout of the same type already running on the first stage of the sequence will be cancelled to allow for the creation of the new rollout.
Should be a valid [semantic version](https://semver.org/).
Version aliases are supported, as described in the [cluster version docs](https://docs.cloud.google.com/kubernetes-engine/versioning#specifying_cluster_version).
Note that the 'latest' and '-' aliases are not supported for this field.
Supported formats: '1.X', '1.X.Y', '1.X.Y-gke.N'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#min_control_plane_version GkeHubRolloutSequence#min_control_plane_version}

---

##### `MinNodeVersion`<sup>Optional</sup> <a name="MinNodeVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.minNodeVersion"></a>

```csharp
public string MinNodeVersion { get; set; }
```

- *Type:* string

Minimum node version that the clusters in the sequence should be upgraded to.

Setting this field will cause the creation of a rollout to the specified version.
Any rollout of the same type already running on the first stage of the sequence will be cancelled to allow for the creation of the new rollout.
Should be a valid [semantic version](https://semver.org/).
Version aliases are supported, as described in the [cluster version docs](https://docs.cloud.google.com/kubernetes-engine/versioning#specifying_cluster_version).
Note that the 'latest' and '-' aliases are not supported for this field.
Supported formats: '1.X', '1.X.Y', '1.X.Y-gke.N'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#min_node_version GkeHubRolloutSequence#min_node_version}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#project GkeHubRolloutSequence#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.timeouts"></a>

```csharp
public GkeHubRolloutSequenceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#timeouts GkeHubRolloutSequence#timeouts}

---

### GkeHubRolloutSequenceIgnoredClustersSelector <a name="GkeHubRolloutSequenceIgnoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceIgnoredClustersSelector {
    string LabelSelector
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector">LabelSelector</a></code> | <code>string</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector"></a>

```csharp
public string LabelSelector { get; set; }
```

- *Type:* string

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#label_selector GkeHubRolloutSequence#label_selector}

---

### GkeHubRolloutSequenceOperationalState <a name="GkeHubRolloutSequenceOperationalState" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceOperationalState {

};
```


### GkeHubRolloutSequenceStages <a name="GkeHubRolloutSequenceStages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceStages {
    string[] FleetProjects,
    GkeHubRolloutSequenceStagesClusterSelector ClusterSelector = null,
    string SoakDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.fleetProjects">FleetProjects</a></code> | <code>string[]</code> | List of Fleet projects to select the clusters from. Expected format: projects/{project}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.clusterSelector">ClusterSelector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a></code> | cluster_selector block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.soakDuration">SoakDuration</a></code> | <code>string</code> | Soak time after upgrading all the clusters in the stage. Has to be specified in seconds, minutes, hours or days. |

---

##### `FleetProjects`<sup>Required</sup> <a name="FleetProjects" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.fleetProjects"></a>

```csharp
public string[] FleetProjects { get; set; }
```

- *Type:* string[]

List of Fleet projects to select the clusters from. Expected format: projects/{project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#fleet_projects GkeHubRolloutSequence#fleet_projects}

---

##### `ClusterSelector`<sup>Optional</sup> <a name="ClusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.clusterSelector"></a>

```csharp
public GkeHubRolloutSequenceStagesClusterSelector ClusterSelector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

cluster_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#cluster_selector GkeHubRolloutSequence#cluster_selector}

---

##### `SoakDuration`<sup>Optional</sup> <a name="SoakDuration" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.soakDuration"></a>

```csharp
public string SoakDuration { get; set; }
```

- *Type:* string

Soak time after upgrading all the clusters in the stage. Has to be specified in seconds, minutes, hours or days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#soak_duration GkeHubRolloutSequence#soak_duration}

---

### GkeHubRolloutSequenceStagesClusterSelector <a name="GkeHubRolloutSequenceStagesClusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceStagesClusterSelector {
    string LabelSelector
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector.property.labelSelector">LabelSelector</a></code> | <code>string</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector.property.labelSelector"></a>

```csharp
public string LabelSelector { get; set; }
```

- *Type:* string

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#label_selector GkeHubRolloutSequence#label_selector}

---

### GkeHubRolloutSequenceTimeouts <a name="GkeHubRolloutSequenceTimeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#create GkeHubRolloutSequence#create}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#delete GkeHubRolloutSequence#delete}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#update GkeHubRolloutSequence#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#create GkeHubRolloutSequence#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#delete GkeHubRolloutSequence#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/gke_hub_rollout_sequence#update GkeHubRolloutSequence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubRolloutSequenceAutoUpgradeConfigOutputReference <a name="GkeHubRolloutSequenceAutoUpgradeConfigOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceAutoUpgradeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope">PutRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope">ResetRolloutCreationScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRolloutCreationScope` <a name="PutRolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope"></a>

```csharp
private void PutRolloutCreationScope(GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `ResetRolloutCreationScope` <a name="ResetRolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope"></a>

```csharp
private void ResetRolloutCreationScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope">RolloutCreationScope</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput">RolloutCreationScopeInput</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RolloutCreationScope`<sup>Required</sup> <a name="RolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope"></a>

```csharp
public GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference RolloutCreationScope { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a>

---

##### `RolloutCreationScopeInput`<sup>Optional</sup> <a name="RolloutCreationScopeInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput"></a>

```csharp
public GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope RolloutCreationScopeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue"></a>

```csharp
public GkeHubRolloutSequenceAutoUpgradeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

---


### GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference <a name="GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes">ResetUpgradeTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUpgradeTypes` <a name="ResetUpgradeTypes" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes"></a>

```csharp
private void ResetUpgradeTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput">UpgradeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes">UpgradeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UpgradeTypesInput`<sup>Optional</sup> <a name="UpgradeTypesInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput"></a>

```csharp
public string[] UpgradeTypesInput { get; }
```

- *Type:* string[]

---

##### `UpgradeTypes`<sup>Required</sup> <a name="UpgradeTypes" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes"></a>

```csharp
public string[] UpgradeTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue"></a>

```csharp
public GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---


### GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference <a name="GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput">LabelSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector">LabelSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelSelectorInput`<sup>Optional</sup> <a name="LabelSelectorInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput"></a>

```csharp
public string LabelSelectorInput { get; }
```

- *Type:* string

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector"></a>

```csharp
public string LabelSelector { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue"></a>

```csharp
public GkeHubRolloutSequenceIgnoredClustersSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

---


### GkeHubRolloutSequenceOperationalStateList <a name="GkeHubRolloutSequenceOperationalStateList" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceOperationalStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.get"></a>

```csharp
private GkeHubRolloutSequenceOperationalStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GkeHubRolloutSequenceOperationalStateOutputReference <a name="GkeHubRolloutSequenceOperationalStateOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceOperationalStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalState">GkeHubRolloutSequenceOperationalState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.internalValue"></a>

```csharp
public GkeHubRolloutSequenceOperationalState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalState">GkeHubRolloutSequenceOperationalState</a>

---


### GkeHubRolloutSequenceStagesClusterSelectorOutputReference <a name="GkeHubRolloutSequenceStagesClusterSelectorOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceStagesClusterSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput">LabelSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector">LabelSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelSelectorInput`<sup>Optional</sup> <a name="LabelSelectorInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput"></a>

```csharp
public string LabelSelectorInput { get; }
```

- *Type:* string

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector"></a>

```csharp
public string LabelSelector { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue"></a>

```csharp
public GkeHubRolloutSequenceStagesClusterSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

---


### GkeHubRolloutSequenceStagesList <a name="GkeHubRolloutSequenceStagesList" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceStagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.get"></a>

```csharp
private GkeHubRolloutSequenceStagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.internalValue"></a>

```csharp
public IResolvable|GkeHubRolloutSequenceStages[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>[]

---


### GkeHubRolloutSequenceStagesOutputReference <a name="GkeHubRolloutSequenceStagesOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceStagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.putClusterSelector">PutClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetClusterSelector">ResetClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetSoakDuration">ResetSoakDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterSelector` <a name="PutClusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.putClusterSelector"></a>

```csharp
private void PutClusterSelector(GkeHubRolloutSequenceStagesClusterSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.putClusterSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `ResetClusterSelector` <a name="ResetClusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetClusterSelector"></a>

```csharp
private void ResetClusterSelector()
```

##### `ResetSoakDuration` <a name="ResetSoakDuration" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetSoakDuration"></a>

```csharp
private void ResetSoakDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelector">ClusterSelector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference">GkeHubRolloutSequenceStagesClusterSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput">ClusterSelectorInput</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput">FleetProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput">SoakDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjects">FleetProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDuration">SoakDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterSelector`<sup>Required</sup> <a name="ClusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelector"></a>

```csharp
public GkeHubRolloutSequenceStagesClusterSelectorOutputReference ClusterSelector { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference">GkeHubRolloutSequenceStagesClusterSelectorOutputReference</a>

---

##### `ClusterSelectorInput`<sup>Optional</sup> <a name="ClusterSelectorInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput"></a>

```csharp
public GkeHubRolloutSequenceStagesClusterSelector ClusterSelectorInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `FleetProjectsInput`<sup>Optional</sup> <a name="FleetProjectsInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput"></a>

```csharp
public string[] FleetProjectsInput { get; }
```

- *Type:* string[]

---

##### `SoakDurationInput`<sup>Optional</sup> <a name="SoakDurationInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput"></a>

```csharp
public string SoakDurationInput { get; }
```

- *Type:* string

---

##### `FleetProjects`<sup>Required</sup> <a name="FleetProjects" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjects"></a>

```csharp
public string[] FleetProjects { get; }
```

- *Type:* string[]

---

##### `SoakDuration`<sup>Required</sup> <a name="SoakDuration" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDuration"></a>

```csharp
public string SoakDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GkeHubRolloutSequenceStages InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>

---


### GkeHubRolloutSequenceTimeoutsOutputReference <a name="GkeHubRolloutSequenceTimeoutsOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new GkeHubRolloutSequenceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GkeHubRolloutSequenceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

---



