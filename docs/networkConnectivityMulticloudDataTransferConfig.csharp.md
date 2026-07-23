# `networkConnectivityMulticloudDataTransferConfig` Submodule <a name="`networkConnectivityMulticloudDataTransferConfig` Submodule" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityMulticloudDataTransferConfig <a name="NetworkConnectivityMulticloudDataTransferConfig" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config google_network_connectivity_multicloud_data_transfer_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityMulticloudDataTransferConfig(Construct Scope, string Id, NetworkConnectivityMulticloudDataTransferConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig">NetworkConnectivityMulticloudDataTransferConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig">NetworkConnectivityMulticloudDataTransferConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putServices">PutServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetServices">ResetServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServices` <a name="PutServices" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putServices"></a>

```csharp
private void PutServices(IResolvable|NetworkConnectivityMulticloudDataTransferConfigServices[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putServices.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkConnectivityMulticloudDataTransferConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetServices` <a name="ResetServices" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetServices"></a>

```csharp
private void ResetServices()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkConnectivityMulticloudDataTransferConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkConnectivityMulticloudDataTransferConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkConnectivityMulticloudDataTransferConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkConnectivityMulticloudDataTransferConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkConnectivityMulticloudDataTransferConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkConnectivityMulticloudDataTransferConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkConnectivityMulticloudDataTransferConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkConnectivityMulticloudDataTransferConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityMulticloudDataTransferConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsActiveCount">DestinationsActiveCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsCount">DestinationsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.services">Services</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList">NetworkConnectivityMulticloudDataTransferConfigServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference">NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.servicesInput">ServicesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DestinationsActiveCount`<sup>Required</sup> <a name="DestinationsActiveCount" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsActiveCount"></a>

```csharp
public double DestinationsActiveCount { get; }
```

- *Type:* double

---

##### `DestinationsCount`<sup>Required</sup> <a name="DestinationsCount" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsCount"></a>

```csharp
public double DestinationsCount { get; }
```

- *Type:* double

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.services"></a>

```csharp
public NetworkConnectivityMulticloudDataTransferConfigServicesList Services { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList">NetworkConnectivityMulticloudDataTransferConfigServicesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeouts"></a>

```csharp
public NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference">NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.servicesInput"></a>

```csharp
public IResolvable|NetworkConnectivityMulticloudDataTransferConfigServices[] ServicesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkConnectivityMulticloudDataTransferConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityMulticloudDataTransferConfigConfig <a name="NetworkConnectivityMulticloudDataTransferConfigConfig" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityMulticloudDataTransferConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    IResolvable|NetworkConnectivityMulticloudDataTransferConfigServices[] Services = null,
    NetworkConnectivityMulticloudDataTransferConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.location">Location</a></code> | <code>string</code> | The location of the multicloud data transfer config. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.name">Name</a></code> | <code>string</code> | The name of the MulticloudDataTransferConfig resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.description">Description</a></code> | <code>string</code> | A description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#id NetworkConnectivityMulticloudDataTransferConfig#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#project NetworkConnectivityMulticloudDataTransferConfig#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.services">Services</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>[]</code> | services block. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the multicloud data transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#location NetworkConnectivityMulticloudDataTransferConfig#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the MulticloudDataTransferConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#name NetworkConnectivityMulticloudDataTransferConfig#name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#deletion_policy NetworkConnectivityMulticloudDataTransferConfig#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#description NetworkConnectivityMulticloudDataTransferConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#id NetworkConnectivityMulticloudDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#labels NetworkConnectivityMulticloudDataTransferConfig#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#project NetworkConnectivityMulticloudDataTransferConfig#project}.

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.services"></a>

```csharp
public IResolvable|NetworkConnectivityMulticloudDataTransferConfigServices[] Services { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>[]

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#services NetworkConnectivityMulticloudDataTransferConfig#services}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.timeouts"></a>

```csharp
public NetworkConnectivityMulticloudDataTransferConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#timeouts NetworkConnectivityMulticloudDataTransferConfig#timeouts}

---

### NetworkConnectivityMulticloudDataTransferConfigServices <a name="NetworkConnectivityMulticloudDataTransferConfigServices" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityMulticloudDataTransferConfigServices {
    string ServiceName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices.property.serviceName">ServiceName</a></code> | <code>string</code> | The name of the service, like "big-query" or "cloud-storage". This corresponds to the map key in the API. |

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The name of the service, like "big-query" or "cloud-storage". This corresponds to the map key in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#service_name NetworkConnectivityMulticloudDataTransferConfig#service_name}

---

### NetworkConnectivityMulticloudDataTransferConfigServicesStates <a name="NetworkConnectivityMulticloudDataTransferConfigServicesStates" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityMulticloudDataTransferConfigServicesStates {

};
```


### NetworkConnectivityMulticloudDataTransferConfigTimeouts <a name="NetworkConnectivityMulticloudDataTransferConfigTimeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityMulticloudDataTransferConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#create NetworkConnectivityMulticloudDataTransferConfig#create}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#delete NetworkConnectivityMulticloudDataTransferConfig#delete}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#update NetworkConnectivityMulticloudDataTransferConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#create NetworkConnectivityMulticloudDataTransferConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#delete NetworkConnectivityMulticloudDataTransferConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_multicloud_data_transfer_config#update NetworkConnectivityMulticloudDataTransferConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityMulticloudDataTransferConfigServicesList <a name="NetworkConnectivityMulticloudDataTransferConfigServicesList" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityMulticloudDataTransferConfigServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.get"></a>

```csharp
private NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.internalValue"></a>

```csharp
public IResolvable|NetworkConnectivityMulticloudDataTransferConfigServices[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>[]

---


### NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference <a name="NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.states">States</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList">NetworkConnectivityMulticloudDataTransferConfigServicesStatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `States`<sup>Required</sup> <a name="States" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.states"></a>

```csharp
public NetworkConnectivityMulticloudDataTransferConfigServicesStatesList States { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList">NetworkConnectivityMulticloudDataTransferConfigServicesStatesList</a>

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkConnectivityMulticloudDataTransferConfigServices InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>

---


### NetworkConnectivityMulticloudDataTransferConfigServicesStatesList <a name="NetworkConnectivityMulticloudDataTransferConfigServicesStatesList" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityMulticloudDataTransferConfigServicesStatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get"></a>

```csharp
private NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference <a name="NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.effectiveTime">EffectiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates">NetworkConnectivityMulticloudDataTransferConfigServicesStates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveTime`<sup>Required</sup> <a name="EffectiveTime" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.effectiveTime"></a>

```csharp
public string EffectiveTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.internalValue"></a>

```csharp
public NetworkConnectivityMulticloudDataTransferConfigServicesStates InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates">NetworkConnectivityMulticloudDataTransferConfigServicesStates</a>

---


### NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference <a name="NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkConnectivityMulticloudDataTransferConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

---



