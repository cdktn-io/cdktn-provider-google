# `discoveryEngineUserStore` Submodule <a name="`discoveryEngineUserStore` Submodule" id="@cdktn/provider-google.discoveryEngineUserStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineUserStore <a name="DiscoveryEngineUserStore" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store google_discovery_engine_user_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineUserStore(Construct Scope, string Id, DiscoveryEngineUserStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig">DiscoveryEngineUserStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig">DiscoveryEngineUserStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetDefaultLicenseConfig">ResetDefaultLicenseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableExpiredLicenseAutoUpdate">ResetEnableExpiredLicenseAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableLicenseAutoRegister">ResetEnableLicenseAutoRegister</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetUserStoreId">ResetUserStoreId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.putTimeouts"></a>

```csharp
private void PutTimeouts(DiscoveryEngineUserStoreTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

---

##### `ResetDefaultLicenseConfig` <a name="ResetDefaultLicenseConfig" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetDefaultLicenseConfig"></a>

```csharp
private void ResetDefaultLicenseConfig()
```

##### `ResetEnableExpiredLicenseAutoUpdate` <a name="ResetEnableExpiredLicenseAutoUpdate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableExpiredLicenseAutoUpdate"></a>

```csharp
private void ResetEnableExpiredLicenseAutoUpdate()
```

##### `ResetEnableLicenseAutoRegister` <a name="ResetEnableLicenseAutoRegister" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableLicenseAutoRegister"></a>

```csharp
private void ResetEnableLicenseAutoRegister()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserStoreId` <a name="ResetUserStoreId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetUserStoreId"></a>

```csharp
private void ResetUserStoreId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineUserStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineUserStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineUserStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineUserStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineUserStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DiscoveryEngineUserStore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineUserStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineUserStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineUserStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference">DiscoveryEngineUserStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfigInput">DefaultLicenseConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdateInput">EnableExpiredLicenseAutoUpdateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegisterInput">EnableLicenseAutoRegisterInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreIdInput">UserStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfig">DefaultLicenseConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdate">EnableExpiredLicenseAutoUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegister">EnableLicenseAutoRegister</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreId">UserStoreId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeouts"></a>

```csharp
public DiscoveryEngineUserStoreTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference">DiscoveryEngineUserStoreTimeoutsOutputReference</a>

---

##### `DefaultLicenseConfigInput`<sup>Optional</sup> <a name="DefaultLicenseConfigInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfigInput"></a>

```csharp
public string DefaultLicenseConfigInput { get; }
```

- *Type:* string

---

##### `EnableExpiredLicenseAutoUpdateInput`<sup>Optional</sup> <a name="EnableExpiredLicenseAutoUpdateInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdateInput"></a>

```csharp
public bool|IResolvable EnableExpiredLicenseAutoUpdateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableLicenseAutoRegisterInput`<sup>Optional</sup> <a name="EnableLicenseAutoRegisterInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegisterInput"></a>

```csharp
public bool|IResolvable EnableLicenseAutoRegisterInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeoutsInput"></a>

