# `networkServicesWasmPlugin` Submodule <a name="`networkServicesWasmPlugin` Submodule" id="@cdktn/provider-google.networkServicesWasmPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesWasmPlugin <a name="NetworkServicesWasmPlugin" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin google_network_services_wasm_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesWasmPlugin(Construct Scope, string Id, NetworkServicesWasmPluginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig">NetworkServicesWasmPluginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig">NetworkServicesWasmPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putVersions">PutVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putLogConfig"></a>

```csharp
private void PutLogConfig(NetworkServicesWasmPluginLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkServicesWasmPluginTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

---

##### `PutVersions` <a name="PutVersions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putVersions"></a>

```csharp
private void PutVersions(IResolvable|NetworkServicesWasmPluginVersions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putVersions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesWasmPlugin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesWasmPlugin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesWasmPlugin.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkServicesWasmPlugin.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesWasmPlugin to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesWasmPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesWasmPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference">NetworkServicesWasmPluginLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference">NetworkServicesWasmPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.usedBy">UsedBy</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList">NetworkServicesWasmPluginUsedByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versions">Versions</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList">NetworkServicesWasmPluginVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionIdInput">MainVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versionsInput">VersionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionId">MainVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfig"></a>

```csharp
public NetworkServicesWasmPluginLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference">NetworkServicesWasmPluginLogConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeouts"></a>

```csharp
public NetworkServicesWasmPluginTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference">NetworkServicesWasmPluginTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UsedBy`<sup>Required</sup> <a name="UsedBy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.usedBy"></a>

```csharp
public NetworkServicesWasmPluginUsedByList UsedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList">NetworkServicesWasmPluginUsedByList</a>

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versions"></a>

```csharp
public NetworkServicesWasmPluginVersionsList Versions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList">NetworkServicesWasmPluginVersionsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfigInput"></a>

```csharp
public NetworkServicesWasmPluginLogConfig LogConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

---

##### `MainVersionIdInput`<sup>Optional</sup> <a name="MainVersionIdInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionIdInput"></a>

```csharp
public string MainVersionIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkServicesWasmPluginTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

---

##### `VersionsInput`<sup>Optional</sup> <a name="VersionsInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versionsInput"></a>

```csharp
public IResolvable|NetworkServicesWasmPluginVersions[] VersionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MainVersionId`<sup>Required</sup> <a name="MainVersionId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionId"></a>

```csharp
public string MainVersionId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesWasmPluginConfig <a name="NetworkServicesWasmPluginConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesWasmPluginConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MainVersionId,
    string Name,
    IResolvable|NetworkServicesWasmPluginVersions[] Versions,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    NetworkServicesWasmPluginLogConfig LogConfig = null,
    string Project = null,
    NetworkServicesWasmPluginTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.mainVersionId">MainVersionId</a></code> | <code>string</code> | The ID of the WasmPluginVersion resource that is the currently serving one. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.name">Name</a></code> | <code>string</code> | Identifier. Name of the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.versions">Versions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>[]</code> | versions block. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.description">Description</a></code> | <code>string</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#id NetworkServicesWasmPlugin#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.location">Location</a></code> | <code>string</code> | The location of the traffic extension. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#project NetworkServicesWasmPlugin#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MainVersionId`<sup>Required</sup> <a name="MainVersionId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.mainVersionId"></a>

```csharp
public string MainVersionId { get; set; }
```

- *Type:* string

The ID of the WasmPluginVersion resource that is the currently serving one.

The version referred to must be a child of this WasmPlugin resource and should be listed in the "versions" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#main_version_id NetworkServicesWasmPlugin#main_version_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Identifier. Name of the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#name NetworkServicesWasmPlugin#name}

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.versions"></a>

```csharp
public IResolvable|NetworkServicesWasmPluginVersions[] Versions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>[]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#versions NetworkServicesWasmPlugin#versions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#description NetworkServicesWasmPlugin#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#id NetworkServicesWasmPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Set of labels associated with the WasmPlugin resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#labels NetworkServicesWasmPlugin#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#location NetworkServicesWasmPlugin#location}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.logConfig"></a>

```csharp
public NetworkServicesWasmPluginLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#log_config NetworkServicesWasmPlugin#log_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#project NetworkServicesWasmPlugin#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.timeouts"></a>

```csharp
public NetworkServicesWasmPluginTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#timeouts NetworkServicesWasmPlugin#timeouts}

---

### NetworkServicesWasmPluginLogConfig <a name="NetworkServicesWasmPluginLogConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesWasmPluginLogConfig {
    bool|IResolvable Enable = null,
    string MinLogLevel = null,
    double SampleRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.enable">Enable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Optional. Specifies whether to enable logging for activity by this plugin. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.minLogLevel">MinLogLevel</a></code> | <code>string</code> | Non-empty default. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.sampleRate">SampleRate</a></code> | <code>double</code> | Non-empty default. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.enable"></a>

```csharp
public bool|IResolvable Enable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Optional. Specifies whether to enable logging for activity by this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#enable NetworkServicesWasmPlugin#enable}

---

##### `MinLogLevel`<sup>Optional</sup> <a name="MinLogLevel" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.minLogLevel"></a>

```csharp
public string MinLogLevel { get; set; }
```

- *Type:* string

Non-empty default.

Specificies the lowest level of the plugin logs that are exported to Cloud Logging. This setting relates to the logs generated by using logging statements in your Wasm code.
This field is can be set only if logging is enabled for the plugin.
If the field is not provided when logging is enabled, it is set to INFO by default. Possible values: ["LOG_LEVEL_UNSPECIFIED", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "CRITICAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#min_log_level NetworkServicesWasmPlugin#min_log_level}

---

##### `SampleRate`<sup>Optional</sup> <a name="SampleRate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.sampleRate"></a>

```csharp
public double SampleRate { get; set; }
```

- *Type:* double

Non-empty default.

Configures the sampling rate of activity logs, where 1.0 means all logged activity is reported and 0.0 means no activity is reported.
A floating point value between 0.0 and 1.0 indicates that a percentage of log messages is stored.
The default value when logging is enabled is 1.0. The value of the field must be between 0 and 1 (inclusive).
This field can be specified only if logging is enabled for this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#sample_rate NetworkServicesWasmPlugin#sample_rate}

---

### NetworkServicesWasmPluginTimeouts <a name="NetworkServicesWasmPluginTimeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesWasmPluginTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#create NetworkServicesWasmPlugin#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#delete NetworkServicesWasmPlugin#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#update NetworkServicesWasmPlugin#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#create NetworkServicesWasmPlugin#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#delete NetworkServicesWasmPlugin#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#update NetworkServicesWasmPlugin#update}.

---

### NetworkServicesWasmPluginUsedBy <a name="NetworkServicesWasmPluginUsedBy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesWasmPluginUsedBy {

};
```


### NetworkServicesWasmPluginVersions <a name="NetworkServicesWasmPluginVersions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesWasmPluginVersions {
    string VersionName,
    string Description = null,
    string ImageUri = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string PluginConfigData = null,
    string PluginConfigUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.versionName">VersionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#version_name NetworkServicesWasmPlugin#version_name}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.description">Description</a></code> | <code>string</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.imageUri">ImageUri</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigData">PluginConfigData</a></code> | <code>string</code> | A base64-encoded string containing the configuration for the plugin. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigUri">PluginConfigUri</a></code> | <code>string</code> | URI of the plugin configuration stored in the Artifact Registry. |

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.versionName"></a>

```csharp
public string VersionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#version_name NetworkServicesWasmPlugin#version_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#description NetworkServicesWasmPlugin#description}

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

Optional.

URI of the container image containing the plugin, stored in the Artifact Registry. When a new WasmPluginVersion resource is created, the digest of the container image is saved in the imageDigest field.
When downloading an image, the digest value is used instead of an image tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#image_uri NetworkServicesWasmPlugin#image_uri}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Set of labels associated with the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#labels NetworkServicesWasmPlugin#labels}

---

##### `PluginConfigData`<sup>Optional</sup> <a name="PluginConfigData" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigData"></a>

```csharp
public string PluginConfigData { get; set; }
```

- *Type:* string

A base64-encoded string containing the configuration for the plugin.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
When a new WasmPluginVersion resource is created, the digest of the contents is saved in the pluginConfigDigest field.
Conflics with pluginConfigUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#plugin_config_data NetworkServicesWasmPlugin#plugin_config_data}

---

##### `PluginConfigUri`<sup>Optional</sup> <a name="PluginConfigUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigUri"></a>

```csharp
public string PluginConfigUri { get; set; }
```

- *Type:* string

URI of the plugin configuration stored in the Artifact Registry.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
The container image must contain only a single file with the name plugin.config.
When a new WasmPluginVersion resource is created, the digest of the container image is saved in the pluginConfigDigest field.
Conflics with pluginConfigData.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_wasm_plugin#plugin_config_uri NetworkServicesWasmPlugin#plugin_config_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesWasmPluginLogConfigOutputReference <a name="NetworkServicesWasmPluginLogConfigOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesWasmPluginLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel">ResetMinLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate">ResetSampleRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetMinLogLevel` <a name="ResetMinLogLevel" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel"></a>

```csharp
private void ResetMinLogLevel()
```

##### `ResetSampleRate` <a name="ResetSampleRate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate"></a>

```csharp
private void ResetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput">MinLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput">SampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enable">Enable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel">MinLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate">SampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enableInput"></a>

```csharp
public bool|IResolvable EnableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MinLogLevelInput`<sup>Optional</sup> <a name="MinLogLevelInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput"></a>

```csharp
public string MinLogLevelInput { get; }
```

- *Type:* string

---

##### `SampleRateInput`<sup>Optional</sup> <a name="SampleRateInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput"></a>

```csharp
public double SampleRateInput { get; }
```

- *Type:* double

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enable"></a>

```csharp
public bool|IResolvable Enable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MinLogLevel`<sup>Required</sup> <a name="MinLogLevel" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel"></a>

```csharp
public string MinLogLevel { get; }
```

- *Type:* string

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate"></a>

```csharp
public double SampleRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesWasmPluginLogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

---


### NetworkServicesWasmPluginTimeoutsOutputReference <a name="NetworkServicesWasmPluginTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesWasmPluginTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkServicesWasmPluginTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

---


### NetworkServicesWasmPluginUsedByList <a name="NetworkServicesWasmPluginUsedByList" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesWasmPluginUsedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.get"></a>

```csharp
private NetworkServicesWasmPluginUsedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkServicesWasmPluginUsedByOutputReference <a name="NetworkServicesWasmPluginUsedByOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesWasmPluginUsedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy">NetworkServicesWasmPluginUsedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.internalValue"></a>

```csharp
public NetworkServicesWasmPluginUsedBy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy">NetworkServicesWasmPluginUsedBy</a>

---


### NetworkServicesWasmPluginVersionsList <a name="NetworkServicesWasmPluginVersionsList" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesWasmPluginVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.get"></a>

```csharp
private NetworkServicesWasmPluginVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkServicesWasmPluginVersions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>[]

---


### NetworkServicesWasmPluginVersionsOutputReference <a name="NetworkServicesWasmPluginVersionsOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkServicesWasmPluginVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData">ResetPluginConfigData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri">ResetPluginConfigUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetImageUri"></a>

```csharp
private void ResetImageUri()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPluginConfigData` <a name="ResetPluginConfigData" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData"></a>

```csharp
private void ResetPluginConfigData()
```

##### `ResetPluginConfigUri` <a name="ResetPluginConfigUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri"></a>

```csharp
private void ResetPluginConfigUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageDigest">ImageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest">PluginConfigDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput">PluginConfigDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput">PluginConfigUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput">VersionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData">PluginConfigData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri">PluginConfigUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageDigest"></a>

```csharp
public string ImageDigest { get; }
```

- *Type:* string

---

##### `PluginConfigDigest`<sup>Required</sup> <a name="PluginConfigDigest" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest"></a>

```csharp
public string PluginConfigDigest { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PluginConfigDataInput`<sup>Optional</sup> <a name="PluginConfigDataInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput"></a>

```csharp
public string PluginConfigDataInput { get; }
```

- *Type:* string

---

##### `PluginConfigUriInput`<sup>Optional</sup> <a name="PluginConfigUriInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput"></a>

```csharp
public string PluginConfigUriInput { get; }
```

- *Type:* string

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput"></a>

```csharp
public string VersionNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PluginConfigData`<sup>Required</sup> <a name="PluginConfigData" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData"></a>

```csharp
public string PluginConfigData { get; }
```

- *Type:* string

---

##### `PluginConfigUri`<sup>Required</sup> <a name="PluginConfigUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri"></a>

```csharp
public string PluginConfigUri { get; }
```

- *Type:* string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkServicesWasmPluginVersions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>

---



