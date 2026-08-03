# `cesExample` Submodule <a name="`cesExample` Submodule" id="@cdktn/provider-google.cesExample"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesExample <a name="CesExample" id="@cdktn/provider-google.cesExample.CesExample"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example google_ces_example}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExample.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExample(Construct Scope, string Id, CesExampleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig">CesExampleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleConfig">CesExampleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.putMessages">PutMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetEntryAgent">ResetEntryAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExample.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.cesExample.CesExample.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.cesExample.CesExample.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.cesExample.CesExample.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.cesExample.CesExample.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesExample.CesExample.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.cesExample.CesExample.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.cesExample.CesExample.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.cesExample.CesExample.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.cesExample.CesExample.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.cesExample.CesExample.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.cesExample.CesExample.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.cesExample.CesExample.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.cesExample.CesExample.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExample.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExample.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExample.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExample.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.cesExample.CesExample.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.cesExample.CesExample.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExample.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesExample.CesExample.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExample.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.cesExample.CesExample.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExample.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.cesExample.CesExample.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.cesExample.CesExample.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.cesExample.CesExample.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.cesExample.CesExample.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExample.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMessages` <a name="PutMessages" id="@cdktn/provider-google.cesExample.CesExample.putMessages"></a>

```csharp
private void PutMessages(IResolvable|CesExampleMessages[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesExample.CesExample.putMessages.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.cesExample.CesExample.putTimeouts"></a>

```csharp
private void PutTimeouts(CesExampleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesExample.CesExample.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.cesExample.CesExample.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesExample.CesExample.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEntryAgent` <a name="ResetEntryAgent" id="@cdktn/provider-google.cesExample.CesExample.resetEntryAgent"></a>

```csharp
private void ResetEntryAgent()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cesExample.CesExample.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMessages` <a name="ResetMessages" id="@cdktn/provider-google.cesExample.CesExample.resetMessages"></a>

```csharp
private void ResetMessages()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.cesExample.CesExample.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.cesExample.CesExample.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CesExample resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.cesExample.CesExample.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

CesExample.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cesExample.CesExample.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.cesExample.CesExample.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

CesExample.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cesExample.CesExample.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.cesExample.CesExample.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

CesExample.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cesExample.CesExample.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

CesExample.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CesExample resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CesExample to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CesExample that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CesExample to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.invalid">Invalid</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.messages">Messages</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList">CesExampleMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference">CesExampleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.appInput">AppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.entryAgentInput">EntryAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.exampleIdInput">ExampleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.messagesInput">MessagesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.app">App</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.entryAgent">EntryAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.exampleId">ExampleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.cesExample.CesExample.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.cesExample.CesExample.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExample.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.cesExample.CesExample.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.cesExample.CesExample.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.cesExample.CesExample.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.cesExample.CesExample.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cesExample.CesExample.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cesExample.CesExample.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cesExample.CesExample.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cesExample.CesExample.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cesExample.CesExample.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesExample.CesExample.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cesExample.CesExample.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.cesExample.CesExample.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.cesExample.CesExample.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Invalid`<sup>Required</sup> <a name="Invalid" id="@cdktn/provider-google.cesExample.CesExample.property.invalid"></a>

```csharp
public IResolvable Invalid { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktn/provider-google.cesExample.CesExample.property.messages"></a>

```csharp
public CesExampleMessagesList Messages { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList">CesExampleMessagesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesExample.CesExample.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.cesExample.CesExample.property.timeouts"></a>

```csharp
public CesExampleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference">CesExampleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.cesExample.CesExample.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-google.cesExample.CesExample.property.appInput"></a>

```csharp
public string AppInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.cesExample.CesExample.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesExample.CesExample.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.cesExample.CesExample.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EntryAgentInput`<sup>Optional</sup> <a name="EntryAgentInput" id="@cdktn/provider-google.cesExample.CesExample.property.entryAgentInput"></a>

```csharp
public string EntryAgentInput { get; }
```

- *Type:* string

---

##### `ExampleIdInput`<sup>Optional</sup> <a name="ExampleIdInput" id="@cdktn/provider-google.cesExample.CesExample.property.exampleIdInput"></a>

```csharp
public string ExampleIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cesExample.CesExample.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.cesExample.CesExample.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktn/provider-google.cesExample.CesExample.property.messagesInput"></a>

```csharp
public IResolvable|CesExampleMessages[] MessagesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.cesExample.CesExample.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.cesExample.CesExample.property.timeoutsInput"></a>

```csharp
public IResolvable|CesExampleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a>

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google.cesExample.CesExample.property.app"></a>

```csharp
public string App { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cesExample.CesExample.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesExample.CesExample.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesExample.CesExample.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntryAgent`<sup>Required</sup> <a name="EntryAgent" id="@cdktn/provider-google.cesExample.CesExample.property.entryAgent"></a>

```csharp
public string EntryAgent { get; }
```

- *Type:* string

---

##### `ExampleId`<sup>Required</sup> <a name="ExampleId" id="@cdktn/provider-google.cesExample.CesExample.property.exampleId"></a>

```csharp
public string ExampleId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExample.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cesExample.CesExample.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.cesExample.CesExample.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.cesExample.CesExample.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CesExampleConfig <a name="CesExampleConfig" id="@cdktn/provider-google.cesExample.CesExampleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string App,
    string DisplayName,
    string ExampleId,
    string Location,
    string DeletionPolicy = null,
    string Description = null,
    string EntryAgent = null,
    string Id = null,
    IResolvable|CesExampleMessages[] Messages = null,
    string Project = null,
    CesExampleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.app">App</a></code> | <code>string</code> | Resource ID segment making up resource 'name', defining the app the example belongs to. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name of the example. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.exampleId">ExampleId</a></code> | <code>string</code> | The ID to use for the example, which will become the final component of the example's resource name. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name', defining what region the parent app is in. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.description">Description</a></code> | <code>string</code> | Human-readable description of the example. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.entryAgent">EntryAgent</a></code> | <code>string</code> | The agent that initially handles the conversation. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#id CesExample#id}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.messages">Messages</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>[]</code> | messages block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#project CesExample#project}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.app"></a>

```csharp
public string App { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name', defining the app the example belongs to.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#app CesExample#app}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#display_name CesExample#display_name}

---

##### `ExampleId`<sup>Required</sup> <a name="ExampleId" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.exampleId"></a>

```csharp
public string ExampleId { get; set; }
```

- *Type:* string

The ID to use for the example, which will become the final component of the example's resource name.

In Terraform, this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#example_id CesExample#example_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name', defining what region the parent app is in.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#location CesExample#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#deletion_policy CesExample#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#description CesExample#description}

---

##### `EntryAgent`<sup>Optional</sup> <a name="EntryAgent" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.entryAgent"></a>

```csharp
public string EntryAgent { get; set; }
```

- *Type:* string

The agent that initially handles the conversation.

If not specified, the
example represents a conversation that is handled by the root agent.
Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#entry_agent CesExample#entry_agent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#id CesExample#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.messages"></a>

```csharp
public IResolvable|CesExampleMessages[] Messages { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>[]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#messages CesExample#messages}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#project CesExample#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.timeouts"></a>

```csharp
public CesExampleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#timeouts CesExample#timeouts}

---

### CesExampleMessages <a name="CesExampleMessages" id="@cdktn/provider-google.cesExample.CesExampleMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessages.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessages {
    IResolvable|CesExampleMessagesChunks[] Chunks = null,
    string Role = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessages.property.chunks">Chunks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>[]</code> | chunks block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessages.property.role">Role</a></code> | <code>string</code> | The role within the conversation, e.g., user, agent. |

---

##### `Chunks`<sup>Optional</sup> <a name="Chunks" id="@cdktn/provider-google.cesExample.CesExampleMessages.property.chunks"></a>

```csharp
public IResolvable|CesExampleMessagesChunks[] Chunks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>[]

chunks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#chunks CesExample#chunks}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-google.cesExample.CesExampleMessages.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

The role within the conversation, e.g., user, agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#role CesExample#role}

---

### CesExampleMessagesChunks <a name="CesExampleMessagesChunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunks {
    CesExampleMessagesChunksAgentTransfer AgentTransfer = null,
    CesExampleMessagesChunksImage Image = null,
    string Text = null,
    CesExampleMessagesChunksToolCall ToolCall = null,
    CesExampleMessagesChunksToolResponse ToolResponse = null,
    string UpdatedVariables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.agentTransfer">AgentTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.image">Image</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a></code> | image block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.text">Text</a></code> | <code>string</code> | Text data. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolCall">ToolCall</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a></code> | tool_call block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolResponse">ToolResponse</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a></code> | tool_response block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.updatedVariables">UpdatedVariables</a></code> | <code>string</code> | A struct represents variables that were updated in the conversation, keyed by variable names. |

---

##### `AgentTransfer`<sup>Optional</sup> <a name="AgentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.agentTransfer"></a>

```csharp
public CesExampleMessagesChunksAgentTransfer AgentTransfer { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#agent_transfer CesExample#agent_transfer}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.image"></a>

```csharp
public CesExampleMessagesChunksImage Image { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#image CesExample#image}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Text data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#text CesExample#text}

---

##### `ToolCall`<sup>Optional</sup> <a name="ToolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolCall"></a>

```csharp
public CesExampleMessagesChunksToolCall ToolCall { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

tool_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#tool_call CesExample#tool_call}

---

##### `ToolResponse`<sup>Optional</sup> <a name="ToolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolResponse"></a>

```csharp
public CesExampleMessagesChunksToolResponse ToolResponse { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#tool_response CesExample#tool_response}

---

##### `UpdatedVariables`<sup>Optional</sup> <a name="UpdatedVariables" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.updatedVariables"></a>

```csharp
public string UpdatedVariables { get; set; }
```

- *Type:* string

A struct represents variables that were updated in the conversation, keyed by variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#updated_variables CesExample#updated_variables}

---

### CesExampleMessagesChunksAgentTransfer <a name="CesExampleMessagesChunksAgentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunksAgentTransfer {
    string TargetAgent
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer.property.targetAgent">TargetAgent</a></code> | <code>string</code> | The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |

---

##### `TargetAgent`<sup>Required</sup> <a name="TargetAgent" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer.property.targetAgent"></a>

```csharp
public string TargetAgent { get; set; }
```

- *Type:* string

The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#target_agent CesExample#target_agent}

---

### CesExampleMessagesChunksImage <a name="CesExampleMessagesChunksImage" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunksImage {
    string Data,
    string MimeType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.data">Data</a></code> | <code>string</code> | Raw bytes of the image. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.mimeType">MimeType</a></code> | <code>string</code> | The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp. |

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

Raw bytes of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#data CesExample#data}

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.mimeType"></a>

```csharp
public string MimeType { get; set; }
```

- *Type:* string

The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#mime_type CesExample#mime_type}

---

### CesExampleMessagesChunksToolCall <a name="CesExampleMessagesChunksToolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunksToolCall {
    string Args = null,
    string Id = null,
    string Tool = null,
    CesExampleMessagesChunksToolCallToolsetTool ToolsetTool = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.args">Args</a></code> | <code>string</code> | The input parameters and values for the tool in JSON object format. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.id">Id</a></code> | <code>string</code> | The unique identifier of the tool call. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.tool">Tool</a></code> | <code>string</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a></code> | toolset_tool block. |

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.args"></a>

```csharp
public string Args { get; set; }
```

- *Type:* string

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#args CesExample#args}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique identifier of the tool call.

If populated, the client should
return the execution result with the matching ID in
ToolResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#id CesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.tool"></a>

```csharp
public string Tool { get; set; }
```

- *Type:* string

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#tool CesExample#tool}

---

##### `ToolsetTool`<sup>Optional</sup> <a name="ToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.toolsetTool"></a>

```csharp
public CesExampleMessagesChunksToolCallToolsetTool ToolsetTool { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#toolset_tool CesExample#toolset_tool}

---

### CesExampleMessagesChunksToolCallToolsetTool <a name="CesExampleMessagesChunksToolCallToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunksToolCallToolsetTool {
    string Toolset,
    string ToolId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolset">Toolset</a></code> | <code>string</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolId">ToolId</a></code> | <code>string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolset"></a>

```csharp
public string Toolset { get; set; }
```

- *Type:* string

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#toolset CesExample#toolset}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolId"></a>

```csharp
public string ToolId { get; set; }
```

- *Type:* string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#tool_id CesExample#tool_id}

---

### CesExampleMessagesChunksToolResponse <a name="CesExampleMessagesChunksToolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunksToolResponse {
    string Response,
    string Id = null,
    string Tool = null,
    CesExampleMessagesChunksToolResponseToolsetTool ToolsetTool = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.response">Response</a></code> | <code>string</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.id">Id</a></code> | <code>string</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.tool">Tool</a></code> | <code>string</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.response"></a>

```csharp
public string Response { get; set; }
```

- *Type:* string

The tool execution result in JSON object format.

Use "output" key to specify tool response and "error" key to specify
error details (if any). If "output" and "error" keys are not specified,
then whole "response" is treated as tool execution result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#response CesExample#response}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#id CesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.tool"></a>

```csharp
public string Tool { get; set; }
```

- *Type:* string

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#tool CesExample#tool}

---

##### `ToolsetTool`<sup>Optional</sup> <a name="ToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.toolsetTool"></a>

```csharp
public CesExampleMessagesChunksToolResponseToolsetTool ToolsetTool { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#toolset_tool CesExample#toolset_tool}

---

### CesExampleMessagesChunksToolResponseToolsetTool <a name="CesExampleMessagesChunksToolResponseToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunksToolResponseToolsetTool {
    string Toolset,
    string ToolId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolset">Toolset</a></code> | <code>string</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolId">ToolId</a></code> | <code>string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolset"></a>

```csharp
public string Toolset { get; set; }
```

- *Type:* string

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#toolset CesExample#toolset}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolId"></a>

```csharp
public string ToolId { get; set; }
```

- *Type:* string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#tool_id CesExample#tool_id}

---

### CesExampleTimeouts <a name="CesExampleTimeouts" id="@cdktn/provider-google.cesExample.CesExampleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#create CesExample#create}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#delete CesExample#delete}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#update CesExample#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#create CesExample#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#delete CesExample#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/ces_example#update CesExample#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesExampleMessagesChunksAgentTransferOutputReference <a name="CesExampleMessagesChunksAgentTransferOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunksAgentTransferOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput">TargetAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent">TargetAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `TargetAgentInput`<sup>Optional</sup> <a name="TargetAgentInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput"></a>

```csharp
public string TargetAgentInput { get; }
```

- *Type:* string

---

##### `TargetAgent`<sup>Required</sup> <a name="TargetAgent" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent"></a>

```csharp
public string TargetAgent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.internalValue"></a>

```csharp
public CesExampleMessagesChunksAgentTransfer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

---


### CesExampleMessagesChunksImageOutputReference <a name="CesExampleMessagesChunksImageOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunksImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeType">MimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeTypeInput"></a>

```csharp
public string MimeTypeInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeType"></a>

```csharp
public string MimeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.internalValue"></a>

```csharp
public CesExampleMessagesChunksImage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

---


### CesExampleMessagesChunksList <a name="CesExampleMessagesChunksList" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.get"></a>

```csharp
private CesExampleMessagesChunksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.internalValue"></a>

```csharp
public IResolvable|CesExampleMessagesChunks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>[]

---


### CesExampleMessagesChunksOutputReference <a name="CesExampleMessagesChunksOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putAgentTransfer">PutAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall">PutToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse">PutToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetAgentTransfer">ResetAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolCall">ResetToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolResponse">ResetToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetUpdatedVariables">ResetUpdatedVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentTransfer` <a name="PutAgentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putAgentTransfer"></a>

```csharp
private void PutAgentTransfer(CesExampleMessagesChunksAgentTransfer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putAgentTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

---

##### `PutImage` <a name="PutImage" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putImage"></a>

```csharp
private void PutImage(CesExampleMessagesChunksImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

---

##### `PutToolCall` <a name="PutToolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall"></a>

```csharp
private void PutToolCall(CesExampleMessagesChunksToolCall Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

---

##### `PutToolResponse` <a name="PutToolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse"></a>

```csharp
private void PutToolResponse(CesExampleMessagesChunksToolResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

---

##### `ResetAgentTransfer` <a name="ResetAgentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetAgentTransfer"></a>

```csharp
private void ResetAgentTransfer()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetToolCall` <a name="ResetToolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolCall"></a>

```csharp
private void ResetToolCall()
```

##### `ResetToolResponse` <a name="ResetToolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolResponse"></a>

```csharp
private void ResetToolResponse()
```

##### `ResetUpdatedVariables` <a name="ResetUpdatedVariables" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetUpdatedVariables"></a>

```csharp
private void ResetUpdatedVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransfer">AgentTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference">CesExampleMessagesChunksAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.image">Image</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference">CesExampleMessagesChunksImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCall">ToolCall</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference">CesExampleMessagesChunksToolCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponse">ToolResponse</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference">CesExampleMessagesChunksToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransferInput">AgentTransferInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCallInput">ToolCallInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponseInput">ToolResponseInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariablesInput">UpdatedVariablesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariables">UpdatedVariables</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentTransfer`<sup>Required</sup> <a name="AgentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransfer"></a>

```csharp
public CesExampleMessagesChunksAgentTransferOutputReference AgentTransfer { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference">CesExampleMessagesChunksAgentTransferOutputReference</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.image"></a>

```csharp
public CesExampleMessagesChunksImageOutputReference Image { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference">CesExampleMessagesChunksImageOutputReference</a>

---

##### `ToolCall`<sup>Required</sup> <a name="ToolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCall"></a>

```csharp
public CesExampleMessagesChunksToolCallOutputReference ToolCall { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference">CesExampleMessagesChunksToolCallOutputReference</a>

---

##### `ToolResponse`<sup>Required</sup> <a name="ToolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponse"></a>

```csharp
public CesExampleMessagesChunksToolResponseOutputReference ToolResponse { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference">CesExampleMessagesChunksToolResponseOutputReference</a>

---

##### `AgentTransferInput`<sup>Optional</sup> <a name="AgentTransferInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransferInput"></a>

```csharp
public CesExampleMessagesChunksAgentTransfer AgentTransferInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.imageInput"></a>

```csharp
public CesExampleMessagesChunksImage ImageInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `ToolCallInput`<sup>Optional</sup> <a name="ToolCallInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCallInput"></a>

```csharp
public CesExampleMessagesChunksToolCall ToolCallInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

---

##### `ToolResponseInput`<sup>Optional</sup> <a name="ToolResponseInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponseInput"></a>

```csharp
public CesExampleMessagesChunksToolResponse ToolResponseInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

---

##### `UpdatedVariablesInput`<sup>Optional</sup> <a name="UpdatedVariablesInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariablesInput"></a>

```csharp
public string UpdatedVariablesInput { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `UpdatedVariables`<sup>Required</sup> <a name="UpdatedVariables" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariables"></a>

```csharp
public string UpdatedVariables { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CesExampleMessagesChunks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>

---


### CesExampleMessagesChunksToolCallOutputReference <a name="CesExampleMessagesChunksToolCallOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunksToolCallOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.putToolsetTool">PutToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetTool">ResetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetToolsetTool">ResetToolsetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolsetTool` <a name="PutToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.putToolsetTool"></a>

```csharp
private void PutToolsetTool(CesExampleMessagesChunksToolCallToolsetTool Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetTool"></a>

```csharp
private void ResetTool()
```

##### `ResetToolsetTool` <a name="ResetToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetToolsetTool"></a>

```csharp
private void ResetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference">CesExampleMessagesChunksToolCallToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.argsInput">ArgsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolInput">ToolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput">ToolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.args">Args</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.tool">Tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ToolsetTool`<sup>Required</sup> <a name="ToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetTool"></a>

```csharp
public CesExampleMessagesChunksToolCallToolsetToolOutputReference ToolsetTool { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference">CesExampleMessagesChunksToolCallToolsetToolOutputReference</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.argsInput"></a>

```csharp
public string ArgsInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolInput"></a>

```csharp
public string ToolInput { get; }
```

- *Type:* string

---

##### `ToolsetToolInput`<sup>Optional</sup> <a name="ToolsetToolInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput"></a>

```csharp
public CesExampleMessagesChunksToolCallToolsetTool ToolsetToolInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.args"></a>

```csharp
public string Args { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.tool"></a>

```csharp
public string Tool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.internalValue"></a>

```csharp
public CesExampleMessagesChunksToolCall InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

---


### CesExampleMessagesChunksToolCallToolsetToolOutputReference <a name="CesExampleMessagesChunksToolCallToolsetToolOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunksToolCallToolsetToolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId"></a>

```csharp
private void ResetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput">ToolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId">ToolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset">Toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput"></a>

```csharp
public string ToolIdInput { get; }
```

- *Type:* string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput"></a>

```csharp
public string ToolsetInput { get; }
```

- *Type:* string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId"></a>

```csharp
public string ToolId { get; }
```

- *Type:* string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset"></a>

```csharp
public string Toolset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue"></a>

```csharp
public CesExampleMessagesChunksToolCallToolsetTool InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

---


### CesExampleMessagesChunksToolResponseOutputReference <a name="CesExampleMessagesChunksToolResponseOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunksToolResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.putToolsetTool">PutToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetTool">ResetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool">ResetToolsetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolsetTool` <a name="PutToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.putToolsetTool"></a>

```csharp
private void PutToolsetTool(CesExampleMessagesChunksToolResponseToolsetTool Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetTool"></a>

```csharp
private void ResetTool()
```

##### `ResetToolsetTool` <a name="ResetToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool"></a>

```csharp
private void ResetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference">CesExampleMessagesChunksToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.responseInput">ResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolInput">ToolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput">ToolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.response">Response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.tool">Tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ToolsetTool`<sup>Required</sup> <a name="ToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool"></a>

```csharp
public CesExampleMessagesChunksToolResponseToolsetToolOutputReference ToolsetTool { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference">CesExampleMessagesChunksToolResponseToolsetToolOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.responseInput"></a>

```csharp
public string ResponseInput { get; }
```

- *Type:* string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolInput"></a>

```csharp
public string ToolInput { get; }
```

- *Type:* string

---

##### `ToolsetToolInput`<sup>Optional</sup> <a name="ToolsetToolInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput"></a>

```csharp
public CesExampleMessagesChunksToolResponseToolsetTool ToolsetToolInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.response"></a>

```csharp
public string Response { get; }
```

- *Type:* string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.tool"></a>

```csharp
public string Tool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.internalValue"></a>

```csharp
public CesExampleMessagesChunksToolResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

---


### CesExampleMessagesChunksToolResponseToolsetToolOutputReference <a name="CesExampleMessagesChunksToolResponseToolsetToolOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesChunksToolResponseToolsetToolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId"></a>

```csharp
private void ResetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput">ToolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId">ToolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset">Toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```csharp
public string ToolIdInput { get; }
```

- *Type:* string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```csharp
public string ToolsetInput { get; }
```

- *Type:* string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId"></a>

```csharp
public string ToolId { get; }
```

- *Type:* string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset"></a>

```csharp
public string Toolset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue"></a>

```csharp
public CesExampleMessagesChunksToolResponseToolsetTool InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

---


### CesExampleMessagesList <a name="CesExampleMessagesList" id="@cdktn/provider-google.cesExample.CesExampleMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.get"></a>

```csharp
private CesExampleMessagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.property.internalValue"></a>

```csharp
public IResolvable|CesExampleMessages[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>[]

---


### CesExampleMessagesOutputReference <a name="CesExampleMessagesOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleMessagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.putChunks">PutChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetChunks">ResetChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChunks` <a name="PutChunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.putChunks"></a>

```csharp
private void PutChunks(IResolvable|CesExampleMessagesChunks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.putChunks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>[]

---

##### `ResetChunks` <a name="ResetChunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetChunks"></a>

```csharp
private void ResetChunks()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunks">Chunks</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList">CesExampleMessagesChunksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunksInput">ChunksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Chunks`<sup>Required</sup> <a name="Chunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunks"></a>

```csharp
public CesExampleMessagesChunksList Chunks { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList">CesExampleMessagesChunksList</a>

---

##### `ChunksInput`<sup>Optional</sup> <a name="ChunksInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunksInput"></a>

```csharp
public IResolvable|CesExampleMessagesChunks[] ChunksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>[]

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CesExampleMessages InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>

---


### CesExampleTimeoutsOutputReference <a name="CesExampleTimeoutsOutputReference" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesExampleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CesExampleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a>

---



