# `networkServicesMulticastDomainActivation` Submodule <a name="`networkServicesMulticastDomainActivation` Submodule" id="@cdktn/provider-google.networkServicesMulticastDomainActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastDomainActivation <a name="NetworkServicesMulticastDomainActivation" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation google_network_services_multicast_domain_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainActivation(Construct Scope, string Id, NetworkServicesMulticastDomainActivationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig">NetworkServicesMulticastDomainActivationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig">NetworkServicesMulticastDomainActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTrafficSpec">PutTrafficSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDisablePlacementPolicy">ResetDisablePlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTrafficSpec">ResetTrafficSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkServicesMulticastDomainActivationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

---

##### `PutTrafficSpec` <a name="PutTrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTrafficSpec"></a>

```csharp
private void PutTrafficSpec(NetworkServicesMulticastDomainActivationTrafficSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTrafficSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisablePlacementPolicy` <a name="ResetDisablePlacementPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDisablePlacementPolicy"></a>

```csharp
private void ResetDisablePlacementPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrafficSpec` <a name="ResetTrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTrafficSpec"></a>

```csharp
private void ResetTrafficSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesMulticastDomainActivation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesMulticastDomainActivation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesMulticastDomainActivation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesMulticastDomainActivation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesMulticastDomainActivation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesMulticastDomainActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastDomainActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.adminNetwork">AdminNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.state">State</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList">NetworkServicesMulticastDomainActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference">NetworkServicesMulticastDomainActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpec">TrafficSpec</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference">NetworkServicesMulticastDomainActivationTrafficSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.uniqueId">UniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicyInput">DisablePlacementPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationIdInput">MulticastDomainActivationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainInput">MulticastDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpecInput">TrafficSpecInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicy">DisablePlacementPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomain">MulticastDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationId">MulticastDomainActivationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdminNetwork`<sup>Required</sup> <a name="AdminNetwork" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.adminNetwork"></a>

