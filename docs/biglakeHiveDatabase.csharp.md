# `biglakeHiveDatabase` Submodule <a name="`biglakeHiveDatabase` Submodule" id="@cdktn/provider-google.biglakeHiveDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeHiveDatabase <a name="BiglakeHiveDatabase" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database google_biglake_hive_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveDatabase(Construct Scope, string Id, BiglakeHiveDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig">BiglakeHiveDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig">BiglakeHiveDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetLocationUri">ResetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(BiglakeHiveDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocationUri` <a name="ResetLocationUri" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetLocationUri"></a>

```csharp
private void ResetLocationUri()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeHiveDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeHiveDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeHiveDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeHiveDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeHiveDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BiglakeHiveDatabase resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BiglakeHiveDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BiglakeHiveDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeHiveDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference">BiglakeHiveDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.locationUriInput">LocationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.locationUri">LocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.timeouts"></a>

```csharp
public BiglakeHiveDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference">BiglakeHiveDatabaseTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationUriInput`<sup>Optional</sup> <a name="LocationUriInput" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.locationUriInput"></a>

```csharp
public string LocationUriInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.timeoutsInput"></a>

```csharp
public IResolvable|BiglakeHiveDatabaseTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a>

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.locationUri"></a>

```csharp
public string LocationUri { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeHiveDatabaseConfig <a name="BiglakeHiveDatabaseConfig" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveDatabaseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Catalog,
    string Name,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    string LocationUri = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string Project = null,
    BiglakeHiveDatabaseTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.catalog">Catalog</a></code> | <code>string</code> | Hive catalog where the database to create is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.name">Name</a></code> | <code>string</code> | Database to create. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.description">Description</a></code> | <code>string</code> | Description of the database. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#id BiglakeHiveDatabase#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.locationUri">LocationUri</a></code> | <code>string</code> | Cloud Storage location path where the database exists. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Additional parameters associated with the database. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#project BiglakeHiveDatabase#project}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Hive catalog where the database to create is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#catalog BiglakeHiveDatabase#catalog}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Database to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#name BiglakeHiveDatabase#name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#deletion_policy BiglakeHiveDatabase#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#description BiglakeHiveDatabase#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#id BiglakeHiveDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationUri`<sup>Optional</sup> <a name="LocationUri" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.locationUri"></a>

```csharp
public string LocationUri { get; set; }
```

- *Type:* string

Cloud Storage location path where the database exists.

If unspecified, the database will be stored in the catalog location.
Format: gs://bucket/path/to/database

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#location_uri BiglakeHiveDatabase#location_uri}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Additional parameters associated with the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#parameters BiglakeHiveDatabase#parameters}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#project BiglakeHiveDatabase#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseConfig.property.timeouts"></a>

```csharp
public BiglakeHiveDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#timeouts BiglakeHiveDatabase#timeouts}

---

### BiglakeHiveDatabaseTimeouts <a name="BiglakeHiveDatabaseTimeouts" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveDatabaseTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#create BiglakeHiveDatabase#create}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#delete BiglakeHiveDatabase#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#update BiglakeHiveDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#create BiglakeHiveDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#delete BiglakeHiveDatabase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database#update BiglakeHiveDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeHiveDatabaseTimeoutsOutputReference <a name="BiglakeHiveDatabaseTimeoutsOutputReference" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BiglakeHiveDatabaseTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveDatabase.BiglakeHiveDatabaseTimeouts">BiglakeHiveDatabaseTimeouts</a>

---



