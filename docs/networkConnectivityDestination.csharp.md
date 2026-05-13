# `networkConnectivityDestination` Submodule <a name="`networkConnectivityDestination` Submodule" id="@cdktn/provider-google.networkConnectivityDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityDestination <a name="NetworkConnectivityDestination" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination google_network_connectivity_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityDestination(Construct Scope, string Id, NetworkConnectivityDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig">NetworkConnectivityDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig">NetworkConnectivityDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.putEndpoints">PutEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoints` <a name="PutEndpoints" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.putEndpoints"></a>

```csharp
private void PutEndpoints(IResolvable|NetworkConnectivityDestinationEndpoints[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.putEndpoints.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkConnectivityDestinationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts">NetworkConnectivityDestinationTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkConnectivityDestination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkConnectivityDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkConnectivityDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkConnectivityDestination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkConnectivityDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkConnectivityDestination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkConnectivityDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkConnectivityDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList">NetworkConnectivityDestinationEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.stateTimeline">StateTimeline</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList">NetworkConnectivityDestinationStateTimelineList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference">NetworkConnectivityDestinationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.endpointsInput">EndpointsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.ipPrefixInput">IpPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.multicloudDataTransferConfigInput">MulticloudDataTransferConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts">NetworkConnectivityDestinationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.ipPrefix">IpPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.multicloudDataTransferConfig">MulticloudDataTransferConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.endpoints"></a>

```csharp
public NetworkConnectivityDestinationEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList">NetworkConnectivityDestinationEndpointsList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `StateTimeline`<sup>Required</sup> <a name="StateTimeline" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.stateTimeline"></a>

```csharp
public NetworkConnectivityDestinationStateTimelineList StateTimeline { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList">NetworkConnectivityDestinationStateTimelineList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.timeouts"></a>

```csharp
public NetworkConnectivityDestinationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference">NetworkConnectivityDestinationTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.endpointsInput"></a>

```csharp
public IResolvable|NetworkConnectivityDestinationEndpoints[] EndpointsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpPrefixInput`<sup>Optional</sup> <a name="IpPrefixInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.ipPrefixInput"></a>

```csharp
public string IpPrefixInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MulticloudDataTransferConfigInput`<sup>Optional</sup> <a name="MulticloudDataTransferConfigInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.multicloudDataTransferConfigInput"></a>

```csharp
public string MulticloudDataTransferConfigInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkConnectivityDestinationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts">NetworkConnectivityDestinationTimeouts</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpPrefix`<sup>Required</sup> <a name="IpPrefix" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.ipPrefix"></a>

```csharp
public string IpPrefix { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MulticloudDataTransferConfig`<sup>Required</sup> <a name="MulticloudDataTransferConfig" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.multicloudDataTransferConfig"></a>

