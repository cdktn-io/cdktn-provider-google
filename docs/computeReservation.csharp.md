# `computeReservation` Submodule <a name="`computeReservation` Submodule" id="@cdktn/provider-google.computeReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeReservation <a name="ComputeReservation" id="@cdktn/provider-google.computeReservation.ComputeReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation google_compute_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservation(Construct Scope, string Id, ComputeReservationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig">ComputeReservationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig">ComputeReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putDeleteAfterDuration">PutDeleteAfterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putReservationSharingPolicy">PutReservationSharingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putShareSettings">PutShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putSpecificReservation">PutSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetDeleteAfterDuration">ResetDeleteAfterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetDeleteAtTime">ResetDeleteAtTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetReservationSharingPolicy">ResetReservationSharingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetShareSettings">ResetShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetSpecificReservationRequired">ResetSpecificReservationRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeReservation.ComputeReservation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.computeReservation.ComputeReservation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeReservation.ComputeReservation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.computeReservation.ComputeReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeReservation.ComputeReservation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeReservation.ComputeReservation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.computeReservation.ComputeReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeReservation.ComputeReservation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeReservation.ComputeReservation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeReservation.ComputeReservation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeReservation.ComputeReservation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeReservation.ComputeReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeReservation.ComputeReservation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeReservation.ComputeReservation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeReservation.ComputeReservation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeReservation.ComputeReservation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeleteAfterDuration` <a name="PutDeleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservation.putDeleteAfterDuration"></a>

