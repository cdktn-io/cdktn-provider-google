# `networkConnectivityTransport` Submodule <a name="`networkConnectivityTransport` Submodule" id="@cdktn/provider-google.networkConnectivityTransport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityTransport <a name="NetworkConnectivityTransport" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport google_network_connectivity_transport}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityTransport(Construct Scope, string Id, NetworkConnectivityTransportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig">NetworkConnectivityTransportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig">NetworkConnectivityTransportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetAdvertisedRoutes">ResetAdvertisedRoutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetBandwidth">ResetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetMtuLimit">ResetMtuLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProvidedActivationKey">ResetProvidedActivationKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetRemoteAccountId">ResetRemoteAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetStackType">ResetStackType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkConnectivityTransportTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

---

##### `ResetAdvertisedRoutes` <a name="ResetAdvertisedRoutes" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetAdvertisedRoutes"></a>

```csharp
private void ResetAdvertisedRoutes()
```

##### `ResetBandwidth` <a name="ResetBandwidth" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetBandwidth"></a>

```csharp
private void ResetBandwidth()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMtuLimit` <a name="ResetMtuLimit" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetMtuLimit"></a>

```csharp
private void ResetMtuLimit()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProvidedActivationKey` <a name="ResetProvidedActivationKey" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetProvidedActivationKey"></a>

```csharp
private void ResetProvidedActivationKey()
```

##### `ResetRemoteAccountId` <a name="ResetRemoteAccountId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetRemoteAccountId"></a>

```csharp
private void ResetRemoteAccountId()
```

##### `ResetStackType` <a name="ResetStackType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetStackType"></a>