```csharp
public string MulticloudDataTransferConfig { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityDestinationConfig <a name="NetworkConnectivityDestinationConfig" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityDestinationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|NetworkConnectivityDestinationEndpoints[] Endpoints,
    string IpPrefix,
    string Location,
    string MulticloudDataTransferConfig,
    string Name,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    NetworkConnectivityDestinationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.endpoints">Endpoints</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>[]</code> | endpoints block. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.ipPrefix">IpPrefix</a></code> | <code>string</code> | The IP prefix that represents your workload on another CSP. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.location">Location</a></code> | <code>string</code> | The location of the destination. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.multicloudDataTransferConfig">MulticloudDataTransferConfig</a></code> | <code>string</code> | The multicloud data transfer config of the destination. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.name">Name</a></code> | <code>string</code> | The name of the destination. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.description">Description</a></code> | <code>string</code> | A description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#id NetworkConnectivityDestination#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#project NetworkConnectivityDestination#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts">NetworkConnectivityDestinationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.endpoints"></a>

```csharp
public IResolvable|NetworkConnectivityDestinationEndpoints[] Endpoints { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>[]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#endpoints NetworkConnectivityDestination#endpoints}

---

##### `IpPrefix`<sup>Required</sup> <a name="IpPrefix" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.ipPrefix"></a>

```csharp
public string IpPrefix { get; set; }
```

- *Type:* string

The IP prefix that represents your workload on another CSP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#ip_prefix NetworkConnectivityDestination#ip_prefix}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#location NetworkConnectivityDestination#location}

---

##### `MulticloudDataTransferConfig`<sup>Required</sup> <a name="MulticloudDataTransferConfig" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.multicloudDataTransferConfig"></a>

```csharp
public string MulticloudDataTransferConfig { get; set; }
```

- *Type:* string

The multicloud data transfer config of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#multicloud_data_transfer_config NetworkConnectivityDestination#multicloud_data_transfer_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#name NetworkConnectivityDestination#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#description NetworkConnectivityDestination#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#id NetworkConnectivityDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#labels NetworkConnectivityDestination#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#project NetworkConnectivityDestination#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.timeouts"></a>

```csharp
public NetworkConnectivityDestinationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts">NetworkConnectivityDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#timeouts NetworkConnectivityDestination#timeouts}

---

### NetworkConnectivityDestinationEndpoints <a name="NetworkConnectivityDestinationEndpoints" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityDestinationEndpoints {
    string Asn,
    string Csp
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints.property.asn">Asn</a></code> | <code>string</code> | The ASN of the remote IP prefix. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints.property.csp">Csp</a></code> | <code>string</code> | The CSP of the remote IP prefix. |

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints.property.asn"></a>

```csharp
public string Asn { get; set; }
```

- *Type:* string

The ASN of the remote IP prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#asn NetworkConnectivityDestination#asn}

---

##### `Csp`<sup>Required</sup> <a name="Csp" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints.property.csp"></a>

```csharp
public string Csp { get; set; }
```

- *Type:* string

The CSP of the remote IP prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#csp NetworkConnectivityDestination#csp}

---

### NetworkConnectivityDestinationStateTimeline <a name="NetworkConnectivityDestinationStateTimeline" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimeline.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityDestinationStateTimeline {

};
```


### NetworkConnectivityDestinationStateTimelineStates <a name="NetworkConnectivityDestinationStateTimelineStates" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityDestinationStateTimelineStates {

};
```


### NetworkConnectivityDestinationTimeouts <a name="NetworkConnectivityDestinationTimeouts" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityDestinationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#create NetworkConnectivityDestination#create}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#delete NetworkConnectivityDestination#delete}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#update NetworkConnectivityDestination#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#create NetworkConnectivityDestination#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#delete NetworkConnectivityDestination#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/network_connectivity_destination#update NetworkConnectivityDestination#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityDestinationEndpointsList <a name="NetworkConnectivityDestinationEndpointsList" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityDestinationEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.get"></a>

```csharp
private NetworkConnectivityDestinationEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkConnectivityDestinationEndpoints[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>[]

---


### NetworkConnectivityDestinationEndpointsOutputReference <a name="NetworkConnectivityDestinationEndpointsOutputReference" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityDestinationEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.asnInput">AsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.cspInput">CspInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.asn">Asn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.csp">Csp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.asnInput"></a>

```csharp
public string AsnInput { get; }
```

- *Type:* string

---

##### `CspInput`<sup>Optional</sup> <a name="CspInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.cspInput"></a>

```csharp
public string CspInput { get; }
```

- *Type:* string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.asn"></a>

```csharp
public string Asn { get; }
```

- *Type:* string

---

##### `Csp`<sup>Required</sup> <a name="Csp" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.csp"></a>

```csharp
public string Csp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkConnectivityDestinationEndpoints InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>

---


### NetworkConnectivityDestinationStateTimelineList <a name="NetworkConnectivityDestinationStateTimelineList" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityDestinationStateTimelineList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.get"></a>

```csharp
private NetworkConnectivityDestinationStateTimelineOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkConnectivityDestinationStateTimelineOutputReference <a name="NetworkConnectivityDestinationStateTimelineOutputReference" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityDestinationStateTimelineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.states">States</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList">NetworkConnectivityDestinationStateTimelineStatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimeline">NetworkConnectivityDestinationStateTimeline</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `States`<sup>Required</sup> <a name="States" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.states"></a>

```csharp
public NetworkConnectivityDestinationStateTimelineStatesList States { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList">NetworkConnectivityDestinationStateTimelineStatesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.internalValue"></a>

```csharp
public NetworkConnectivityDestinationStateTimeline InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimeline">NetworkConnectivityDestinationStateTimeline</a>

---


### NetworkConnectivityDestinationStateTimelineStatesList <a name="NetworkConnectivityDestinationStateTimelineStatesList" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityDestinationStateTimelineStatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.get"></a>

```csharp
private NetworkConnectivityDestinationStateTimelineStatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkConnectivityDestinationStateTimelineStatesOutputReference <a name="NetworkConnectivityDestinationStateTimelineStatesOutputReference" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityDestinationStateTimelineStatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.effectiveTime">EffectiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStates">NetworkConnectivityDestinationStateTimelineStates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveTime`<sup>Required</sup> <a name="EffectiveTime" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.effectiveTime"></a>

```csharp
public string EffectiveTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.internalValue"></a>

```csharp
public NetworkConnectivityDestinationStateTimelineStates InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStates">NetworkConnectivityDestinationStateTimelineStates</a>

---


### NetworkConnectivityDestinationTimeoutsOutputReference <a name="NetworkConnectivityDestinationTimeoutsOutputReference" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkConnectivityDestinationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts">NetworkConnectivityDestinationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkConnectivityDestinationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts">NetworkConnectivityDestinationTimeouts</a>

---



