# `networkServicesMulticastGroupConsumerActivation` Submodule <a name="`networkServicesMulticastGroupConsumerActivation` Submodule" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastGroupConsumerActivation <a name="NetworkServicesMulticastGroupConsumerActivation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation google_network_services_multicast_group_consumer_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastGroupConsumerActivation(Construct Scope, string Id, NetworkServicesMulticastGroupConsumerActivationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig">NetworkServicesMulticastGroupConsumerActivationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig">NetworkServicesMulticastGroupConsumerActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putLogConfig"></a>

```csharp
private void PutLogConfig(NetworkServicesMulticastGroupConsumerActivationLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkServicesMulticastGroupConsumerActivationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastGroupConsumerActivation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesMulticastGroupConsumerActivation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesMulticastGroupConsumerActivation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesMulticastGroupConsumerActivation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesMulticastGroupConsumerActivation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkServicesMulticastGroupConsumerActivation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesMulticastGroupConsumerActivation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesMulticastGroupConsumerActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastGroupConsumerActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference">NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.state">State</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList">NetworkServicesMulticastGroupConsumerActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference">NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.uniqueId">UniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociationInput">MulticastConsumerAssociationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationIdInput">MulticastGroupConsumerActivationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivationInput">MulticastGroupRangeActivationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociation">MulticastConsumerAssociation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationId">MulticastGroupConsumerActivationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivation">MulticastGroupRangeActivation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfig"></a>

```csharp
public NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference">NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.state"></a>

```csharp
public NetworkServicesMulticastGroupConsumerActivationStateList State { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList">NetworkServicesMulticastGroupConsumerActivationStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeouts"></a>

```csharp
public NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference">NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.uniqueId"></a>

```csharp
public string UniqueId { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfigInput"></a>

```csharp
public NetworkServicesMulticastGroupConsumerActivationLogConfig LogConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---

##### `MulticastConsumerAssociationInput`<sup>Optional</sup> <a name="MulticastConsumerAssociationInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociationInput"></a>

```csharp
public string MulticastConsumerAssociationInput { get; }
```

- *Type:* string

---

##### `MulticastGroupConsumerActivationIdInput`<sup>Optional</sup> <a name="MulticastGroupConsumerActivationIdInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationIdInput"></a>

```csharp
public string MulticastGroupConsumerActivationIdInput { get; }
```

- *Type:* string

---

##### `MulticastGroupRangeActivationInput`<sup>Optional</sup> <a name="MulticastGroupRangeActivationInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivationInput"></a>

```csharp
public string MulticastGroupRangeActivationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkServicesMulticastGroupConsumerActivationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MulticastConsumerAssociation`<sup>Required</sup> <a name="MulticastConsumerAssociation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociation"></a>

```csharp
public string MulticastConsumerAssociation { get; }
```

- *Type:* string

---

##### `MulticastGroupConsumerActivationId`<sup>Required</sup> <a name="MulticastGroupConsumerActivationId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationId"></a>

```csharp
public string MulticastGroupConsumerActivationId { get; }
```

- *Type:* string

---

##### `MulticastGroupRangeActivation`<sup>Required</sup> <a name="MulticastGroupRangeActivation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivation"></a>

