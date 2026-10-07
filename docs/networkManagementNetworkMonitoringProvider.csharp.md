# `networkManagementNetworkMonitoringProvider` Submodule <a name="`networkManagementNetworkMonitoringProvider` Submodule" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagementNetworkMonitoringProvider <a name="NetworkManagementNetworkMonitoringProvider" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider google_network_management_network_monitoring_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkManagementNetworkMonitoringProvider(Construct Scope, string Id, NetworkManagementNetworkMonitoringProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig">NetworkManagementNetworkMonitoringProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig">NetworkManagementNetworkMonitoringProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkManagementNetworkMonitoringProviderTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkManagementNetworkMonitoringProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkManagementNetworkMonitoringProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkManagementNetworkMonitoringProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkManagementNetworkMonitoringProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkManagementNetworkMonitoringProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkManagementNetworkMonitoringProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkManagementNetworkMonitoringProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkManagementNetworkMonitoringProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkManagementNetworkMonitoringProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.errors">Errors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.providerUri">ProviderUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference">NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.networkMonitoringProviderIdInput">NetworkMonitoringProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.providerTypeInput">ProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.networkMonitoringProviderId">NetworkMonitoringProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.providerType">ProviderType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.errors"></a>

```csharp
public string[] Errors { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderUri`<sup>Required</sup> <a name="ProviderUri" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.providerUri"></a>

```csharp
public string ProviderUri { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.timeouts"></a>

```csharp
public NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference">NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NetworkMonitoringProviderIdInput`<sup>Optional</sup> <a name="NetworkMonitoringProviderIdInput" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.networkMonitoringProviderIdInput"></a>

```csharp
public string NetworkMonitoringProviderIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProviderTypeInput`<sup>Optional</sup> <a name="ProviderTypeInput" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.providerTypeInput"></a>

```csharp
public string ProviderTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkManagementNetworkMonitoringProviderTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `NetworkMonitoringProviderId`<sup>Required</sup> <a name="NetworkMonitoringProviderId" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.networkMonitoringProviderId"></a>

```csharp
public string NetworkMonitoringProviderId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.providerType"></a>

```csharp
public string ProviderType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagementNetworkMonitoringProviderConfig <a name="NetworkManagementNetworkMonitoringProviderConfig" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkManagementNetworkMonitoringProviderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string NetworkMonitoringProviderId,
    string ProviderType,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    NetworkManagementNetworkMonitoringProviderTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.location">Location</a></code> | <code>string</code> | The location of the Network Monitoring Provider. Currently only 'global' is supported. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.networkMonitoringProviderId">NetworkMonitoringProviderId</a></code> | <code>string</code> | The ID to use for the Network Monitoring Provider. This will become the last component of the provider's resource name. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.providerType">ProviderType</a></code> | <code>string</code> | The type of the Network Monitoring Provider. Currently only 'EXTERNAL' is supported. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | The deletion policy for the Network Monitoring Provider. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#id NetworkManagementNetworkMonitoringProvider#id}. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#project NetworkManagementNetworkMonitoringProvider#project}. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the Network Monitoring Provider. Currently only 'global' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#location NetworkManagementNetworkMonitoringProvider#location}

---

##### `NetworkMonitoringProviderId`<sup>Required</sup> <a name="NetworkMonitoringProviderId" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.networkMonitoringProviderId"></a>

```csharp
public string NetworkMonitoringProviderId { get; set; }
```

- *Type:* string

The ID to use for the Network Monitoring Provider. This will become the last component of the provider's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#network_monitoring_provider_id NetworkManagementNetworkMonitoringProvider#network_monitoring_provider_id}

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.providerType"></a>

```csharp
public string ProviderType { get; set; }
```

- *Type:* string

The type of the Network Monitoring Provider. Currently only 'EXTERNAL' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#provider_type NetworkManagementNetworkMonitoringProvider#provider_type}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

The deletion policy for the Network Monitoring Provider.

Setting 'deletion_policy = "FORCE"' forces the deletion of all nested resources
(MonitoringPoints, NetworkPaths, WebPaths) belonging to this provider on deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#deletion_policy NetworkManagementNetworkMonitoringProvider#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#id NetworkManagementNetworkMonitoringProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#project NetworkManagementNetworkMonitoringProvider#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.timeouts"></a>

```csharp
public NetworkManagementNetworkMonitoringProviderTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#timeouts NetworkManagementNetworkMonitoringProvider#timeouts}

---

### NetworkManagementNetworkMonitoringProviderTimeouts <a name="NetworkManagementNetworkMonitoringProviderTimeouts" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkManagementNetworkMonitoringProviderTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#create NetworkManagementNetworkMonitoringProvider#create}. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#delete NetworkManagementNetworkMonitoringProvider#delete}. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#update NetworkManagementNetworkMonitoringProvider#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#create NetworkManagementNetworkMonitoringProvider#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#delete NetworkManagementNetworkMonitoringProvider#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#update NetworkManagementNetworkMonitoringProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference <a name="NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkManagementNetworkMonitoringProviderTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a>

---