```csharp
public IResolvable|DiscoveryEngineUserStoreTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

---

##### `UserStoreIdInput`<sup>Optional</sup> <a name="UserStoreIdInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreIdInput"></a>

```csharp
public string UserStoreIdInput { get; }
```

- *Type:* string

---

##### `DefaultLicenseConfig`<sup>Required</sup> <a name="DefaultLicenseConfig" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfig"></a>

```csharp
public string DefaultLicenseConfig { get; }
```

- *Type:* string

---

##### `EnableExpiredLicenseAutoUpdate`<sup>Required</sup> <a name="EnableExpiredLicenseAutoUpdate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdate"></a>

```csharp
public bool|IResolvable EnableExpiredLicenseAutoUpdate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableLicenseAutoRegister`<sup>Required</sup> <a name="EnableLicenseAutoRegister" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegister"></a>

```csharp
public bool|IResolvable EnableLicenseAutoRegister { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `UserStoreId`<sup>Required</sup> <a name="UserStoreId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreId"></a>

```csharp
public string UserStoreId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineUserStoreConfig <a name="DiscoveryEngineUserStoreConfig" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineUserStoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string DefaultLicenseConfig = null,
    bool|IResolvable EnableExpiredLicenseAutoUpdate = null,
    bool|IResolvable EnableLicenseAutoRegister = null,
    string Id = null,
    string Project = null,
    DiscoveryEngineUserStoreTimeouts Timeouts = null,
    string UserStoreId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.defaultLicenseConfig">DefaultLicenseConfig</a></code> | <code>string</code> | The resource name of the default license config assigned to users created in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableExpiredLicenseAutoUpdate">EnableExpiredLicenseAutoUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable automatic license update for users with expired licenses in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableLicenseAutoRegister">EnableLicenseAutoRegister</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable automatic license registration for new users created in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#id DiscoveryEngineUserStore#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#project DiscoveryEngineUserStore#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.userStoreId">UserStoreId</a></code> | <code>string</code> | The ID of the user store. Currently only accepts "default_user_store". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#location DiscoveryEngineUserStore#location}

---

##### `DefaultLicenseConfig`<sup>Optional</sup> <a name="DefaultLicenseConfig" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.defaultLicenseConfig"></a>

```csharp
public string DefaultLicenseConfig { get; set; }
```

- *Type:* string

The resource name of the default license config assigned to users created in this user store.

Format:
'projects/{project}/locations/{location}/licenseConfigs/{license_config}'.
If 'enableLicenseAutoRegister' is true, new users will automatically
register under the default subscription.
If the default license config doesn't have remaining license seats left,
new users will not be assigned with license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#default_license_config DiscoveryEngineUserStore#default_license_config}

---

##### `EnableExpiredLicenseAutoUpdate`<sup>Optional</sup> <a name="EnableExpiredLicenseAutoUpdate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableExpiredLicenseAutoUpdate"></a>

```csharp
public bool|IResolvable EnableExpiredLicenseAutoUpdate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable automatic license update for users with expired licenses in this user store.

If enabled, users with expired licenses will
automatically be updated to the default subscription if there are
remaining license seats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#enable_expired_license_auto_update DiscoveryEngineUserStore#enable_expired_license_auto_update}

---

##### `EnableLicenseAutoRegister`<sup>Optional</sup> <a name="EnableLicenseAutoRegister" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableLicenseAutoRegister"></a>

```csharp
public bool|IResolvable EnableLicenseAutoRegister { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable automatic license registration for new users created in this user store.

If enabled, new users will automatically register under
the default subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#enable_license_auto_register DiscoveryEngineUserStore#enable_license_auto_register}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#id DiscoveryEngineUserStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#project DiscoveryEngineUserStore#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.timeouts"></a>

```csharp
public DiscoveryEngineUserStoreTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#timeouts DiscoveryEngineUserStore#timeouts}

---

##### `UserStoreId`<sup>Optional</sup> <a name="UserStoreId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.userStoreId"></a>

```csharp
public string UserStoreId { get; set; }
```

- *Type:* string

The ID of the user store. Currently only accepts "default_user_store".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#user_store_id DiscoveryEngineUserStore#user_store_id}

---

### DiscoveryEngineUserStoreTimeouts <a name="DiscoveryEngineUserStoreTimeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineUserStoreTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#create DiscoveryEngineUserStore#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#delete DiscoveryEngineUserStore#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#update DiscoveryEngineUserStore#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#create DiscoveryEngineUserStore#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#delete DiscoveryEngineUserStore#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_user_store#update DiscoveryEngineUserStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineUserStoreTimeoutsOutputReference <a name="DiscoveryEngineUserStoreTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineUserStoreTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineUserStoreTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

---