```csharp
private void PutDeleteAfterDuration(ComputeReservationDeleteAfterDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putDeleteAfterDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a>

---

##### `PutParams` <a name="PutParams" id="@cdktn/provider-google.computeReservation.ComputeReservation.putParams"></a>

```csharp
private void PutParams(ComputeReservationParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a>

---

##### `PutReservationSharingPolicy` <a name="PutReservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.putReservationSharingPolicy"></a>

```csharp
private void PutReservationSharingPolicy(ComputeReservationReservationSharingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putReservationSharingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a>

---

##### `PutShareSettings` <a name="PutShareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservation.putShareSettings"></a>

```csharp
private void PutShareSettings(ComputeReservationShareSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putShareSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a>

---

##### `PutSpecificReservation` <a name="PutSpecificReservation" id="@cdktn/provider-google.computeReservation.ComputeReservation.putSpecificReservation"></a>

```csharp
private void PutSpecificReservation(ComputeReservationSpecificReservation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeReservation.ComputeReservation.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeReservationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a>

---

##### `ResetDeleteAfterDuration` <a name="ResetDeleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetDeleteAfterDuration"></a>

```csharp
private void ResetDeleteAfterDuration()
```

##### `ResetDeleteAtTime` <a name="ResetDeleteAtTime" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetDeleteAtTime"></a>

```csharp
private void ResetDeleteAtTime()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReservationSharingPolicy` <a name="ResetReservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetReservationSharingPolicy"></a>

```csharp
private void ResetReservationSharingPolicy()
```

##### `ResetShareSettings` <a name="ResetShareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetShareSettings"></a>

```csharp
private void ResetShareSettings()
```

##### `ResetSpecificReservationRequired` <a name="ResetSpecificReservationRequired" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetSpecificReservationRequired"></a>

```csharp
private void ResetSpecificReservationRequired()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeReservation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeReservation.ComputeReservation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeReservation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeReservation.ComputeReservation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeReservation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeReservation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeReservation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComputeReservation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeReservation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComputeReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.blockNames">BlockNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.commitment">Commitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAfterDuration">DeleteAfterDuration</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference">ComputeReservationDeleteAfterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.linkedCommitments">LinkedCommitments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference">ComputeReservationParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationBlockCount">ReservationBlockCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationSharingPolicy">ReservationSharingPolicy</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference">ComputeReservationReservationSharingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.resourceStatus">ResourceStatus</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList">ComputeReservationResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.satisfiesPzs">SatisfiesPzs</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference">ComputeReservationShareSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference">ComputeReservationSpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference">ComputeReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAfterDurationInput">DeleteAfterDurationInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAtTimeInput">DeleteAtTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationSharingPolicyInput">ReservationSharingPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.shareSettingsInput">ShareSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationInput">SpecificReservationInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationRequiredInput">SpecificReservationRequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAtTime">DeleteAtTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationRequired">SpecificReservationRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BlockNames`<sup>Required</sup> <a name="BlockNames" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.blockNames"></a>

```csharp
public string[] BlockNames { get; }
```

- *Type:* string[]

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.commitment"></a>

```csharp
public string Commitment { get; }
```

- *Type:* string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `DeleteAfterDuration`<sup>Required</sup> <a name="DeleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAfterDuration"></a>

```csharp
public ComputeReservationDeleteAfterDurationOutputReference DeleteAfterDuration { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference">ComputeReservationDeleteAfterDurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LinkedCommitments`<sup>Required</sup> <a name="LinkedCommitments" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.linkedCommitments"></a>

```csharp
public string[] LinkedCommitments { get; }
```

- *Type:* string[]

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.params"></a>

```csharp
public ComputeReservationParamsOutputReference Params { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference">ComputeReservationParamsOutputReference</a>

---

##### `ReservationBlockCount`<sup>Required</sup> <a name="ReservationBlockCount" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationBlockCount"></a>

```csharp
public double ReservationBlockCount { get; }
```

- *Type:* double

---

##### `ReservationSharingPolicy`<sup>Required</sup> <a name="ReservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationSharingPolicy"></a>

```csharp
public ComputeReservationReservationSharingPolicyOutputReference ReservationSharingPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference">ComputeReservationReservationSharingPolicyOutputReference</a>

---

##### `ResourceStatus`<sup>Required</sup> <a name="ResourceStatus" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.resourceStatus"></a>

```csharp
public ComputeReservationResourceStatusList ResourceStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList">ComputeReservationResourceStatusList</a>

---

##### `SatisfiesPzs`<sup>Required</sup> <a name="SatisfiesPzs" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.satisfiesPzs"></a>

```csharp
public IResolvable SatisfiesPzs { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `ShareSettings`<sup>Required</sup> <a name="ShareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.shareSettings"></a>

```csharp
public ComputeReservationShareSettingsOutputReference ShareSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference">ComputeReservationShareSettingsOutputReference</a>

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservation"></a>

```csharp
public ComputeReservationSpecificReservationOutputReference SpecificReservation { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference">ComputeReservationSpecificReservationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.timeouts"></a>

```csharp
public ComputeReservationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference">ComputeReservationTimeoutsOutputReference</a>

---

##### `DeleteAfterDurationInput`<sup>Optional</sup> <a name="DeleteAfterDurationInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAfterDurationInput"></a>

```csharp
public ComputeReservationDeleteAfterDuration DeleteAfterDurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a>

---

##### `DeleteAtTimeInput`<sup>Optional</sup> <a name="DeleteAtTimeInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAtTimeInput"></a>

```csharp
public string DeleteAtTimeInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.paramsInput"></a>

```csharp
public ComputeReservationParams ParamsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReservationSharingPolicyInput`<sup>Optional</sup> <a name="ReservationSharingPolicyInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationSharingPolicyInput"></a>

```csharp
public ComputeReservationReservationSharingPolicy ReservationSharingPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a>

---

##### `ShareSettingsInput`<sup>Optional</sup> <a name="ShareSettingsInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.shareSettingsInput"></a>

```csharp
public ComputeReservationShareSettings ShareSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a>

---

##### `SpecificReservationInput`<sup>Optional</sup> <a name="SpecificReservationInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationInput"></a>

```csharp
public ComputeReservationSpecificReservation SpecificReservationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a>

---

##### `SpecificReservationRequiredInput`<sup>Optional</sup> <a name="SpecificReservationRequiredInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationRequiredInput"></a>

```csharp
public bool|IResolvable SpecificReservationRequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.timeoutsInput"></a>

```csharp
public IResolvable|ComputeReservationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a>

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `DeleteAtTime`<sup>Required</sup> <a name="DeleteAtTime" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAtTime"></a>

```csharp
public string DeleteAtTime { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SpecificReservationRequired`<sup>Required</sup> <a name="SpecificReservationRequired" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationRequired"></a>

```csharp
public bool|IResolvable SpecificReservationRequired { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeReservationConfig <a name="ComputeReservationConfig" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    ComputeReservationSpecificReservation SpecificReservation,
    string Zone,
    ComputeReservationDeleteAfterDuration DeleteAfterDuration = null,
    string DeleteAtTime = null,
    string DeletionPolicy = null,
    string Description = null,
    ComputeReservationParams Params = null,
    string Project = null,
    ComputeReservationReservationSharingPolicy ReservationSharingPolicy = null,
    ComputeReservationShareSettings ShareSettings = null,
    bool|IResolvable SpecificReservationRequired = null,
    ComputeReservationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a></code> | specific_reservation block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.zone">Zone</a></code> | <code>string</code> | The zone where the reservation is made. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deleteAfterDuration">DeleteAfterDuration</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a></code> | delete_after_duration block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deleteAtTime">DeleteAtTime</a></code> | <code>string</code> | Absolute time in future when the reservation will be auto-deleted by Compute Engine. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#project ComputeReservation#project}. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.reservationSharingPolicy">ReservationSharingPolicy</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a></code> | reservation_sharing_policy block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.specificReservationRequired">SpecificReservationRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, only VMs that target this reservation by name can consume this reservation. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#name ComputeReservation#name}

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.specificReservation"></a>

```csharp
public ComputeReservationSpecificReservation SpecificReservation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#specific_reservation ComputeReservation#specific_reservation}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone where the reservation is made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#zone ComputeReservation#zone}

---

##### `DeleteAfterDuration`<sup>Optional</sup> <a name="DeleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deleteAfterDuration"></a>

```csharp
public ComputeReservationDeleteAfterDuration DeleteAfterDuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a>

delete_after_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#delete_after_duration ComputeReservation#delete_after_duration}

---

##### `DeleteAtTime`<sup>Optional</sup> <a name="DeleteAtTime" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deleteAtTime"></a>

```csharp
public string DeleteAtTime { get; set; }
```

- *Type:* string

Absolute time in future when the reservation will be auto-deleted by Compute Engine.

Timestamp is represented in RFC3339 text format.
Cannot be used with delete_after_duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#delete_at_time ComputeReservation#delete_at_time}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#deletion_policy ComputeReservation#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#description ComputeReservation#description}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.params"></a>

```csharp
public ComputeReservationParams Params { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#params ComputeReservation#params}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#project ComputeReservation#project}.

---

##### `ReservationSharingPolicy`<sup>Optional</sup> <a name="ReservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.reservationSharingPolicy"></a>

```csharp
public ComputeReservationReservationSharingPolicy ReservationSharingPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a>

reservation_sharing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#reservation_sharing_policy ComputeReservation#reservation_sharing_policy}

---

##### `ShareSettings`<sup>Optional</sup> <a name="ShareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.shareSettings"></a>

```csharp
public ComputeReservationShareSettings ShareSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#share_settings ComputeReservation#share_settings}

---

##### `SpecificReservationRequired`<sup>Optional</sup> <a name="SpecificReservationRequired" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.specificReservationRequired"></a>

```csharp
public bool|IResolvable SpecificReservationRequired { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, only VMs that target this reservation by name can consume this reservation.

Otherwise, it can be consumed by VMs with
affinity for any reservation. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#specific_reservation_required ComputeReservation#specific_reservation_required}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.timeouts"></a>

```csharp
public ComputeReservationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#timeouts ComputeReservation#timeouts}

---

### ComputeReservationDeleteAfterDuration <a name="ComputeReservationDeleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationDeleteAfterDuration {
    double Nanos = null,
    string Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.property.nanos">Nanos</a></code> | <code>double</code> | Number of nanoseconds for the auto-delete duration. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.property.seconds">Seconds</a></code> | <code>string</code> | Number of seconds for the auto-delete duration. |

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Number of nanoseconds for the auto-delete duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#nanos ComputeReservation#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.property.seconds"></a>

```csharp
public string Seconds { get; set; }
```

- *Type:* string

Number of seconds for the auto-delete duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#seconds ComputeReservation#seconds}

---

### ComputeReservationParams <a name="ComputeReservationParams" id="@cdktn/provider-google.computeReservation.ComputeReservationParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationParams {
    System.Collections.Generic.IDictionary<string, string> ResourceManagerTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource manager tags to be bound to the reservation. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeReservation.ComputeReservationParams.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource manager tags to be bound to the reservation.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#resource_manager_tags ComputeReservation#resource_manager_tags}

---

### ComputeReservationReservationSharingPolicy <a name="ComputeReservationReservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationReservationSharingPolicy {
    string ServiceShareType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy.property.serviceShareType">ServiceShareType</a></code> | <code>string</code> | Sharing config for all Google Cloud services. Possible values: ["ALLOW_ALL", "DISALLOW_ALL"]. |

---

##### `ServiceShareType`<sup>Optional</sup> <a name="ServiceShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy.property.serviceShareType"></a>

```csharp
public string ServiceShareType { get; set; }
```

- *Type:* string

Sharing config for all Google Cloud services. Possible values: ["ALLOW_ALL", "DISALLOW_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#service_share_type ComputeReservation#service_share_type}

---

### ComputeReservationResourceStatus <a name="ComputeReservationResourceStatus" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatus {

};
```


### ComputeReservationResourceStatusHealthInfo <a name="ComputeReservationResourceStatusHealthInfo" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatusHealthInfo {

};
```


### ComputeReservationResourceStatusReservationMaintenance <a name="ComputeReservationResourceStatusReservationMaintenance" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatusReservationMaintenance {

};
```


### ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance <a name="ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance {

};
```


### ComputeReservationResourceStatusSpecificSkuAllocation <a name="ComputeReservationResourceStatusSpecificSkuAllocation" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatusSpecificSkuAllocation {

};
```


### ComputeReservationShareSettings <a name="ComputeReservationShareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationShareSettings {
    IResolvable|ComputeReservationShareSettingsProjectMap[] ProjectMap = null,
    string ShareType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.property.projectMap">ProjectMap</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>[]</code> | project_map block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.property.shareType">ShareType</a></code> | <code>string</code> | Type of sharing for this shared-reservation Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]. |

---

##### `ProjectMap`<sup>Optional</sup> <a name="ProjectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.property.projectMap"></a>

```csharp
public IResolvable|ComputeReservationShareSettingsProjectMap[] ProjectMap { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>[]

project_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#project_map ComputeReservation#project_map}

---

##### `ShareType`<sup>Optional</sup> <a name="ShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.property.shareType"></a>

```csharp
public string ShareType { get; set; }
```

- *Type:* string

Type of sharing for this shared-reservation Possible values: ["LOCAL", "SPECIFIC_PROJECTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#share_type ComputeReservation#share_type}

---

### ComputeReservationShareSettingsProjectMap <a name="ComputeReservationShareSettingsProjectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationShareSettingsProjectMap {
    string Id,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#id ComputeReservation#id}. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.property.projectId">ProjectId</a></code> | <code>string</code> | The project id/number, should be same as the key of this project config in the project map. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#id ComputeReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project id/number, should be same as the key of this project config in the project map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#project_id ComputeReservation#project_id}

---

### ComputeReservationSpecificReservation <a name="ComputeReservationSpecificReservation" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationSpecificReservation {
    double Count,
    ComputeReservationSpecificReservationInstanceProperties InstanceProperties = null,
    string SourceInstanceTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.count">Count</a></code> | <code>double</code> | The number of resources that are allocated. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.instanceProperties">InstanceProperties</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a></code> | instance_properties block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>string</code> | Specifies the instance template to create the reservation. If you use this field, you must exclude the instanceProperties field. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The number of resources that are allocated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#count ComputeReservation#count}

---

##### `InstanceProperties`<sup>Optional</sup> <a name="InstanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.instanceProperties"></a>

```csharp
public ComputeReservationSpecificReservationInstanceProperties InstanceProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a>

instance_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#instance_properties ComputeReservation#instance_properties}

---

##### `SourceInstanceTemplate`<sup>Optional</sup> <a name="SourceInstanceTemplate" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.sourceInstanceTemplate"></a>

```csharp
public string SourceInstanceTemplate { get; set; }
```

- *Type:* string

Specifies the instance template to create the reservation. If you use this field, you must exclude the instanceProperties field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#source_instance_template ComputeReservation#source_instance_template}

---

### ComputeReservationSpecificReservationInstanceProperties <a name="ComputeReservationSpecificReservationInstanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationSpecificReservationInstanceProperties {
    string MachineType,
    IResolvable|ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators[] GuestAccelerators = null,
    IResolvable|ComputeReservationSpecificReservationInstancePropertiesLocalSsds[] LocalSsds = null,
    string MinCpuPlatform = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.machineType">MachineType</a></code> | <code>string</code> | The name of the machine type to reserve. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.guestAccelerators">GuestAccelerators</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>[]</code> | guest_accelerators block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.localSsds">LocalSsds</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>[]</code> | local_ssds block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | The minimum CPU platform for the reservation. |

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The name of the machine type to reserve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#machine_type ComputeReservation#machine_type}

---

##### `GuestAccelerators`<sup>Optional</sup> <a name="GuestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.guestAccelerators"></a>

```csharp
public IResolvable|ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators[] GuestAccelerators { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>[]

guest_accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#guest_accelerators ComputeReservation#guest_accelerators}

---

##### `LocalSsds`<sup>Optional</sup> <a name="LocalSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.localSsds"></a>

```csharp
public IResolvable|ComputeReservationSpecificReservationInstancePropertiesLocalSsds[] LocalSsds { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>[]

local_ssds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#local_ssds ComputeReservation#local_ssds}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; set; }
```

- *Type:* string

The minimum CPU platform for the reservation.

For example,
'"Intel Skylake"'. See
the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
for information on available CPU platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#min_cpu_platform ComputeReservation#min_cpu_platform}

---

### ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators <a name="ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators {
    double AcceleratorCount,
    string AcceleratorType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | The full or partial URL of the accelerator type to attach to this instance. For example: 'projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100'. |

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; set; }
```

- *Type:* double

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#accelerator_count ComputeReservation#accelerator_count}

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

The full or partial URL of the accelerator type to attach to this instance. For example: 'projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100'.

If you are creating an instance template, specify only the accelerator name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#accelerator_type ComputeReservation#accelerator_type}

---

### ComputeReservationSpecificReservationInstancePropertiesLocalSsds <a name="ComputeReservationSpecificReservationInstancePropertiesLocalSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationSpecificReservationInstancePropertiesLocalSsds {
    double DiskSizeGb,
    string Interface = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | The size of the disk in base-2 GB. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.interface">Interface</a></code> | <code>string</code> | The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"]. |

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

The size of the disk in base-2 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#disk_size_gb ComputeReservation#disk_size_gb}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.interface"></a>

```csharp
public string Interface { get; set; }
```

- *Type:* string

The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#interface ComputeReservation#interface}

---

### ComputeReservationTimeouts <a name="ComputeReservationTimeouts" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#create ComputeReservation#create}. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#delete ComputeReservation#delete}. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#update ComputeReservation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#create ComputeReservation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#delete ComputeReservation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_reservation#update ComputeReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeReservationDeleteAfterDurationOutputReference <a name="ComputeReservationDeleteAfterDurationOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationDeleteAfterDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.seconds">Seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.secondsInput"></a>

```csharp
public string SecondsInput { get; }
```

- *Type:* string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.seconds"></a>

```csharp
public string Seconds { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.internalValue"></a>

```csharp
public ComputeReservationDeleteAfterDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a>

---


### ComputeReservationParamsOutputReference <a name="ComputeReservationParamsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resetResourceManagerTags"></a>

```csharp
private void ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.resourceManagerTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.internalValue"></a>

```csharp
public ComputeReservationParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a>

---


### ComputeReservationReservationSharingPolicyOutputReference <a name="ComputeReservationReservationSharingPolicyOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationReservationSharingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resetServiceShareType">ResetServiceShareType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceShareType` <a name="ResetServiceShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resetServiceShareType"></a>

```csharp
private void ResetServiceShareType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.serviceShareTypeInput">ServiceShareTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.serviceShareType">ServiceShareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceShareTypeInput`<sup>Optional</sup> <a name="ServiceShareTypeInput" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.serviceShareTypeInput"></a>

```csharp
public string ServiceShareTypeInput { get; }
```

- *Type:* string

---

##### `ServiceShareType`<sup>Required</sup> <a name="ServiceShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.serviceShareType"></a>

```csharp
public string ServiceShareType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.internalValue"></a>

```csharp
public ComputeReservationReservationSharingPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a>

---


### ComputeReservationResourceStatusHealthInfoList <a name="ComputeReservationResourceStatusHealthInfoList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatusHealthInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.get"></a>

```csharp
private ComputeReservationResourceStatusHealthInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeReservationResourceStatusHealthInfoOutputReference <a name="ComputeReservationResourceStatusHealthInfoOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatusHealthInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.degradedBlockCount">DegradedBlockCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.healthStatus">HealthStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.healthyBlockCount">HealthyBlockCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfo">ComputeReservationResourceStatusHealthInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DegradedBlockCount`<sup>Required</sup> <a name="DegradedBlockCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.degradedBlockCount"></a>

```csharp
public double DegradedBlockCount { get; }
```

- *Type:* double

---

##### `HealthStatus`<sup>Required</sup> <a name="HealthStatus" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.healthStatus"></a>

```csharp
public string HealthStatus { get; }
```

- *Type:* string

---

##### `HealthyBlockCount`<sup>Required</sup> <a name="HealthyBlockCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.healthyBlockCount"></a>

```csharp
public double HealthyBlockCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.internalValue"></a>

```csharp
public ComputeReservationResourceStatusHealthInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfo">ComputeReservationResourceStatusHealthInfo</a>

---


### ComputeReservationResourceStatusList <a name="ComputeReservationResourceStatusList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.get"></a>

```csharp
private ComputeReservationResourceStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeReservationResourceStatusOutputReference <a name="ComputeReservationResourceStatusOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.healthInfo">HealthInfo</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList">ComputeReservationResourceStatusHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.reservationBlockCount">ReservationBlockCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.reservationMaintenance">ReservationMaintenance</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList">ComputeReservationResourceStatusReservationMaintenanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.specificSkuAllocation">SpecificSkuAllocation</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList">ComputeReservationResourceStatusSpecificSkuAllocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatus">ComputeReservationResourceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthInfo`<sup>Required</sup> <a name="HealthInfo" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.healthInfo"></a>

```csharp
public ComputeReservationResourceStatusHealthInfoList HealthInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList">ComputeReservationResourceStatusHealthInfoList</a>

---

##### `ReservationBlockCount`<sup>Required</sup> <a name="ReservationBlockCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.reservationBlockCount"></a>

```csharp
public double ReservationBlockCount { get; }
```

- *Type:* double

---

##### `ReservationMaintenance`<sup>Required</sup> <a name="ReservationMaintenance" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.reservationMaintenance"></a>

```csharp
public ComputeReservationResourceStatusReservationMaintenanceList ReservationMaintenance { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList">ComputeReservationResourceStatusReservationMaintenanceList</a>

---

##### `SpecificSkuAllocation`<sup>Required</sup> <a name="SpecificSkuAllocation" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.specificSkuAllocation"></a>

```csharp
public ComputeReservationResourceStatusSpecificSkuAllocationList SpecificSkuAllocation { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList">ComputeReservationResourceStatusSpecificSkuAllocationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.internalValue"></a>

```csharp
public ComputeReservationResourceStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatus">ComputeReservationResourceStatus</a>

---


### ComputeReservationResourceStatusReservationMaintenanceList <a name="ComputeReservationResourceStatusReservationMaintenanceList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatusReservationMaintenanceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.get"></a>

```csharp
private ComputeReservationResourceStatusReservationMaintenanceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeReservationResourceStatusReservationMaintenanceOutputReference <a name="ComputeReservationResourceStatusReservationMaintenanceOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatusReservationMaintenanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenanceOngoingCount">InstanceMaintenanceOngoingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenancePendingCount">InstanceMaintenancePendingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenanceOngoingCount">MaintenanceOngoingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenancePendingCount">MaintenancePendingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.schedulingType">SchedulingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount">SubblockInfraMaintenanceOngoingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount">SubblockInfraMaintenancePendingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.upcomingGroupMaintenance">UpcomingGroupMaintenance</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList">ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenance">ComputeReservationResourceStatusReservationMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceMaintenanceOngoingCount`<sup>Required</sup> <a name="InstanceMaintenanceOngoingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenanceOngoingCount"></a>

```csharp
public double InstanceMaintenanceOngoingCount { get; }
```

- *Type:* double

---

##### `InstanceMaintenancePendingCount`<sup>Required</sup> <a name="InstanceMaintenancePendingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenancePendingCount"></a>

```csharp
public double InstanceMaintenancePendingCount { get; }
```

- *Type:* double

---

##### `MaintenanceOngoingCount`<sup>Required</sup> <a name="MaintenanceOngoingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenanceOngoingCount"></a>

```csharp
public double MaintenanceOngoingCount { get; }
```

- *Type:* double

---

##### `MaintenancePendingCount`<sup>Required</sup> <a name="MaintenancePendingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenancePendingCount"></a>

```csharp
public double MaintenancePendingCount { get; }
```

- *Type:* double

---

##### `SchedulingType`<sup>Required</sup> <a name="SchedulingType" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.schedulingType"></a>

```csharp
public string SchedulingType { get; }
```

- *Type:* string

---

##### `SubblockInfraMaintenanceOngoingCount`<sup>Required</sup> <a name="SubblockInfraMaintenanceOngoingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount"></a>

```csharp
public double SubblockInfraMaintenanceOngoingCount { get; }
```

- *Type:* double

---

##### `SubblockInfraMaintenancePendingCount`<sup>Required</sup> <a name="SubblockInfraMaintenancePendingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount"></a>

```csharp
public double SubblockInfraMaintenancePendingCount { get; }
```

- *Type:* double

---

##### `UpcomingGroupMaintenance`<sup>Required</sup> <a name="UpcomingGroupMaintenance" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.upcomingGroupMaintenance"></a>

```csharp
public ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList UpcomingGroupMaintenance { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList">ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.internalValue"></a>

```csharp
public ComputeReservationResourceStatusReservationMaintenance InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenance">ComputeReservationResourceStatusReservationMaintenance</a>

---


### ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList <a name="ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.get"></a>

```csharp
private ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference <a name="ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.canReschedule">CanReschedule</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.latestWindowStartTime">LatestWindowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceOnShutdown">MaintenanceOnShutdown</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceReasons">MaintenanceReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceStatus">MaintenanceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowEndTime">WindowEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance">ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CanReschedule`<sup>Required</sup> <a name="CanReschedule" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.canReschedule"></a>

```csharp
public IResolvable CanReschedule { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LatestWindowStartTime`<sup>Required</sup> <a name="LatestWindowStartTime" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.latestWindowStartTime"></a>

```csharp
public string LatestWindowStartTime { get; }
```

- *Type:* string

---

##### `MaintenanceOnShutdown`<sup>Required</sup> <a name="MaintenanceOnShutdown" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceOnShutdown"></a>

```csharp
public IResolvable MaintenanceOnShutdown { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MaintenanceReasons`<sup>Required</sup> <a name="MaintenanceReasons" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceReasons"></a>

```csharp
public string[] MaintenanceReasons { get; }
```

- *Type:* string[]

---

##### `MaintenanceStatus`<sup>Required</sup> <a name="MaintenanceStatus" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceStatus"></a>

```csharp
public string MaintenanceStatus { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `WindowEndTime`<sup>Required</sup> <a name="WindowEndTime" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowEndTime"></a>

```csharp
public string WindowEndTime { get; }
```

- *Type:* string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowStartTime"></a>

```csharp
public string WindowStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.internalValue"></a>

```csharp
public ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance">ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance</a>

---


### ComputeReservationResourceStatusSpecificSkuAllocationList <a name="ComputeReservationResourceStatusSpecificSkuAllocationList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatusSpecificSkuAllocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.get"></a>

```csharp
private ComputeReservationResourceStatusSpecificSkuAllocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeReservationResourceStatusSpecificSkuAllocationOutputReference <a name="ComputeReservationResourceStatusSpecificSkuAllocationOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationResourceStatusSpecificSkuAllocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.sourceInstanceTemplateId">SourceInstanceTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.utilizations">Utilizations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocation">ComputeReservationResourceStatusSpecificSkuAllocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceInstanceTemplateId`<sup>Required</sup> <a name="SourceInstanceTemplateId" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.sourceInstanceTemplateId"></a>

```csharp
public string SourceInstanceTemplateId { get; }
```

- *Type:* string

---

##### `Utilizations`<sup>Required</sup> <a name="Utilizations" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.utilizations"></a>

```csharp
public StringMap Utilizations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.internalValue"></a>

```csharp
public ComputeReservationResourceStatusSpecificSkuAllocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocation">ComputeReservationResourceStatusSpecificSkuAllocation</a>

---


### ComputeReservationShareSettingsOutputReference <a name="ComputeReservationShareSettingsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationShareSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.putProjectMap">PutProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resetProjectMap">ResetProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resetShareType">ResetShareType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProjectMap` <a name="PutProjectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.putProjectMap"></a>

```csharp
private void PutProjectMap(IResolvable|ComputeReservationShareSettingsProjectMap[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.putProjectMap.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>[]

---

##### `ResetProjectMap` <a name="ResetProjectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resetProjectMap"></a>

```csharp
private void ResetProjectMap()
```

##### `ResetShareType` <a name="ResetShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resetShareType"></a>

```csharp
private void ResetShareType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.projectMap">ProjectMap</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList">ComputeReservationShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.projectMapInput">ProjectMapInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.shareTypeInput">ShareTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.shareType">ShareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectMap`<sup>Required</sup> <a name="ProjectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.projectMap"></a>

```csharp
public ComputeReservationShareSettingsProjectMapList ProjectMap { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList">ComputeReservationShareSettingsProjectMapList</a>

---

##### `ProjectMapInput`<sup>Optional</sup> <a name="ProjectMapInput" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.projectMapInput"></a>

```csharp
public IResolvable|ComputeReservationShareSettingsProjectMap[] ProjectMapInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>[]

---

##### `ShareTypeInput`<sup>Optional</sup> <a name="ShareTypeInput" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.shareTypeInput"></a>

```csharp
public string ShareTypeInput { get; }
```

- *Type:* string

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.shareType"></a>

```csharp
public string ShareType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.internalValue"></a>

```csharp
public ComputeReservationShareSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a>

---


### ComputeReservationShareSettingsProjectMapList <a name="ComputeReservationShareSettingsProjectMapList" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationShareSettingsProjectMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.get"></a>

```csharp
private ComputeReservationShareSettingsProjectMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.internalValue"></a>

```csharp
public IResolvable|ComputeReservationShareSettingsProjectMap[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>[]

---


### ComputeReservationShareSettingsProjectMapOutputReference <a name="ComputeReservationShareSettingsProjectMapOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationShareSettingsProjectMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeReservationShareSettingsProjectMap InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap">ComputeReservationShareSettingsProjectMap</a>

---


### ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList <a name="ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get"></a>

```csharp
private ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.internalValue"></a>

```csharp
public IResolvable|ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>[]

---


### ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference <a name="ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```csharp
public double AcceleratorCountInput { get; }
```

- *Type:* double

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>

---


### ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList <a name="ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get"></a>

```csharp
private ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.internalValue"></a>

```csharp
public IResolvable|ComputeReservationSpecificReservationInstancePropertiesLocalSsds[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>[]

---


### ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference <a name="ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterface` <a name="ResetInterface" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resetInterface"></a>

```csharp
private void ResetInterface()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interface">Interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interfaceInput"></a>

```csharp
public string InterfaceInput { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeReservationSpecificReservationInstancePropertiesLocalSsds InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>

---


### ComputeReservationSpecificReservationInstancePropertiesOutputReference <a name="ComputeReservationSpecificReservationInstancePropertiesOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationSpecificReservationInstancePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putGuestAccelerators">PutGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putLocalSsds">PutLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetGuestAccelerators">ResetGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetLocalSsds">ResetLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGuestAccelerators` <a name="PutGuestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putGuestAccelerators"></a>

```csharp
private void PutGuestAccelerators(IResolvable|ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putGuestAccelerators.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>[]

---

##### `PutLocalSsds` <a name="PutLocalSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putLocalSsds"></a>

```csharp
private void PutLocalSsds(IResolvable|ComputeReservationSpecificReservationInstancePropertiesLocalSsds[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putLocalSsds.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>[]

---

##### `ResetGuestAccelerators` <a name="ResetGuestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetGuestAccelerators"></a>

```csharp
private void ResetGuestAccelerators()
```

##### `ResetLocalSsds` <a name="ResetLocalSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetLocalSsds"></a>

```csharp
private void ResetLocalSsds()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetMinCpuPlatform"></a>

```csharp
private void ResetMinCpuPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAccelerators">GuestAccelerators</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList">ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsds">LocalSsds</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList">ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.locationHint">LocationHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAcceleratorsInput">GuestAcceleratorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsdsInput">LocalSsdsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GuestAccelerators`<sup>Required</sup> <a name="GuestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAccelerators"></a>

```csharp
public ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList GuestAccelerators { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList">ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList</a>

---

##### `LocalSsds`<sup>Required</sup> <a name="LocalSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsds"></a>

```csharp
public ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList LocalSsds { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList">ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList</a>

---

##### `LocationHint`<sup>Required</sup> <a name="LocationHint" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.locationHint"></a>

```csharp
public string LocationHint { get; }
```

- *Type:* string

---

##### `GuestAcceleratorsInput`<sup>Optional</sup> <a name="GuestAcceleratorsInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAcceleratorsInput"></a>

```csharp
public IResolvable|ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators[] GuestAcceleratorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>[]

---

##### `LocalSsdsInput`<sup>Optional</sup> <a name="LocalSsdsInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsdsInput"></a>

```csharp
public IResolvable|ComputeReservationSpecificReservationInstancePropertiesLocalSsds[] LocalSsdsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds">ComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>[]

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatformInput"></a>

```csharp
public string MinCpuPlatformInput { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.internalValue"></a>

```csharp
public ComputeReservationSpecificReservationInstanceProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a>

---


### ComputeReservationSpecificReservationOutputReference <a name="ComputeReservationSpecificReservationOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationSpecificReservationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.putInstanceProperties">PutInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resetInstanceProperties">ResetInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resetSourceInstanceTemplate">ResetSourceInstanceTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstanceProperties` <a name="PutInstanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.putInstanceProperties"></a>

```csharp
private void PutInstanceProperties(ComputeReservationSpecificReservationInstanceProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.putInstanceProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a>

---

##### `ResetInstanceProperties` <a name="ResetInstanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resetInstanceProperties"></a>

```csharp
private void ResetInstanceProperties()
```

##### `ResetSourceInstanceTemplate` <a name="ResetSourceInstanceTemplate" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resetSourceInstanceTemplate"></a>

```csharp
private void ResetSourceInstanceTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.assuredCount">AssuredCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.instanceProperties">InstanceProperties</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference">ComputeReservationSpecificReservationInstancePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.inUseCount">InUseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.instancePropertiesInput">InstancePropertiesInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.sourceInstanceTemplateInput">SourceInstanceTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssuredCount`<sup>Required</sup> <a name="AssuredCount" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.assuredCount"></a>

```csharp
public double AssuredCount { get; }
```

- *Type:* double

---

##### `InstanceProperties`<sup>Required</sup> <a name="InstanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.instanceProperties"></a>

```csharp
public ComputeReservationSpecificReservationInstancePropertiesOutputReference InstanceProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference">ComputeReservationSpecificReservationInstancePropertiesOutputReference</a>

---

##### `InUseCount`<sup>Required</sup> <a name="InUseCount" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.inUseCount"></a>

```csharp
public double InUseCount { get; }
```

- *Type:* double

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `InstancePropertiesInput`<sup>Optional</sup> <a name="InstancePropertiesInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.instancePropertiesInput"></a>

```csharp
public ComputeReservationSpecificReservationInstanceProperties InstancePropertiesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a>

---

##### `SourceInstanceTemplateInput`<sup>Optional</sup> <a name="SourceInstanceTemplateInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.sourceInstanceTemplateInput"></a>

```csharp
public string SourceInstanceTemplateInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `SourceInstanceTemplate`<sup>Required</sup> <a name="SourceInstanceTemplate" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.sourceInstanceTemplate"></a>

```csharp
public string SourceInstanceTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.internalValue"></a>

```csharp
public ComputeReservationSpecificReservation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a>

---


### ComputeReservationTimeoutsOutputReference <a name="ComputeReservationTimeoutsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeReservationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeReservationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a>

---