```csharp
public string MulticastGroupRangeActivation { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastGroupConsumerActivationConfig <a name="NetworkServicesMulticastGroupConsumerActivationConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastGroupConsumerActivationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string MulticastConsumerAssociation,
    string MulticastGroupConsumerActivationId,
    string MulticastGroupRangeActivation,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    NetworkServicesMulticastGroupConsumerActivationLogConfig LogConfig = null,
    string Project = null,
    NetworkServicesMulticastGroupConsumerActivationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastConsumerAssociation">MulticastConsumerAssociation</a></code> | <code>string</code> | The resource name of the multicast consumer association that is in the same zone as this multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupConsumerActivationId">MulticastGroupConsumerActivationId</a></code> | <code>string</code> | A unique name for the multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupRangeActivation">MulticastGroupRangeActivation</a></code> | <code>string</code> | The resource name of the multicast group range activation created by the admin in the same zone as this multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.description">Description</a></code> | <code>string</code> | An optional text description of the multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#id NetworkServicesMulticastGroupConsumerActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#project NetworkServicesMulticastGroupConsumerActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#location NetworkServicesMulticastGroupConsumerActivation#location}

---

##### `MulticastConsumerAssociation`<sup>Required</sup> <a name="MulticastConsumerAssociation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastConsumerAssociation"></a>

```csharp
public string MulticastConsumerAssociation { get; set; }
```

- *Type:* string

The resource name of the multicast consumer association that is in the same zone as this multicast group consumer activation.

Use the following format:
'projects/* /locations/* /multicastConsumerAssociations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_consumer_association NetworkServicesMulticastGroupConsumerActivation#multicast_consumer_association}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `MulticastGroupConsumerActivationId`<sup>Required</sup> <a name="MulticastGroupConsumerActivationId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupConsumerActivationId"></a>

```csharp
public string MulticastGroupConsumerActivationId { get; set; }
```

- *Type:* string

A unique name for the multicast group consumer activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_group_consumer_activation_id NetworkServicesMulticastGroupConsumerActivation#multicast_group_consumer_activation_id}

---

##### `MulticastGroupRangeActivation`<sup>Required</sup> <a name="MulticastGroupRangeActivation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupRangeActivation"></a>

```csharp
public string MulticastGroupRangeActivation { get; set; }
```

- *Type:* string

The resource name of the multicast group range activation created by the admin in the same zone as this multicast group consumer activation.

Use the
following format:
// 'projects/* /locations/* /multicastGroupRangeActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_group_range_activation NetworkServicesMulticastGroupConsumerActivation#multicast_group_range_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#deletion_policy NetworkServicesMulticastGroupConsumerActivation#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional text description of the multicast group consumer activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#description NetworkServicesMulticastGroupConsumerActivation#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#id NetworkServicesMulticastGroupConsumerActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#labels NetworkServicesMulticastGroupConsumerActivation#labels}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.logConfig"></a>

```csharp
public NetworkServicesMulticastGroupConsumerActivationLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#log_config NetworkServicesMulticastGroupConsumerActivation#log_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#project NetworkServicesMulticastGroupConsumerActivation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.timeouts"></a>

```csharp
public NetworkServicesMulticastGroupConsumerActivationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#timeouts NetworkServicesMulticastGroupConsumerActivation#timeouts}

---

### NetworkServicesMulticastGroupConsumerActivationLogConfig <a name="NetworkServicesMulticastGroupConsumerActivationLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastGroupConsumerActivationLogConfig {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable logging or not. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable logging or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#enabled NetworkServicesMulticastGroupConsumerActivation#enabled}

---

### NetworkServicesMulticastGroupConsumerActivationState <a name="NetworkServicesMulticastGroupConsumerActivationState" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastGroupConsumerActivationState {

};
```


### NetworkServicesMulticastGroupConsumerActivationTimeouts <a name="NetworkServicesMulticastGroupConsumerActivationTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastGroupConsumerActivationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#create NetworkServicesMulticastGroupConsumerActivation#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#delete NetworkServicesMulticastGroupConsumerActivation#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#update NetworkServicesMulticastGroupConsumerActivation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#create NetworkServicesMulticastGroupConsumerActivation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#delete NetworkServicesMulticastGroupConsumerActivation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_group_consumer_activation#update NetworkServicesMulticastGroupConsumerActivation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference <a name="NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesMulticastGroupConsumerActivationLogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---


### NetworkServicesMulticastGroupConsumerActivationStateList <a name="NetworkServicesMulticastGroupConsumerActivationStateList" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastGroupConsumerActivationStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.get"></a>

```csharp
private NetworkServicesMulticastGroupConsumerActivationStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkServicesMulticastGroupConsumerActivationStateOutputReference <a name="NetworkServicesMulticastGroupConsumerActivationStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastGroupConsumerActivationStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState">NetworkServicesMulticastGroupConsumerActivationState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesMulticastGroupConsumerActivationState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState">NetworkServicesMulticastGroupConsumerActivationState</a>

---


### NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference <a name="NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkServicesMulticastGroupConsumerActivationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

---



