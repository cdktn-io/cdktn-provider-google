# `composerUserWorkloadsConfigMap` Submodule <a name="`composerUserWorkloadsConfigMap` Submodule" id="@cdktn/provider-google.composerUserWorkloadsConfigMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComposerUserWorkloadsConfigMap <a name="ComposerUserWorkloadsConfigMap" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map google_composer_user_workloads_config_map}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComposerUserWorkloadsConfigMap(Construct Scope, string Id, ComposerUserWorkloadsConfigMapConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig">ComposerUserWorkloadsConfigMapConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig">ComposerUserWorkloadsConfigMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.putTimeouts"></a>

```csharp
private void PutTimeouts(ComposerUserWorkloadsConfigMapTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>

---

##### `ResetData` <a name="ResetData" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComposerUserWorkloadsConfigMap resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComposerUserWorkloadsConfigMap.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComposerUserWorkloadsConfigMap.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComposerUserWorkloadsConfigMap.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComposerUserWorkloadsConfigMap.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComposerUserWorkloadsConfigMap resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComposerUserWorkloadsConfigMap to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComposerUserWorkloadsConfigMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComposerUserWorkloadsConfigMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference">ComposerUserWorkloadsConfigMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeouts"></a>

```csharp
public ComposerUserWorkloadsConfigMapTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference">ComposerUserWorkloadsConfigMapTimeoutsOutputReference</a>

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.timeoutsInput"></a>

```csharp
public IResolvable|ComposerUserWorkloadsConfigMapTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMap.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComposerUserWorkloadsConfigMapConfig <a name="ComposerUserWorkloadsConfigMapConfig" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComposerUserWorkloadsConfigMapConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Environment,
    string Name,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    string Region = null,
    ComposerUserWorkloadsConfigMapTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.environment">Environment</a></code> | <code>string</code> | Environment where the Kubernetes ConfigMap will be stored and used. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.name">Name</a></code> | <code>string</code> | Name of the Kubernetes ConfigMap. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The "data" field of Kubernetes ConfigMap, organized in key-value pairs. For details see: https://kubernetes.io/docs/concepts/configuration/configmap/. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#id ComposerUserWorkloadsConfigMap#id}. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#project ComposerUserWorkloadsConfigMap#project}. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.region">Region</a></code> | <code>string</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Environment where the Kubernetes ConfigMap will be stored and used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#environment ComposerUserWorkloadsConfigMap#environment}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Kubernetes ConfigMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#name ComposerUserWorkloadsConfigMap#name}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The "data" field of Kubernetes ConfigMap, organized in key-value pairs. For details see: https://kubernetes.io/docs/concepts/configuration/configmap/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#data ComposerUserWorkloadsConfigMap#data}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#deletion_policy ComposerUserWorkloadsConfigMap#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#id ComposerUserWorkloadsConfigMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#project ComposerUserWorkloadsConfigMap#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#region ComposerUserWorkloadsConfigMap#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapConfig.property.timeouts"></a>

```csharp
public ComposerUserWorkloadsConfigMapTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#timeouts ComposerUserWorkloadsConfigMap#timeouts}

---

### ComposerUserWorkloadsConfigMapTimeouts <a name="ComposerUserWorkloadsConfigMapTimeouts" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComposerUserWorkloadsConfigMapTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#create ComposerUserWorkloadsConfigMap#create}. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#delete ComposerUserWorkloadsConfigMap#delete}. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#update ComposerUserWorkloadsConfigMap#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#create ComposerUserWorkloadsConfigMap#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#delete ComposerUserWorkloadsConfigMap#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/composer_user_workloads_config_map#update ComposerUserWorkloadsConfigMap#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComposerUserWorkloadsConfigMapTimeoutsOutputReference <a name="ComposerUserWorkloadsConfigMapTimeoutsOutputReference" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComposerUserWorkloadsConfigMapTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComposerUserWorkloadsConfigMapTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.composerUserWorkloadsConfigMap.ComposerUserWorkloadsConfigMapTimeouts">ComposerUserWorkloadsConfigMapTimeouts</a>

---



