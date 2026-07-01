# `appEngineDomainMapping` Submodule <a name="`appEngineDomainMapping` Submodule" id="@cdktn/provider-google.appEngineDomainMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineDomainMapping <a name="AppEngineDomainMapping" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping google_app_engine_domain_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineDomainMapping(Construct Scope, string Id, AppEngineDomainMappingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig">AppEngineDomainMappingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig">AppEngineDomainMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putSslSettings">PutSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideStrategy">ResetOverrideStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetSslSettings">ResetSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSslSettings` <a name="PutSslSettings" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putSslSettings"></a>

```csharp
private void PutSslSettings(AppEngineDomainMappingSslSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putSslSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putTimeouts"></a>

```csharp
private void PutTimeouts(AppEngineDomainMappingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOverrideStrategy` <a name="ResetOverrideStrategy" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetOverrideStrategy"></a>

```csharp
private void ResetOverrideStrategy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSslSettings` <a name="ResetSslSettings" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetSslSettings"></a>

```csharp
private void ResetSslSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppEngineDomainMapping resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

AppEngineDomainMapping.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

AppEngineDomainMapping.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

AppEngineDomainMapping.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

AppEngineDomainMapping.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppEngineDomainMapping resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppEngineDomainMapping to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppEngineDomainMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppEngineDomainMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.resourceRecords">ResourceRecords</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList">AppEngineDomainMappingResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettings">SslSettings</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference">AppEngineDomainMappingSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference">AppEngineDomainMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategyInput">OverrideStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettingsInput">SslSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategy">OverrideStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceRecords`<sup>Required</sup> <a name="ResourceRecords" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.resourceRecords"></a>

```csharp
public AppEngineDomainMappingResourceRecordsList ResourceRecords { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList">AppEngineDomainMappingResourceRecordsList</a>

---

##### `SslSettings`<sup>Required</sup> <a name="SslSettings" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettings"></a>

```csharp
public AppEngineDomainMappingSslSettingsOutputReference SslSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference">AppEngineDomainMappingSslSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeouts"></a>

```csharp
public AppEngineDomainMappingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference">AppEngineDomainMappingTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OverrideStrategyInput`<sup>Optional</sup> <a name="OverrideStrategyInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategyInput"></a>

```csharp
public string OverrideStrategyInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SslSettingsInput`<sup>Optional</sup> <a name="SslSettingsInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.sslSettingsInput"></a>

```csharp
public AppEngineDomainMappingSslSettings SslSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.timeoutsInput"></a>

```csharp
public IResolvable|AppEngineDomainMappingTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OverrideStrategy`<sup>Required</sup> <a name="OverrideStrategy" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.overrideStrategy"></a>

```csharp
public string OverrideStrategy { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMapping.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineDomainMappingConfig <a name="AppEngineDomainMappingConfig" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineDomainMappingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    string DeletionPolicy = null,
    string Id = null,
    string OverrideStrategy = null,
    string Project = null,
    AppEngineDomainMappingSslSettings SslSettings = null,
    AppEngineDomainMappingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.domainName">DomainName</a></code> | <code>string</code> | Relative name of the domain serving the application. Example: example.com. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#id AppEngineDomainMapping#id}. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.overrideStrategy">OverrideStrategy</a></code> | <code>string</code> | Whether the domain creation should override any existing mappings for this domain. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#project AppEngineDomainMapping#project}. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.sslSettings">SslSettings</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a></code> | ssl_settings block. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Relative name of the domain serving the application. Example: example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#domain_name AppEngineDomainMapping#domain_name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#deletion_policy AppEngineDomainMapping#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#id AppEngineDomainMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OverrideStrategy`<sup>Optional</sup> <a name="OverrideStrategy" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.overrideStrategy"></a>

```csharp
public string OverrideStrategy { get; set; }
```

- *Type:* string

Whether the domain creation should override any existing mappings for this domain.

By default, overrides are rejected. Default value: "STRICT" Possible values: ["STRICT", "OVERRIDE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#override_strategy AppEngineDomainMapping#override_strategy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#project AppEngineDomainMapping#project}.

---

##### `SslSettings`<sup>Optional</sup> <a name="SslSettings" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.sslSettings"></a>

```csharp
public AppEngineDomainMappingSslSettings SslSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

ssl_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#ssl_settings AppEngineDomainMapping#ssl_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingConfig.property.timeouts"></a>

```csharp
public AppEngineDomainMappingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#timeouts AppEngineDomainMapping#timeouts}

---

### AppEngineDomainMappingResourceRecords <a name="AppEngineDomainMappingResourceRecords" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineDomainMappingResourceRecords {

};
```


### AppEngineDomainMappingSslSettings <a name="AppEngineDomainMappingSslSettings" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineDomainMappingSslSettings {
    string SslManagementType,
    string CertificateId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.sslManagementType">SslManagementType</a></code> | <code>string</code> | SSL management type for this domain. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.certificateId">CertificateId</a></code> | <code>string</code> | ID of the AuthorizedCertificate resource configuring SSL for the application. |

---

##### `SslManagementType`<sup>Required</sup> <a name="SslManagementType" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.sslManagementType"></a>

```csharp
public string SslManagementType { get; set; }
```

- *Type:* string

SSL management type for this domain.

If 'AUTOMATIC', a managed certificate is automatically provisioned.
If 'MANUAL', 'certificateId' must be manually specified in order to configure SSL for this domain. Possible values: ["AUTOMATIC", "MANUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#ssl_management_type AppEngineDomainMapping#ssl_management_type}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings.property.certificateId"></a>

```csharp
public string CertificateId { get; set; }
```

- *Type:* string

ID of the AuthorizedCertificate resource configuring SSL for the application.

Clearing this field will
remove SSL support.
By default, a managed certificate is automatically created for every domain mapping. To omit SSL support
or to configure SSL manually, specify 'SslManagementType.MANUAL' on a 'CREATE' or 'UPDATE' request. You must be
authorized to administer the 'AuthorizedCertificate' resource to manually map it to a DomainMapping resource.
Example: 12345.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#certificate_id AppEngineDomainMapping#certificate_id}

---

### AppEngineDomainMappingTimeouts <a name="AppEngineDomainMappingTimeouts" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineDomainMappingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#create AppEngineDomainMapping#create}. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#delete AppEngineDomainMapping#delete}. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#update AppEngineDomainMapping#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#create AppEngineDomainMapping#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#delete AppEngineDomainMapping#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/app_engine_domain_mapping#update AppEngineDomainMapping#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineDomainMappingResourceRecordsList <a name="AppEngineDomainMappingResourceRecordsList" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineDomainMappingResourceRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.get"></a>

```csharp
private AppEngineDomainMappingResourceRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AppEngineDomainMappingResourceRecordsOutputReference <a name="AppEngineDomainMappingResourceRecordsOutputReference" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineDomainMappingResourceRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.rrdata">Rrdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords">AppEngineDomainMappingResourceRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Rrdata`<sup>Required</sup> <a name="Rrdata" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.rrdata"></a>

```csharp
public string Rrdata { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecordsOutputReference.property.internalValue"></a>

```csharp
public AppEngineDomainMappingResourceRecords InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingResourceRecords">AppEngineDomainMappingResourceRecords</a>

---


### AppEngineDomainMappingSslSettingsOutputReference <a name="AppEngineDomainMappingSslSettingsOutputReference" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineDomainMappingSslSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.resetCertificateId"></a>

```csharp
private void ResetCertificateId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.pendingManagedCertificateId">PendingManagedCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementTypeInput">SslManagementTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementType">SslManagementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PendingManagedCertificateId`<sup>Required</sup> <a name="PendingManagedCertificateId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.pendingManagedCertificateId"></a>

```csharp
public string PendingManagedCertificateId { get; }
```

- *Type:* string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateIdInput"></a>

```csharp
public string CertificateIdInput { get; }
```

- *Type:* string

---

##### `SslManagementTypeInput`<sup>Optional</sup> <a name="SslManagementTypeInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementTypeInput"></a>

```csharp
public string SslManagementTypeInput { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `SslManagementType`<sup>Required</sup> <a name="SslManagementType" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.sslManagementType"></a>

```csharp
public string SslManagementType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettingsOutputReference.property.internalValue"></a>

```csharp
public AppEngineDomainMappingSslSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingSslSettings">AppEngineDomainMappingSslSettings</a>

---


### AppEngineDomainMappingTimeoutsOutputReference <a name="AppEngineDomainMappingTimeoutsOutputReference" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new AppEngineDomainMappingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppEngineDomainMappingTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.appEngineDomainMapping.AppEngineDomainMappingTimeouts">AppEngineDomainMappingTimeouts</a>

---