```csharp
private void ResetStackType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkConnectivityTransport resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkConnectivityTransport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkConnectivityTransport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkConnectivityTransport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkConnectivityTransport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkConnectivityTransport resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkConnectivityTransport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkConnectivityTransport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityTransport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.generatedActivationKey">GeneratedActivationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.peeringNetwork">PeeringNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference">NetworkConnectivityTransportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutesInput">AdvertisedRoutesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidthInput">BandwidthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimitInput">MtuLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKeyInput">ProvidedActivationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountIdInput">RemoteAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfileInput">RemoteProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackTypeInput">StackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutes">AdvertisedRoutes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidth">Bandwidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimit">MtuLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKey">ProvidedActivationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountId">RemoteAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfile">RemoteProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackType">StackType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `GeneratedActivationKey`<sup>Required</sup> <a name="GeneratedActivationKey" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.generatedActivationKey"></a>

```csharp
public string GeneratedActivationKey { get; }
```

- *Type:* string

---

##### `PeeringNetwork`<sup>Required</sup> <a name="PeeringNetwork" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.peeringNetwork"></a>

```csharp
public string PeeringNetwork { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeouts"></a>

```csharp
public NetworkConnectivityTransportTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference">NetworkConnectivityTransportTimeoutsOutputReference</a>

---

##### `AdvertisedRoutesInput`<sup>Optional</sup> <a name="AdvertisedRoutesInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutesInput"></a>

```csharp
public string[] AdvertisedRoutesInput { get; }
```

- *Type:* string[]

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidthInput"></a>

```csharp
public string BandwidthInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MtuLimitInput`<sup>Optional</sup> <a name="MtuLimitInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimitInput"></a>

```csharp
public double MtuLimitInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProvidedActivationKeyInput`<sup>Optional</sup> <a name="ProvidedActivationKeyInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKeyInput"></a>

```csharp
public string ProvidedActivationKeyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RemoteAccountIdInput`<sup>Optional</sup> <a name="RemoteAccountIdInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountIdInput"></a>

```csharp
public string RemoteAccountIdInput { get; }
```

- *Type:* string

---

##### `RemoteProfileInput`<sup>Optional</sup> <a name="RemoteProfileInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfileInput"></a>

```csharp
public string RemoteProfileInput { get; }
```

- *Type:* string

---

##### `StackTypeInput`<sup>Optional</sup> <a name="StackTypeInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackTypeInput"></a>

```csharp
public string StackTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkConnectivityTransportTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

---

##### `AdvertisedRoutes`<sup>Required</sup> <a name="AdvertisedRoutes" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.advertisedRoutes"></a>

```csharp
public string[] AdvertisedRoutes { get; }
```

- *Type:* string[]

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.bandwidth"></a>

```csharp
public string Bandwidth { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MtuLimit`<sup>Required</sup> <a name="MtuLimit" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.mtuLimit"></a>

```csharp
public double MtuLimit { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProvidedActivationKey`<sup>Required</sup> <a name="ProvidedActivationKey" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.providedActivationKey"></a>

```csharp
public string ProvidedActivationKey { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RemoteAccountId`<sup>Required</sup> <a name="RemoteAccountId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteAccountId"></a>

```csharp
public string RemoteAccountId { get; }
```

- *Type:* string

---

##### `RemoteProfile`<sup>Required</sup> <a name="RemoteProfile" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.remoteProfile"></a>

```csharp
public string RemoteProfile { get; }
```

- *Type:* string

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.stackType"></a>

```csharp
public string StackType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityTransportConfig <a name="NetworkConnectivityTransportConfig" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityTransportConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Network,
    string Region,
    string RemoteProfile,
    string[] AdvertisedRoutes = null,
    string Bandwidth = null,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    double MtuLimit = null,
    string Project = null,
    string ProvidedActivationKey = null,
    string RemoteAccountId = null,
    string StackType = null,
    NetworkConnectivityTransportTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource, see google.aip.dev/122 for resource naming. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.network">Network</a></code> | <code>string</code> | Resource URL of the Network that will be peered with this Transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.region">Region</a></code> | <code>string</code> | The region of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteProfile">RemoteProfile</a></code> | <code>string</code> | Resource URL of the remoteTransportProfile that this Transport is connecting to. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.advertisedRoutes">AdvertisedRoutes</a></code> | <code>string[]</code> | List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.bandwidth">Bandwidth</a></code> | <code>string</code> | Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#id NetworkConnectivityTransport#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.mtuLimit">MtuLimit</a></code> | <code>double</code> | [Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#project NetworkConnectivityTransport#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.providedActivationKey">ProvidedActivationKey</a></code> | <code>string</code> | Key used for establishing a connection with the remote transport. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteAccountId">RemoteAccountId</a></code> | <code>string</code> | The user supplied account id for the CSP associated with the remote profile. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.stackType">StackType</a></code> | <code>string</code> | IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource, see google.aip.dev/122 for resource naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#name NetworkConnectivityTransport#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Resource URL of the Network that will be peered with this Transport.

This field must be provided during resource creation and cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#network NetworkConnectivityTransport#network}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of this resource.

This is required to construct the resource name, but is not sent to the API since the region is already contained in the parent field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#region NetworkConnectivityTransport#region}

---

##### `RemoteProfile`<sup>Required</sup> <a name="RemoteProfile" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteProfile"></a>

```csharp
public string RemoteProfile { get; set; }
```

- *Type:* string

Resource URL of the remoteTransportProfile that this Transport is connecting to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#remote_profile NetworkConnectivityTransport#remote_profile}

---

##### `AdvertisedRoutes`<sup>Optional</sup> <a name="AdvertisedRoutes" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.advertisedRoutes"></a>

```csharp
public string[] AdvertisedRoutes { get; set; }
```

- *Type:* string[]

List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#advertised_routes NetworkConnectivityTransport#advertised_routes}

---

##### `Bandwidth`<sup>Optional</sup> <a name="Bandwidth" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.bandwidth"></a>

```csharp
public string Bandwidth { get; set; }
```

- *Type:* string

Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#bandwidth NetworkConnectivityTransport#bandwidth}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#deletion_policy NetworkConnectivityTransport#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#description NetworkConnectivityTransport#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#id NetworkConnectivityTransport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#labels NetworkConnectivityTransport#labels}

---

##### `MtuLimit`<sup>Optional</sup> <a name="MtuLimit" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.mtuLimit"></a>

```csharp
public double MtuLimit { get; set; }
```

- *Type:* double

[Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#mtu_limit NetworkConnectivityTransport#mtu_limit}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#project NetworkConnectivityTransport#project}.

---

##### `ProvidedActivationKey`<sup>Optional</sup> <a name="ProvidedActivationKey" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.providedActivationKey"></a>

```csharp
public string ProvidedActivationKey { get; set; }
```

- *Type:* string

Key used for establishing a connection with the remote transport.

This key can only be provided if the profile supports an INPUT key flow and the resource is in the PENDING_KEY state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#provided_activation_key NetworkConnectivityTransport#provided_activation_key}

---

##### `RemoteAccountId`<sup>Optional</sup> <a name="RemoteAccountId" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.remoteAccountId"></a>

```csharp
public string RemoteAccountId { get; set; }
```

- *Type:* string

The user supplied account id for the CSP associated with the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#remote_account_id NetworkConnectivityTransport#remote_account_id}

---

##### `StackType`<sup>Optional</sup> <a name="StackType" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.stackType"></a>

```csharp
public string StackType { get; set; }
```

- *Type:* string

IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#stack_type NetworkConnectivityTransport#stack_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportConfig.property.timeouts"></a>

```csharp
public NetworkConnectivityTransportTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#timeouts NetworkConnectivityTransport#timeouts}

---

### NetworkConnectivityTransportTimeouts <a name="NetworkConnectivityTransportTimeouts" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityTransportTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#create NetworkConnectivityTransport#create}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#delete NetworkConnectivityTransport#delete}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#update NetworkConnectivityTransport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#create NetworkConnectivityTransport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#delete NetworkConnectivityTransport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_transport#update NetworkConnectivityTransport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityTransportTimeoutsOutputReference <a name="NetworkConnectivityTransportTimeoutsOutputReference" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityTransportTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkConnectivityTransportTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityTransport.NetworkConnectivityTransportTimeouts">NetworkConnectivityTransportTimeouts</a>

---



