# `migrationCenterImportDataFile` Submodule <a name="`migrationCenterImportDataFile` Submodule" id="@cdktn/provider-google.migrationCenterImportDataFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterImportDataFile <a name="MigrationCenterImportDataFile" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file google_migration_center_import_data_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportDataFile(Construct Scope, string Id, MigrationCenterImportDataFileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig">MigrationCenterImportDataFileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig">MigrationCenterImportDataFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.putTimeouts"></a>

```csharp
private void PutTimeouts(MigrationCenterImportDataFileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MigrationCenterImportDataFile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterImportDataFile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterImportDataFile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterImportDataFile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterImportDataFile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MigrationCenterImportDataFile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MigrationCenterImportDataFile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MigrationCenterImportDataFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterImportDataFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference">MigrationCenterImportDataFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.uploadFileInfo">UploadFileInfo</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList">MigrationCenterImportDataFileUploadFileInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importDataFileIdInput">ImportDataFileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importJobInput">ImportJobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importDataFileId">ImportDataFileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importJob">ImportJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.timeouts"></a>

```csharp
public MigrationCenterImportDataFileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference">MigrationCenterImportDataFileTimeoutsOutputReference</a>

---

##### `UploadFileInfo`<sup>Required</sup> <a name="UploadFileInfo" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.uploadFileInfo"></a>

```csharp
public MigrationCenterImportDataFileUploadFileInfoList UploadFileInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList">MigrationCenterImportDataFileUploadFileInfoList</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportDataFileIdInput`<sup>Optional</sup> <a name="ImportDataFileIdInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importDataFileIdInput"></a>

```csharp
public string ImportDataFileIdInput { get; }
```

- *Type:* string

---

##### `ImportJobInput`<sup>Optional</sup> <a name="ImportJobInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importJobInput"></a>

```csharp
public string ImportJobInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.timeoutsInput"></a>

```csharp
public IResolvable|MigrationCenterImportDataFileTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportDataFileId`<sup>Required</sup> <a name="ImportDataFileId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importDataFileId"></a>

```csharp
public string ImportDataFileId { get; }
```

- *Type:* string

---

##### `ImportJob`<sup>Required</sup> <a name="ImportJob" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.importJob"></a>

```csharp
public string ImportJob { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterImportDataFileConfig <a name="MigrationCenterImportDataFileConfig" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportDataFileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Format,
    string ImportDataFileId,
    string ImportJob,
    string Location,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    MigrationCenterImportDataFileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.format">Format</a></code> | <code>string</code> | Possible values: IMPORT_JOB_FORMAT_RVTOOLS_XLSX IMPORT_JOB_FORMAT_RVTOOLS_CSV IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV IMPORT_JOB_FORMAT_STRATOZONE_CSV IMPORT_JOB_FORMAT_DATABASE_ZIP. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.importDataFileId">ImportDataFileId</a></code> | <code>string</code> | The ID of the new data file. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.importJob">ImportJob</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#id MigrationCenterImportDataFile#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#project MigrationCenterImportDataFile#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Possible values: IMPORT_JOB_FORMAT_RVTOOLS_XLSX IMPORT_JOB_FORMAT_RVTOOLS_CSV IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV IMPORT_JOB_FORMAT_STRATOZONE_CSV IMPORT_JOB_FORMAT_DATABASE_ZIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#format MigrationCenterImportDataFile#format}

---

##### `ImportDataFileId`<sup>Required</sup> <a name="ImportDataFileId" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.importDataFileId"></a>

```csharp
public string ImportDataFileId { get; set; }
```

- *Type:* string

The ID of the new data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#import_data_file_id MigrationCenterImportDataFile#import_data_file_id}

---

##### `ImportJob`<sup>Required</sup> <a name="ImportJob" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.importJob"></a>

```csharp
public string ImportJob { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#import_job MigrationCenterImportDataFile#import_job}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#location MigrationCenterImportDataFile#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#deletion_policy MigrationCenterImportDataFile#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#display_name MigrationCenterImportDataFile#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#id MigrationCenterImportDataFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#project MigrationCenterImportDataFile#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileConfig.property.timeouts"></a>

```csharp
public MigrationCenterImportDataFileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#timeouts MigrationCenterImportDataFile#timeouts}

---

### MigrationCenterImportDataFileTimeouts <a name="MigrationCenterImportDataFileTimeouts" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportDataFileTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#create MigrationCenterImportDataFile#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#delete MigrationCenterImportDataFile#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#create MigrationCenterImportDataFile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_import_data_file#delete MigrationCenterImportDataFile#delete}.

---

### MigrationCenterImportDataFileUploadFileInfo <a name="MigrationCenterImportDataFileUploadFileInfo" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportDataFileUploadFileInfo {

};
```


## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterImportDataFileTimeoutsOutputReference <a name="MigrationCenterImportDataFileTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportDataFileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MigrationCenterImportDataFileTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileTimeouts">MigrationCenterImportDataFileTimeouts</a>

---


### MigrationCenterImportDataFileUploadFileInfoList <a name="MigrationCenterImportDataFileUploadFileInfoList" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportDataFileUploadFileInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.get"></a>

```csharp
private MigrationCenterImportDataFileUploadFileInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportDataFileUploadFileInfoOutputReference <a name="MigrationCenterImportDataFileUploadFileInfoOutputReference" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportDataFileUploadFileInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.headers">Headers</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.signedUri">SignedUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.uriExpirationTime">UriExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfo">MigrationCenterImportDataFileUploadFileInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.headers"></a>

```csharp
public StringMap Headers { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `SignedUri`<sup>Required</sup> <a name="SignedUri" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.signedUri"></a>

```csharp
public string SignedUri { get; }
```

- *Type:* string

---

##### `UriExpirationTime`<sup>Required</sup> <a name="UriExpirationTime" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.uriExpirationTime"></a>

```csharp
public string UriExpirationTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfoOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportDataFileUploadFileInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportDataFile.MigrationCenterImportDataFileUploadFileInfo">MigrationCenterImportDataFileUploadFileInfo</a>

---



