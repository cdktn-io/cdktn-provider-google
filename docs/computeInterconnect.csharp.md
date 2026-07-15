# `computeInterconnect` Submodule <a name="`computeInterconnect` Submodule" id="@cdktn/provider-google.computeInterconnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInterconnect <a name="ComputeInterconnect" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect google_compute_interconnect}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnect(Construct Scope, string Id, ComputeInterconnectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig">ComputeInterconnectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig">ComputeInterconnectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.putMacsec">PutMacsec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetAdminEnabled">ResetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetCustomerName">ResetCustomerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetMacsec">ResetMacsec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetMacsecEnabled">ResetMacsecEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetNocContactEmail">ResetNocContactEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetRemoteLocation">ResetRemoteLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetRequestedFeatures">ResetRequestedFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMacsec` <a name="PutMacsec" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.putMacsec"></a>

```csharp
private void PutMacsec(ComputeInterconnectMacsec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.putMacsec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

---

##### `PutParams` <a name="PutParams" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.putParams"></a>

```csharp
private void PutParams(ComputeInterconnectParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParams">ComputeInterconnectParams</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeInterconnectTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>

---

##### `ResetAdminEnabled` <a name="ResetAdminEnabled" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetAdminEnabled"></a>

```csharp
private void ResetAdminEnabled()
```

##### `ResetCustomerName` <a name="ResetCustomerName" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetCustomerName"></a>

```csharp
private void ResetCustomerName()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMacsec` <a name="ResetMacsec" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetMacsec"></a>

```csharp
private void ResetMacsec()
```

##### `ResetMacsecEnabled` <a name="ResetMacsecEnabled" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetMacsecEnabled"></a>

```csharp
private void ResetMacsecEnabled()
```

##### `ResetNocContactEmail` <a name="ResetNocContactEmail" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetNocContactEmail"></a>

```csharp
private void ResetNocContactEmail()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRemoteLocation` <a name="ResetRemoteLocation" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetRemoteLocation"></a>

```csharp
private void ResetRemoteLocation()
```

##### `ResetRequestedFeatures` <a name="ResetRequestedFeatures" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetRequestedFeatures"></a>

```csharp
private void ResetRequestedFeatures()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeInterconnect resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeInterconnect.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeInterconnect.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeInterconnect.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeInterconnect.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComputeInterconnect resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeInterconnect to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeInterconnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComputeInterconnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.availableFeatures">AvailableFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.circuitInfos">CircuitInfos</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList">ComputeInterconnectCircuitInfosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.expectedOutages">ExpectedOutages</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList">ComputeInterconnectExpectedOutagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.googleIpAddress">GoogleIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.googleReferenceId">GoogleReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectAttachments">InterconnectAttachments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectGroups">InterconnectGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.labelFingerprint">LabelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.macsec">Macsec</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference">ComputeInterconnectMacsecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.operationalStatus">OperationalStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference">ComputeInterconnectParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.peerIpAddress">PeerIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.provisionedLinkCount">ProvisionedLinkCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.satisfiesPzs">SatisfiesPzs</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference">ComputeInterconnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.wireGroups">WireGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabledInput">AdminEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.customerNameInput">CustomerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectTypeInput">InterconnectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.linkTypeInput">LinkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabledInput">MacsecEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.macsecInput">MacsecInput</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmailInput">NocContactEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParams">ComputeInterconnectParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocationInput">RemoteLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeaturesInput">RequestedFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCountInput">RequestedLinkCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabled">AdminEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.customerName">CustomerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectType">InterconnectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.linkType">LinkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabled">MacsecEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmail">NocContactEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocation">RemoteLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeatures">RequestedFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCount">RequestedLinkCount</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AvailableFeatures`<sup>Required</sup> <a name="AvailableFeatures" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.availableFeatures"></a>

```csharp
public string[] AvailableFeatures { get; }
```

- *Type:* string[]

---

##### `CircuitInfos`<sup>Required</sup> <a name="CircuitInfos" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.circuitInfos"></a>

```csharp
public ComputeInterconnectCircuitInfosList CircuitInfos { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList">ComputeInterconnectCircuitInfosList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ExpectedOutages`<sup>Required</sup> <a name="ExpectedOutages" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.expectedOutages"></a>

```csharp
public ComputeInterconnectExpectedOutagesList ExpectedOutages { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList">ComputeInterconnectExpectedOutagesList</a>

---

##### `GoogleIpAddress`<sup>Required</sup> <a name="GoogleIpAddress" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.googleIpAddress"></a>

```csharp
public string GoogleIpAddress { get; }
```

- *Type:* string

---

##### `GoogleReferenceId`<sup>Required</sup> <a name="GoogleReferenceId" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.googleReferenceId"></a>

```csharp
public string GoogleReferenceId { get; }
```

- *Type:* string

---

##### `InterconnectAttachments`<sup>Required</sup> <a name="InterconnectAttachments" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectAttachments"></a>

```csharp
public string[] InterconnectAttachments { get; }
```

- *Type:* string[]

---

##### `InterconnectGroups`<sup>Required</sup> <a name="InterconnectGroups" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectGroups"></a>

```csharp
public string[] InterconnectGroups { get; }
```

- *Type:* string[]

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.labelFingerprint"></a>

```csharp
public string LabelFingerprint { get; }
```

- *Type:* string

---

##### `Macsec`<sup>Required</sup> <a name="Macsec" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.macsec"></a>

```csharp
public ComputeInterconnectMacsecOutputReference Macsec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference">ComputeInterconnectMacsecOutputReference</a>

---

##### `OperationalStatus`<sup>Required</sup> <a name="OperationalStatus" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.operationalStatus"></a>

```csharp
public string OperationalStatus { get; }
```

- *Type:* string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.params"></a>

```csharp
public ComputeInterconnectParamsOutputReference Params { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference">ComputeInterconnectParamsOutputReference</a>

---

##### `PeerIpAddress`<sup>Required</sup> <a name="PeerIpAddress" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.peerIpAddress"></a>

```csharp
public string PeerIpAddress { get; }
```

- *Type:* string

---

##### `ProvisionedLinkCount`<sup>Required</sup> <a name="ProvisionedLinkCount" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.provisionedLinkCount"></a>

```csharp
public double ProvisionedLinkCount { get; }
```

- *Type:* double

---

##### `SatisfiesPzs`<sup>Required</sup> <a name="SatisfiesPzs" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.satisfiesPzs"></a>

```csharp
public IResolvable SatisfiesPzs { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.timeouts"></a>

```csharp
public ComputeInterconnectTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference">ComputeInterconnectTimeoutsOutputReference</a>

---

##### `WireGroups`<sup>Required</sup> <a name="WireGroups" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.wireGroups"></a>

```csharp
public string[] WireGroups { get; }
```

- *Type:* string[]

---

##### `AdminEnabledInput`<sup>Optional</sup> <a name="AdminEnabledInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabledInput"></a>

```csharp
public bool|IResolvable AdminEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CustomerNameInput`<sup>Optional</sup> <a name="CustomerNameInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.customerNameInput"></a>

```csharp
public string CustomerNameInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InterconnectTypeInput`<sup>Optional</sup> <a name="InterconnectTypeInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectTypeInput"></a>

```csharp
public string InterconnectTypeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LinkTypeInput`<sup>Optional</sup> <a name="LinkTypeInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.linkTypeInput"></a>

```csharp
public string LinkTypeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MacsecEnabledInput`<sup>Optional</sup> <a name="MacsecEnabledInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabledInput"></a>

```csharp
public bool|IResolvable MacsecEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MacsecInput`<sup>Optional</sup> <a name="MacsecInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.macsecInput"></a>

```csharp
public ComputeInterconnectMacsec MacsecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NocContactEmailInput`<sup>Optional</sup> <a name="NocContactEmailInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmailInput"></a>

```csharp
public string NocContactEmailInput { get; }
```

- *Type:* string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.paramsInput"></a>

```csharp
public ComputeInterconnectParams ParamsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParams">ComputeInterconnectParams</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RemoteLocationInput`<sup>Optional</sup> <a name="RemoteLocationInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocationInput"></a>

```csharp
public string RemoteLocationInput { get; }
```

- *Type:* string

---

##### `RequestedFeaturesInput`<sup>Optional</sup> <a name="RequestedFeaturesInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeaturesInput"></a>

```csharp
public string[] RequestedFeaturesInput { get; }
```

- *Type:* string[]

---

##### `RequestedLinkCountInput`<sup>Optional</sup> <a name="RequestedLinkCountInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCountInput"></a>

```csharp
public double RequestedLinkCountInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.timeoutsInput"></a>

```csharp
public IResolvable|ComputeInterconnectTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabled"></a>

```csharp
public bool|IResolvable AdminEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CustomerName`<sup>Required</sup> <a name="CustomerName" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.customerName"></a>

```csharp
public string CustomerName { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InterconnectType`<sup>Required</sup> <a name="InterconnectType" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectType"></a>

```csharp
public string InterconnectType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LinkType`<sup>Required</sup> <a name="LinkType" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.linkType"></a>

```csharp
public string LinkType { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MacsecEnabled`<sup>Required</sup> <a name="MacsecEnabled" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabled"></a>

```csharp
public bool|IResolvable MacsecEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NocContactEmail`<sup>Required</sup> <a name="NocContactEmail" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmail"></a>

```csharp
public string NocContactEmail { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RemoteLocation`<sup>Required</sup> <a name="RemoteLocation" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocation"></a>

```csharp
public string RemoteLocation { get; }
```

- *Type:* string

---

##### `RequestedFeatures`<sup>Required</sup> <a name="RequestedFeatures" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeatures"></a>

```csharp
public string[] RequestedFeatures { get; }
```

- *Type:* string[]

---

##### `RequestedLinkCount`<sup>Required</sup> <a name="RequestedLinkCount" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCount"></a>

```csharp
public double RequestedLinkCount { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnect.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInterconnectCircuitInfos <a name="ComputeInterconnectCircuitInfos" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectCircuitInfos {

};
```


### ComputeInterconnectConfig <a name="ComputeInterconnectConfig" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InterconnectType,
    string LinkType,
    string Location,
    string Name,
    double RequestedLinkCount,
    bool|IResolvable AdminEnabled = null,
    string CustomerName = null,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    ComputeInterconnectMacsec Macsec = null,
    bool|IResolvable MacsecEnabled = null,
    string NocContactEmail = null,
    ComputeInterconnectParams Params = null,
    string Project = null,
    string RemoteLocation = null,
    string[] RequestedFeatures = null,
    ComputeInterconnectTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.interconnectType">InterconnectType</a></code> | <code>string</code> | Type of interconnect. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.linkType">LinkType</a></code> | <code>string</code> | Type of link requested. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.location">Location</a></code> | <code>string</code> | URL of the InterconnectLocation object that represents where this connection is to be provisioned. Specifies the location inside Google's Networks. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedLinkCount">RequestedLinkCount</a></code> | <code>double</code> | Target number of physical links in the link bundle, as requested by the customer. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.adminEnabled">AdminEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Administrative status of the interconnect. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.customerName">CustomerName</a></code> | <code>string</code> | Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#id ComputeInterconnect#id}. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels for this resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsec">Macsec</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a></code> | macsec block. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsecEnabled">MacsecEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.nocContactEmail">NocContactEmail</a></code> | <code>string</code> | Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParams">ComputeInterconnectParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#project ComputeInterconnect#project}. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.remoteLocation">RemoteLocation</a></code> | <code>string</code> | Indicates that this is a Cross-Cloud Interconnect. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedFeatures">RequestedFeatures</a></code> | <code>string[]</code> | List of features to request for this Interconnect connection. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InterconnectType`<sup>Required</sup> <a name="InterconnectType" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.interconnectType"></a>

```csharp
public string InterconnectType { get; set; }
```

- *Type:* string

Type of interconnect.

Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED.
Can take one of the following values:

* PARTNER: A partner-managed interconnection shared between customers though a partner.
* DEDICATED: A dedicated physical interconnection with the customer. Possible values: ["DEDICATED", "PARTNER", "IT_PRIVATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#interconnect_type ComputeInterconnect#interconnect_type}

---

##### `LinkType`<sup>Required</sup> <a name="LinkType" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.linkType"></a>

```csharp
public string LinkType { get; set; }
```

- *Type:* string

Type of link requested.

Note that this field indicates the speed of each of the links in the
bundle, not the speed of the entire bundle. Can take one of the following values:

* LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics.
* LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics.
* LINK_TYPE_ETHERNET_400G_LR4: A 400G Ethernet with LR4 optics Possible values: ["LINK_TYPE_ETHERNET_10G_LR", "LINK_TYPE_ETHERNET_100G_LR", "LINK_TYPE_ETHERNET_400G_LR4"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#link_type ComputeInterconnect#link_type}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

URL of the InterconnectLocation object that represents where this connection is to be provisioned. Specifies the location inside Google's Networks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#location ComputeInterconnect#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#name ComputeInterconnect#name}

---

##### `RequestedLinkCount`<sup>Required</sup> <a name="RequestedLinkCount" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedLinkCount"></a>

```csharp
public double RequestedLinkCount { get; set; }
```

- *Type:* double

Target number of physical links in the link bundle, as requested by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#requested_link_count ComputeInterconnect#requested_link_count}

---

##### `AdminEnabled`<sup>Optional</sup> <a name="AdminEnabled" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.adminEnabled"></a>

```csharp
public bool|IResolvable AdminEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Administrative status of the interconnect.

When this is set to true, the Interconnect is
functional and can carry traffic. When set to false, no packets can be carried over the
interconnect and no BGP routes are exchanged over it. By default, the status is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#admin_enabled ComputeInterconnect#admin_enabled}

---

##### `CustomerName`<sup>Optional</sup> <a name="CustomerName" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.customerName"></a>

```csharp
public string CustomerName { get; set; }
```

- *Type:* string

Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect.

This field is required for Dedicated and Partner Interconnect, should not be specified
for cross-cloud interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#customer_name ComputeInterconnect#customer_name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#deletion_policy ComputeInterconnect#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#description ComputeInterconnect#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#id ComputeInterconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels for this resource.

These can only be added or modified by the setLabels
method. Each label key/value pair must comply with RFC1035. Label values may be empty.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#labels ComputeInterconnect#labels}

---

##### `Macsec`<sup>Optional</sup> <a name="Macsec" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsec"></a>

```csharp
public ComputeInterconnectMacsec Macsec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

macsec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#macsec ComputeInterconnect#macsec}

---

##### `MacsecEnabled`<sup>Optional</sup> <a name="MacsecEnabled" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsecEnabled"></a>

```csharp
public bool|IResolvable MacsecEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#macsec_enabled ComputeInterconnect#macsec_enabled}

---

##### `NocContactEmail`<sup>Optional</sup> <a name="NocContactEmail" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.nocContactEmail"></a>

```csharp
public string NocContactEmail { get; set; }
```

- *Type:* string

Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect.

If specified, this will be used for notifications in addition to
all other forms described, such as Cloud Monitoring logs alerting and Cloud Notifications.
This field is required for users who sign up for Cloud Interconnect using workforce identity
federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#noc_contact_email ComputeInterconnect#noc_contact_email}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.params"></a>

```csharp
public ComputeInterconnectParams Params { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParams">ComputeInterconnectParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#params ComputeInterconnect#params}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#project ComputeInterconnect#project}.

---

##### `RemoteLocation`<sup>Optional</sup> <a name="RemoteLocation" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.remoteLocation"></a>

```csharp
public string RemoteLocation { get; set; }
```

- *Type:* string

Indicates that this is a Cross-Cloud Interconnect.

This field specifies the location outside
of Google's network that the interconnect is connected to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#remote_location ComputeInterconnect#remote_location}

---

##### `RequestedFeatures`<sup>Optional</sup> <a name="RequestedFeatures" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedFeatures"></a>

```csharp
public string[] RequestedFeatures { get; set; }
```

- *Type:* string[]

List of features to request for this Interconnect connection.

This field is only applicable during Interconnect creation and cannot be modified later.
Possible values include:

* 'IF_MACSEC': Provisions the connection on hardware ports that support MACsec (Media Access Control Security). If not specified, the system may allocate non-MACsec capable ports if available.
* 'IF_L2_FORWARDING': Provisions the connection for Layer 2 (L2) traffic forwarding. If not specified, the connection defaults to Layer 3 (L3) traffic forwarding.
* 'IF_CROSS_SITE_NETWORK': Provisions the connection exclusively for Cross-Site Networking.
  Note: 'MACSEC' is a legacy value for compatibility reasons and has the same effect as 'IF_MACSEC'. 'IF_MACSEC' is preferred. Possible values: ["MACSEC", "CROSS_SITE_NETWORK", "IF_MACSEC", "IF_L2_FORWARDING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#requested_features ComputeInterconnect#requested_features}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectConfig.property.timeouts"></a>

```csharp
public ComputeInterconnectTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#timeouts ComputeInterconnect#timeouts}

---

### ComputeInterconnectExpectedOutages <a name="ComputeInterconnectExpectedOutages" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectExpectedOutages {

};
```


### ComputeInterconnectMacsec <a name="ComputeInterconnectMacsec" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectMacsec {
    IResolvable|ComputeInterconnectMacsecPreSharedKeys[] PreSharedKeys,
    bool|IResolvable FailOpen = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsec.property.preSharedKeys">PreSharedKeys</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>[]</code> | pre_shared_keys block. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsec.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established. |

---

##### `PreSharedKeys`<sup>Required</sup> <a name="PreSharedKeys" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsec.property.preSharedKeys"></a>

```csharp
public IResolvable|ComputeInterconnectMacsecPreSharedKeys[] PreSharedKeys { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>[]

pre_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#pre_shared_keys ComputeInterconnect#pre_shared_keys}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsec.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established.

By default, the Interconnect
connection is configured with a must-secure security policy that drops all traffic
if the MKA session cannot be established with your router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#fail_open ComputeInterconnect#fail_open}

---

### ComputeInterconnectMacsecPreSharedKeys <a name="ComputeInterconnectMacsecPreSharedKeys" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectMacsecPreSharedKeys {
    string Name,
    bool|IResolvable FailOpen = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.name">Name</a></code> | <code>string</code> | A name for this pre-shared key. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.startTime">StartTime</a></code> | <code>string</code> | A RFC3339 timestamp on or after which the key is valid. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name for this pre-shared key.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#name ComputeInterconnect#name}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established.

By default, the Interconnect
connection is configured with a must-secure security policy that drops all traffic
if the MKA session cannot be established with your router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#fail_open ComputeInterconnect#fail_open}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

A RFC3339 timestamp on or after which the key is valid.

startTime can be in the
future. If the keychain has a single key, startTime can be omitted. If the keychain
has multiple keys, startTime is mandatory for each key. The start times of keys must
be in increasing order. The start times of two consecutive keys must be at least 6
hours apart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#start_time ComputeInterconnect#start_time}

---

### ComputeInterconnectParams <a name="ComputeInterconnectParams" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectParams {
    System.Collections.Generic.IDictionary<string, string> ResourceManagerTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource manager tags to be bound to the interconnect. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParams.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource manager tags to be bound to the interconnect.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#resource_manager_tags ComputeInterconnect#resource_manager_tags}

---

### ComputeInterconnectTimeouts <a name="ComputeInterconnectTimeouts" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#create ComputeInterconnect#create}. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#delete ComputeInterconnect#delete}. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#update ComputeInterconnect#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#create ComputeInterconnect#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#delete ComputeInterconnect#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/compute_interconnect#update ComputeInterconnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInterconnectCircuitInfosList <a name="ComputeInterconnectCircuitInfosList" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectCircuitInfosList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.get"></a>

```csharp
private ComputeInterconnectCircuitInfosOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInterconnectCircuitInfosOutputReference <a name="ComputeInterconnectCircuitInfosOutputReference" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectCircuitInfosOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.customerDemarcId">CustomerDemarcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleCircuitId">GoogleCircuitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleDemarcId">GoogleDemarcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos">ComputeInterconnectCircuitInfos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerDemarcId`<sup>Required</sup> <a name="CustomerDemarcId" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.customerDemarcId"></a>

```csharp
public string CustomerDemarcId { get; }
```

- *Type:* string

---

##### `GoogleCircuitId`<sup>Required</sup> <a name="GoogleCircuitId" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleCircuitId"></a>

```csharp
public string GoogleCircuitId { get; }
```

- *Type:* string

---

##### `GoogleDemarcId`<sup>Required</sup> <a name="GoogleDemarcId" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleDemarcId"></a>

```csharp
public string GoogleDemarcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.internalValue"></a>

```csharp
public ComputeInterconnectCircuitInfos InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos">ComputeInterconnectCircuitInfos</a>

---


### ComputeInterconnectExpectedOutagesList <a name="ComputeInterconnectExpectedOutagesList" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectExpectedOutagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.get"></a>

```csharp
private ComputeInterconnectExpectedOutagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeInterconnectExpectedOutagesOutputReference <a name="ComputeInterconnectExpectedOutagesOutputReference" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectExpectedOutagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.affectedCircuits">AffectedCircuits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.issueType">IssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages">ComputeInterconnectExpectedOutages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AffectedCircuits`<sup>Required</sup> <a name="AffectedCircuits" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.affectedCircuits"></a>

```csharp
public string[] AffectedCircuits { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.issueType"></a>

```csharp
public string IssueType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.internalValue"></a>

```csharp
public ComputeInterconnectExpectedOutages InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages">ComputeInterconnectExpectedOutages</a>

---


### ComputeInterconnectMacsecOutputReference <a name="ComputeInterconnectMacsecOutputReference" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectMacsecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.putPreSharedKeys">PutPreSharedKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPreSharedKeys` <a name="PutPreSharedKeys" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.putPreSharedKeys"></a>

```csharp
private void PutPreSharedKeys(IResolvable|ComputeInterconnectMacsecPreSharedKeys[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.putPreSharedKeys.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>[]

---

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resetFailOpen"></a>

```csharp
private void ResetFailOpen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeys">PreSharedKeys</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList">ComputeInterconnectMacsecPreSharedKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeysInput">PreSharedKeysInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreSharedKeys`<sup>Required</sup> <a name="PreSharedKeys" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeys"></a>

```csharp
public ComputeInterconnectMacsecPreSharedKeysList PreSharedKeys { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList">ComputeInterconnectMacsecPreSharedKeysList</a>

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.failOpenInput"></a>

```csharp
public bool|IResolvable FailOpenInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PreSharedKeysInput`<sup>Optional</sup> <a name="PreSharedKeysInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeysInput"></a>

```csharp
public IResolvable|ComputeInterconnectMacsecPreSharedKeys[] PreSharedKeysInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>[]

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.internalValue"></a>

```csharp
public ComputeInterconnectMacsec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

---


### ComputeInterconnectMacsecPreSharedKeysList <a name="ComputeInterconnectMacsecPreSharedKeysList" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectMacsecPreSharedKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.get"></a>

```csharp
private ComputeInterconnectMacsecPreSharedKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.internalValue"></a>

```csharp
public IResolvable|ComputeInterconnectMacsecPreSharedKeys[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>[]

---


### ComputeInterconnectMacsecPreSharedKeysOutputReference <a name="ComputeInterconnectMacsecPreSharedKeysOutputReference" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectMacsecPreSharedKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetFailOpen"></a>

```csharp
private void ResetFailOpen()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpenInput"></a>

```csharp
public bool|IResolvable FailOpenInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeInterconnectMacsecPreSharedKeys InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys">ComputeInterconnectMacsecPreSharedKeys</a>

---


### ComputeInterconnectParamsOutputReference <a name="ComputeInterconnectParamsOutputReference" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.resetResourceManagerTags"></a>

```csharp
private void ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParams">ComputeInterconnectParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.property.resourceManagerTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectParamsOutputReference.property.internalValue"></a>

```csharp
public ComputeInterconnectParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectParams">ComputeInterconnectParams</a>

---


### ComputeInterconnectTimeoutsOutputReference <a name="ComputeInterconnectTimeoutsOutputReference" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeInterconnectTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeInterconnectTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>

---