```csharp
public string AdminNetwork { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.state"></a>

```csharp
public NetworkServicesMulticastDomainActivationStateList State { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList">NetworkServicesMulticastDomainActivationStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeouts"></a>

```csharp
public NetworkServicesMulticastDomainActivationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference">NetworkServicesMulticastDomainActivationTimeoutsOutputReference</a>

---

##### `TrafficSpec`<sup>Required</sup> <a name="TrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpec"></a>

```csharp
public NetworkServicesMulticastDomainActivationTrafficSpecOutputReference TrafficSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference">NetworkServicesMulticastDomainActivationTrafficSpecOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.uniqueId"></a>

```csharp
public string UniqueId { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisablePlacementPolicyInput`<sup>Optional</sup> <a name="DisablePlacementPolicyInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicyInput"></a>

```csharp
public bool|IResolvable DisablePlacementPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MulticastDomainActivationIdInput`<sup>Optional</sup> <a name="MulticastDomainActivationIdInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationIdInput"></a>

```csharp
public string MulticastDomainActivationIdInput { get; }
```

- *Type:* string

---

##### `MulticastDomainInput`<sup>Optional</sup> <a name="MulticastDomainInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainInput"></a>

```csharp
public string MulticastDomainInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkServicesMulticastDomainActivationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

---

##### `TrafficSpecInput`<sup>Optional</sup> <a name="TrafficSpecInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpecInput"></a>

```csharp
public NetworkServicesMulticastDomainActivationTrafficSpec TrafficSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisablePlacementPolicy`<sup>Required</sup> <a name="DisablePlacementPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicy"></a>

```csharp
public bool|IResolvable DisablePlacementPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MulticastDomain`<sup>Required</sup> <a name="MulticastDomain" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomain"></a>

```csharp
public string MulticastDomain { get; }
```

- *Type:* string

---

##### `MulticastDomainActivationId`<sup>Required</sup> <a name="MulticastDomainActivationId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationId"></a>

```csharp
public string MulticastDomainActivationId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastDomainActivationConfig <a name="NetworkServicesMulticastDomainActivationConfig" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainActivationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string MulticastDomain,
    string MulticastDomainActivationId,
    string DeletionPolicy = null,
    string Description = null,
    bool|IResolvable DisablePlacementPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    NetworkServicesMulticastDomainActivationTimeouts Timeouts = null,
    NetworkServicesMulticastDomainActivationTrafficSpec TrafficSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomain">MulticastDomain</a></code> | <code>string</code> | The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomainActivationId">MulticastDomainActivationId</a></code> | <code>string</code> | A unique name for the multicast domain activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.description">Description</a></code> | <code>string</code> | An optional text description of the multicast domain activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.disablePlacementPolicy">DisablePlacementPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Option to allow disabling placement policy for multicast infrastructure. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#id NetworkServicesMulticastDomainActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#project NetworkServicesMulticastDomainActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.trafficSpec">TrafficSpec</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a></code> | traffic_spec block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#location NetworkServicesMulticastDomainActivation#location}

---

##### `MulticastDomain`<sup>Required</sup> <a name="MulticastDomain" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomain"></a>

```csharp
public string MulticastDomain { get; set; }
```

- *Type:* string

The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#multicast_domain NetworkServicesMulticastDomainActivation#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `MulticastDomainActivationId`<sup>Required</sup> <a name="MulticastDomainActivationId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomainActivationId"></a>

```csharp
public string MulticastDomainActivationId { get; set; }
```

- *Type:* string

A unique name for the multicast domain activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#multicast_domain_activation_id NetworkServicesMulticastDomainActivation#multicast_domain_activation_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#deletion_policy NetworkServicesMulticastDomainActivation#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional text description of the multicast domain activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#description NetworkServicesMulticastDomainActivation#description}

---

##### `DisablePlacementPolicy`<sup>Optional</sup> <a name="DisablePlacementPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.disablePlacementPolicy"></a>

```csharp
public bool|IResolvable DisablePlacementPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Option to allow disabling placement policy for multicast infrastructure.

Only applicable if the activation is for a domain associating with a
multicast domain group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#disable_placement_policy NetworkServicesMulticastDomainActivation#disable_placement_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#id NetworkServicesMulticastDomainActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#labels NetworkServicesMulticastDomainActivation#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#project NetworkServicesMulticastDomainActivation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.timeouts"></a>

```csharp
public NetworkServicesMulticastDomainActivationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#timeouts NetworkServicesMulticastDomainActivation#timeouts}

---

##### `TrafficSpec`<sup>Optional</sup> <a name="TrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.trafficSpec"></a>

```csharp
public NetworkServicesMulticastDomainActivationTrafficSpec TrafficSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

traffic_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#traffic_spec NetworkServicesMulticastDomainActivation#traffic_spec}

---

### NetworkServicesMulticastDomainActivationState <a name="NetworkServicesMulticastDomainActivationState" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainActivationState {

};
```


### NetworkServicesMulticastDomainActivationTimeouts <a name="NetworkServicesMulticastDomainActivationTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainActivationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#create NetworkServicesMulticastDomainActivation#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#delete NetworkServicesMulticastDomainActivation#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#update NetworkServicesMulticastDomainActivation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#create NetworkServicesMulticastDomainActivation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#delete NetworkServicesMulticastDomainActivation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#update NetworkServicesMulticastDomainActivation#update}.

---

### NetworkServicesMulticastDomainActivationTrafficSpec <a name="NetworkServicesMulticastDomainActivationTrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainActivationTrafficSpec {
    string AggrEgressPps = null,
    string AggrIngressPps = null,
    double AvgPacketSize = null,
    string MaxPerGroupIngressPps = null,
    string MaxPerGroupSubscribers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrEgressPps">AggrEgressPps</a></code> | <code>string</code> | Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrIngressPps">AggrIngressPps</a></code> | <code>string</code> | Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.avgPacketSize">AvgPacketSize</a></code> | <code>double</code> | Average packet size (Default to 512 bytes). |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupIngressPps">MaxPerGroupIngressPps</a></code> | <code>string</code> | Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupSubscribers">MaxPerGroupSubscribers</a></code> | <code>string</code> | Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps). |

---

##### `AggrEgressPps`<sup>Optional</sup> <a name="AggrEgressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrEgressPps"></a>

```csharp
public string AggrEgressPps { get; set; }
```

- *Type:* string

Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#aggr_egress_pps NetworkServicesMulticastDomainActivation#aggr_egress_pps}

---

##### `AggrIngressPps`<sup>Optional</sup> <a name="AggrIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrIngressPps"></a>

```csharp
public string AggrIngressPps { get; set; }
```

- *Type:* string

Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#aggr_ingress_pps NetworkServicesMulticastDomainActivation#aggr_ingress_pps}

---

##### `AvgPacketSize`<sup>Optional</sup> <a name="AvgPacketSize" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.avgPacketSize"></a>

```csharp
public double AvgPacketSize { get; set; }
```

- *Type:* double

Average packet size (Default to 512 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#avg_packet_size NetworkServicesMulticastDomainActivation#avg_packet_size}

---

##### `MaxPerGroupIngressPps`<sup>Optional</sup> <a name="MaxPerGroupIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupIngressPps"></a>

```csharp
public string MaxPerGroupIngressPps { get; set; }
```

- *Type:* string

Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#max_per_group_ingress_pps NetworkServicesMulticastDomainActivation#max_per_group_ingress_pps}

---

##### `MaxPerGroupSubscribers`<sup>Optional</sup> <a name="MaxPerGroupSubscribers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupSubscribers"></a>

```csharp
public string MaxPerGroupSubscribers { get; set; }
```

- *Type:* string

Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/network_services_multicast_domain_activation#max_per_group_subscribers NetworkServicesMulticastDomainActivation#max_per_group_subscribers}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastDomainActivationStateList <a name="NetworkServicesMulticastDomainActivationStateList" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainActivationStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.get"></a>

```csharp
private NetworkServicesMulticastDomainActivationStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkServicesMulticastDomainActivationStateOutputReference <a name="NetworkServicesMulticastDomainActivationStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainActivationStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState">NetworkServicesMulticastDomainActivationState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesMulticastDomainActivationState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState">NetworkServicesMulticastDomainActivationState</a>

---


### NetworkServicesMulticastDomainActivationTimeoutsOutputReference <a name="NetworkServicesMulticastDomainActivationTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainActivationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkServicesMulticastDomainActivationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

---


### NetworkServicesMulticastDomainActivationTrafficSpecOutputReference <a name="NetworkServicesMulticastDomainActivationTrafficSpecOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastDomainActivationTrafficSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrEgressPps">ResetAggrEgressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrIngressPps">ResetAggrIngressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAvgPacketSize">ResetAvgPacketSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupIngressPps">ResetMaxPerGroupIngressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupSubscribers">ResetMaxPerGroupSubscribers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggrEgressPps` <a name="ResetAggrEgressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrEgressPps"></a>

```csharp
private void ResetAggrEgressPps()
```

##### `ResetAggrIngressPps` <a name="ResetAggrIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrIngressPps"></a>

```csharp
private void ResetAggrIngressPps()
```

##### `ResetAvgPacketSize` <a name="ResetAvgPacketSize" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAvgPacketSize"></a>

```csharp
private void ResetAvgPacketSize()
```

##### `ResetMaxPerGroupIngressPps` <a name="ResetMaxPerGroupIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupIngressPps"></a>

```csharp
private void ResetMaxPerGroupIngressPps()
```

##### `ResetMaxPerGroupSubscribers` <a name="ResetMaxPerGroupSubscribers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupSubscribers"></a>

```csharp
private void ResetMaxPerGroupSubscribers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPpsInput">AggrEgressPpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPpsInput">AggrIngressPpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSizeInput">AvgPacketSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPpsInput">MaxPerGroupIngressPpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribersInput">MaxPerGroupSubscribersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPps">AggrEgressPps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPps">AggrIngressPps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSize">AvgPacketSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPps">MaxPerGroupIngressPps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribers">MaxPerGroupSubscribers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggrEgressPpsInput`<sup>Optional</sup> <a name="AggrEgressPpsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPpsInput"></a>

```csharp
public string AggrEgressPpsInput { get; }
```

- *Type:* string

---

##### `AggrIngressPpsInput`<sup>Optional</sup> <a name="AggrIngressPpsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPpsInput"></a>

```csharp
public string AggrIngressPpsInput { get; }
```

- *Type:* string

---

##### `AvgPacketSizeInput`<sup>Optional</sup> <a name="AvgPacketSizeInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSizeInput"></a>

```csharp
public double AvgPacketSizeInput { get; }
```

- *Type:* double

---

##### `MaxPerGroupIngressPpsInput`<sup>Optional</sup> <a name="MaxPerGroupIngressPpsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPpsInput"></a>

```csharp
public string MaxPerGroupIngressPpsInput { get; }
```

- *Type:* string

---

##### `MaxPerGroupSubscribersInput`<sup>Optional</sup> <a name="MaxPerGroupSubscribersInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribersInput"></a>

```csharp
public string MaxPerGroupSubscribersInput { get; }
```

- *Type:* string

---

##### `AggrEgressPps`<sup>Required</sup> <a name="AggrEgressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPps"></a>

```csharp
public string AggrEgressPps { get; }
```

- *Type:* string

---

##### `AggrIngressPps`<sup>Required</sup> <a name="AggrIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPps"></a>

```csharp
public string AggrIngressPps { get; }
```

- *Type:* string

---

##### `AvgPacketSize`<sup>Required</sup> <a name="AvgPacketSize" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSize"></a>

```csharp
public double AvgPacketSize { get; }
```

- *Type:* double

---

##### `MaxPerGroupIngressPps`<sup>Required</sup> <a name="MaxPerGroupIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPps"></a>

```csharp
public string MaxPerGroupIngressPps { get; }
```

- *Type:* string

---

##### `MaxPerGroupSubscribers`<sup>Required</sup> <a name="MaxPerGroupSubscribers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribers"></a>

```csharp
public string MaxPerGroupSubscribers { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesMulticastDomainActivationTrafficSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

---



