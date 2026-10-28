# `networkServicesServiceLbPolicies` Submodule <a name="`networkServicesServiceLbPolicies` Submodule" id="@cdktn/provider-google.networkServicesServiceLbPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesServiceLbPolicies <a name="NetworkServicesServiceLbPolicies" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies google_network_services_service_lb_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesServiceLbPolicies(Construct Scope, string Id, NetworkServicesServiceLbPoliciesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig">NetworkServicesServiceLbPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig">NetworkServicesServiceLbPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain">PutAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig">PutFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetAutoCapacityDrain">ResetAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetFailoverConfig">ResetFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm">ResetLoadBalancingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoCapacityDrain` <a name="PutAutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain"></a>

```csharp
private void PutAutoCapacityDrain(NetworkServicesServiceLbPoliciesAutoCapacityDrain Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putAutoCapacityDrain.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---

##### `PutFailoverConfig` <a name="PutFailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig"></a>

```csharp
private void PutFailoverConfig(NetworkServicesServiceLbPoliciesFailoverConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkServicesServiceLbPoliciesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

---

##### `ResetAutoCapacityDrain` <a name="ResetAutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetAutoCapacityDrain"></a>

```csharp
private void ResetAutoCapacityDrain()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFailoverConfig` <a name="ResetFailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetFailoverConfig"></a>

```csharp
private void ResetFailoverConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLoadBalancingAlgorithm` <a name="ResetLoadBalancingAlgorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm"></a>

```csharp
private void ResetLoadBalancingAlgorithm()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesServiceLbPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesServiceLbPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesServiceLbPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesServiceLbPolicies.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesServiceLbPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkServicesServiceLbPolicies resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesServiceLbPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesServiceLbPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesServiceLbPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrain">AutoCapacityDrain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfig">FailoverConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference">NetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference">NetworkServicesServiceLbPoliciesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrainInput">AutoCapacityDrainInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfigInput">FailoverConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput">LoadBalancingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm">LoadBalancingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoCapacityDrain`<sup>Required</sup> <a name="AutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrain"></a>

```csharp
public NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference AutoCapacityDrain { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `FailoverConfig`<sup>Required</sup> <a name="FailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfig"></a>

```csharp
public NetworkServicesServiceLbPoliciesFailoverConfigOutputReference FailoverConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference">NetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeouts"></a>

```csharp
public NetworkServicesServiceLbPoliciesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference">NetworkServicesServiceLbPoliciesTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AutoCapacityDrainInput`<sup>Optional</sup> <a name="AutoCapacityDrainInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.autoCapacityDrainInput"></a>

```csharp
public NetworkServicesServiceLbPoliciesAutoCapacityDrain AutoCapacityDrainInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FailoverConfigInput`<sup>Optional</sup> <a name="FailoverConfigInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.failoverConfigInput"></a>

```csharp
public NetworkServicesServiceLbPoliciesFailoverConfig FailoverConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="LoadBalancingAlgorithmInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput"></a>

```csharp
public string LoadBalancingAlgorithmInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkServicesServiceLbPoliciesTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LoadBalancingAlgorithm`<sup>Required</sup> <a name="LoadBalancingAlgorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm"></a>

```csharp
public string LoadBalancingAlgorithm { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesServiceLbPoliciesAutoCapacityDrain <a name="NetworkServicesServiceLbPoliciesAutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesServiceLbPoliciesAutoCapacityDrain {
    bool|IResolvable Enable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable">Enable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Optional. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable"></a>

```csharp
public bool|IResolvable Enable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Optional.

If set to 'True', an unhealthy MIG/NEG will be set as drained. - An MIG/NEG is considered unhealthy if less than 25% of the instances/endpoints in the MIG/NEG are healthy. - This option will never result in draining more than 50% of the configured IGs/NEGs for the Backend Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#enable NetworkServicesServiceLbPolicies#enable}

---

### NetworkServicesServiceLbPoliciesConfig <a name="NetworkServicesServiceLbPoliciesConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesServiceLbPoliciesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    NetworkServicesServiceLbPoliciesAutoCapacityDrain AutoCapacityDrain = null,
    string DeletionPolicy = null,
    string Description = null,
    NetworkServicesServiceLbPoliciesFailoverConfig FailoverConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string LoadBalancingAlgorithm = null,
    string Project = null,
    NetworkServicesServiceLbPoliciesTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.location">Location</a></code> | <code>string</code> | The location of the service lb policy. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.name">Name</a></code> | <code>string</code> | Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain">AutoCapacityDrain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | auto_capacity_drain block. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.failoverConfig">FailoverConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | failover_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#id NetworkServicesServiceLbPolicies#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the ServiceLbPolicy resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm">LoadBalancingAlgorithm</a></code> | <code>string</code> | The type of load balancing algorithm to be used. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#project NetworkServicesServiceLbPolicies#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the service lb policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#location NetworkServicesServiceLbPolicies#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#name NetworkServicesServiceLbPolicies#name}

---

##### `AutoCapacityDrain`<sup>Optional</sup> <a name="AutoCapacityDrain" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain"></a>

```csharp
public NetworkServicesServiceLbPoliciesAutoCapacityDrain AutoCapacityDrain { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

auto_capacity_drain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#auto_capacity_drain NetworkServicesServiceLbPolicies#auto_capacity_drain}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#deletion_policy NetworkServicesServiceLbPolicies#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#description NetworkServicesServiceLbPolicies#description}

---

##### `FailoverConfig`<sup>Optional</sup> <a name="FailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.failoverConfig"></a>

```csharp
public NetworkServicesServiceLbPoliciesFailoverConfig FailoverConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#failover_config NetworkServicesServiceLbPolicies#failover_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#id NetworkServicesServiceLbPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the ServiceLbPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#labels NetworkServicesServiceLbPolicies#labels}

---

##### `LoadBalancingAlgorithm`<sup>Optional</sup> <a name="LoadBalancingAlgorithm" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm"></a>

```csharp
public string LoadBalancingAlgorithm { get; set; }
```

- *Type:* string

The type of load balancing algorithm to be used.

The default behavior is WATERFALL_BY_REGION. Possible values: ["SPRAY_TO_REGION", "SPRAY_TO_WORLD", "WATERFALL_BY_REGION", "WATERFALL_BY_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#load_balancing_algorithm NetworkServicesServiceLbPolicies#load_balancing_algorithm}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#project NetworkServicesServiceLbPolicies#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesConfig.property.timeouts"></a>

```csharp
public NetworkServicesServiceLbPoliciesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#timeouts NetworkServicesServiceLbPolicies#timeouts}

---

### NetworkServicesServiceLbPoliciesFailoverConfig <a name="NetworkServicesServiceLbPoliciesFailoverConfig" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesServiceLbPoliciesFailoverConfig {
    double FailoverHealthThreshold
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold">FailoverHealthThreshold</a></code> | <code>double</code> | Optional. |

---

##### `FailoverHealthThreshold`<sup>Required</sup> <a name="FailoverHealthThreshold" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold"></a>

```csharp
public double FailoverHealthThreshold { get; set; }
```

- *Type:* double

Optional.

The percentage threshold that a load balancer will begin to send traffic to failover backends. If the percentage of endpoints in a MIG/NEG is smaller than this value, traffic would be sent to failover backends if possible. This field should be set to a value between 1 and 99. The default value is 50 for Global external HTTP(S) load balancer (classic) and Proxyless service mesh, and 70 for others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#failover_health_threshold NetworkServicesServiceLbPolicies#failover_health_threshold}

---

### NetworkServicesServiceLbPoliciesTimeouts <a name="NetworkServicesServiceLbPoliciesTimeouts" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesServiceLbPoliciesTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#create NetworkServicesServiceLbPolicies#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#delete NetworkServicesServiceLbPolicies#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#update NetworkServicesServiceLbPolicies#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#create NetworkServicesServiceLbPolicies#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#delete NetworkServicesServiceLbPolicies#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_services_service_lb_policies#update NetworkServicesServiceLbPolicies#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference <a name="NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput">EnableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable">Enable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput"></a>

```csharp
public bool|IResolvable EnableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable"></a>

```csharp
public bool|IResolvable Enable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesServiceLbPoliciesAutoCapacityDrain InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesAutoCapacityDrain">NetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---


### NetworkServicesServiceLbPoliciesFailoverConfigOutputReference <a name="NetworkServicesServiceLbPoliciesFailoverConfigOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesServiceLbPoliciesFailoverConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput">FailoverHealthThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold">FailoverHealthThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailoverHealthThresholdInput`<sup>Optional</sup> <a name="FailoverHealthThresholdInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput"></a>

```csharp
public double FailoverHealthThresholdInput { get; }
```

- *Type:* double

---

##### `FailoverHealthThreshold`<sup>Required</sup> <a name="FailoverHealthThreshold" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold"></a>

```csharp
public double FailoverHealthThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesServiceLbPoliciesFailoverConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesFailoverConfig">NetworkServicesServiceLbPoliciesFailoverConfig</a>

---


### NetworkServicesServiceLbPoliciesTimeoutsOutputReference <a name="NetworkServicesServiceLbPoliciesTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesServiceLbPoliciesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkServicesServiceLbPoliciesTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesServiceLbPolicies.NetworkServicesServiceLbPoliciesTimeouts">NetworkServicesServiceLbPoliciesTimeouts</a>

---



