# `iamFolderAccessPolicy` Submodule <a name="`iamFolderAccessPolicy` Submodule" id="@cdktn/provider-google.iamFolderAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamFolderAccessPolicy <a name="IamFolderAccessPolicy" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy google_iam_folder_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamFolderAccessPolicy(Construct Scope, string Id, IamFolderAccessPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig">IamFolderAccessPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig">IamFolderAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetails` <a name="PutDetails" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.putDetails"></a>

```csharp
private void PutDetails(IamFolderAccessPolicyDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(IamFolderAccessPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDetails` <a name="ResetDetails" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetDetails"></a>

```csharp
private void ResetDetails()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IamFolderAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamFolderAccessPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamFolderAccessPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamFolderAccessPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamFolderAccessPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IamFolderAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamFolderAccessPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamFolderAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IamFolderAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference">IamFolderAccessPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference">IamFolderAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.accessPolicyIdInput">AccessPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.detailsInput">DetailsInput</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.accessPolicyId">AccessPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.details"></a>

```csharp
public IamFolderAccessPolicyDetailsOutputReference Details { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference">IamFolderAccessPolicyDetailsOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.timeouts"></a>

```csharp
public IamFolderAccessPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference">IamFolderAccessPolicyTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AccessPolicyIdInput`<sup>Optional</sup> <a name="AccessPolicyIdInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.accessPolicyIdInput"></a>

```csharp
public string AccessPolicyIdInput { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.detailsInput"></a>

```csharp
public IamFolderAccessPolicyDetails DetailsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|IamFolderAccessPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a>

---

##### `AccessPolicyId`<sup>Required</sup> <a name="AccessPolicyId" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.accessPolicyId"></a>

```csharp
public string AccessPolicyId { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamFolderAccessPolicyConfig <a name="IamFolderAccessPolicyConfig" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamFolderAccessPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessPolicyId,
    string Folder,
    string Location,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string DeletionPolicy = null,
    IamFolderAccessPolicyDetails Details = null,
    string DisplayName = null,
    string Id = null,
    IamFolderAccessPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.accessPolicyId">AccessPolicyId</a></code> | <code>string</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.folder">Folder</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#id IamFolderAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessPolicyId`<sup>Required</sup> <a name="AccessPolicyId" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.accessPolicyId"></a>

```csharp
public string AccessPolicyId { get; set; }
```

- *Type:* string

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#access_policy_id IamFolderAccessPolicy#access_policy_id}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#folder IamFolderAccessPolicy#folder}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#location IamFolderAccessPolicy#location}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#annotations IamFolderAccessPolicy#annotations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#deletion_policy IamFolderAccessPolicy#deletion_policy}

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.details"></a>

```csharp
public IamFolderAccessPolicyDetails Details { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#details IamFolderAccessPolicy#details}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#display_name IamFolderAccessPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#id IamFolderAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.timeouts"></a>

```csharp
public IamFolderAccessPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#timeouts IamFolderAccessPolicy#timeouts}

---

### IamFolderAccessPolicyDetails <a name="IamFolderAccessPolicyDetails" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamFolderAccessPolicyDetails {
    IResolvable|IamFolderAccessPolicyDetailsRules[] Rules
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails.property.rules">Rules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>[]</code> | rules block. |

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails.property.rules"></a>

```csharp
public IResolvable|IamFolderAccessPolicyDetailsRules[] Rules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#rules IamFolderAccessPolicy#rules}

---

### IamFolderAccessPolicyDetailsRules <a name="IamFolderAccessPolicyDetailsRules" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamFolderAccessPolicyDetailsRules {
    string Effect,
    IamFolderAccessPolicyDetailsRulesOperation Operation,
    string[] Principals,
    IResolvable|IamFolderAccessPolicyDetailsRulesConditions[] Conditions = null,
    string Description = null,
    string[] ExcludedPrincipals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.effect">Effect</a></code> | <code>string</code> | The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"]. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.operation">Operation</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation">IamFolderAccessPolicyDetailsRulesOperation</a></code> | operation block. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.principals">Principals</a></code> | <code>string[]</code> | The identities for which this rule's effect governs using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.description">Description</a></code> | <code>string</code> | Customer specified description of the rule. Must be less than or equal to 256 characters. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.excludedPrincipals">ExcludedPrincipals</a></code> | <code>string[]</code> | The identities that are excluded from the access policy rule, even if they are listed in the 'principals'. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#effect IamFolderAccessPolicy#effect}

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.operation"></a>

```csharp
public IamFolderAccessPolicyDetailsRulesOperation Operation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation">IamFolderAccessPolicyDetailsRulesOperation</a>

operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#operation IamFolderAccessPolicy#operation}

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.principals"></a>

```csharp
public string[] Principals { get; set; }
```

- *Type:* string[]

The identities for which this rule's effect governs using one or more permissions on Google Cloud resources.

This field can contain the
following values:

* 'principal://goog/subject/{email_id}': A specific Google Account.
  Includes Gmail, Cloud Identity, and Google Workspace user accounts. For
  example, 'principal://goog/subject/alice@example.com'.
* 'principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}':
  A Google Cloud service account. For example,
  'principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com'.
* 'principalSet://goog/group/{group_id}': A Google group. For example,
  'principalSet://goog/group/admins@example.com'.
* 'principalSet://goog/cloudIdentityCustomerId/{customer_id}': All of the
  principals associated with the specified Google Workspace or Cloud
  Identity customer ID. For example,
  'principalSet://goog/cloudIdentityCustomerId/C01Abc35'.
  If an identifier that was previously set on a policy is soft deleted, then
  calls to read that policy will return the identifier with a deleted
  prefix. Users cannot set identifiers with this syntax.
* 'deleted:principal://goog/subject/{email_id}?uid={uid}': A specific
  Google Account that was deleted recently. For example,
  'deleted:principal://goog/subject/alice@example.com?uid=1234567890'. If
  the Google Account is recovered, this identifier reverts to the standard
  identifier for a Google Account.
* 'deleted:principalSet://goog/group/{group_id}?uid={uid}': A Google group
  that was deleted recently. For example,
  'deleted:principalSet://goog/group/admins@example.com?uid=1234567890'.
  If the Google group is restored, this identifier reverts to the standard
  identifier for a Google group.
* 'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}':
  A Google Cloud service account that was deleted recently. For example,
  'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890'.
  If the service account is undeleted, this identifier reverts to the
  standard identifier for a service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#principals IamFolderAccessPolicy#principals}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.conditions"></a>

```csharp
public IResolvable|IamFolderAccessPolicyDetailsRulesConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#conditions IamFolderAccessPolicy#conditions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Customer specified description of the rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#description IamFolderAccessPolicy#description}

---

##### `ExcludedPrincipals`<sup>Optional</sup> <a name="ExcludedPrincipals" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.excludedPrincipals"></a>

```csharp
public string[] ExcludedPrincipals { get; set; }
```

- *Type:* string[]

The identities that are excluded from the access policy rule, even if they are listed in the 'principals'.

For example, you could add a Google
group to the 'principals', then exclude specific users who belong to
that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#excluded_principals IamFolderAccessPolicy#excluded_principals}

---

### IamFolderAccessPolicyDetailsRulesConditions <a name="IamFolderAccessPolicyDetailsRulesConditions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamFolderAccessPolicyDetailsRulesConditions {
    string Service,
    string Expression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions.property.service">Service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#service IamFolderAccessPolicy#service}. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#service IamFolderAccessPolicy#service}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#expression IamFolderAccessPolicy#expression}

---

### IamFolderAccessPolicyDetailsRulesOperation <a name="IamFolderAccessPolicyDetailsRulesOperation" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamFolderAccessPolicyDetailsRulesOperation {
    string[] Permissions,
    string[] ExcludedPermissions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation.property.permissions">Permissions</a></code> | <code>string[]</code> | The permissions that are explicitly affected by this rule. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation.property.excludedPermissions">ExcludedPermissions</a></code> | <code>string[]</code> | Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'. |

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation.property.permissions"></a>

```csharp
public string[] Permissions { get; set; }
```

- *Type:* string[]

The permissions that are explicitly affected by this rule.

Each
permission uses the format '{service_fqdn}/{resource}.{verb}', where
'{service_fqdn}' is the fully qualified domain name for the service.
Currently supported permissions are as follows:

* 'eventarc.googleapis.com/messageBuses.publish'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#permissions IamFolderAccessPolicy#permissions}

---

##### `ExcludedPermissions`<sup>Optional</sup> <a name="ExcludedPermissions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation.property.excludedPermissions"></a>

```csharp
public string[] ExcludedPermissions { get; set; }
```

- *Type:* string[]

Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'.

If a permission appears in
'permissions' *and* in 'excluded_permissions' then it will *not* be
subject to the policy effect.
The excluded permissions can be specified using the same syntax as
'permissions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#excluded_permissions IamFolderAccessPolicy#excluded_permissions}

---

### IamFolderAccessPolicyTimeouts <a name="IamFolderAccessPolicyTimeouts" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamFolderAccessPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#create IamFolderAccessPolicy#create}. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#delete IamFolderAccessPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#update IamFolderAccessPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#create IamFolderAccessPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#delete IamFolderAccessPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#update IamFolderAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamFolderAccessPolicyDetailsOutputReference <a name="IamFolderAccessPolicyDetailsOutputReference" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamFolderAccessPolicyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.putRules">PutRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.putRules"></a>

```csharp
private void PutRules(IResolvable|IamFolderAccessPolicyDetailsRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList">IamFolderAccessPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.rulesInput">RulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.rules"></a>

```csharp
public IamFolderAccessPolicyDetailsRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList">IamFolderAccessPolicyDetailsRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.rulesInput"></a>

```csharp
public IResolvable|IamFolderAccessPolicyDetailsRules[] RulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.internalValue"></a>

```csharp
public IamFolderAccessPolicyDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a>

---


### IamFolderAccessPolicyDetailsRulesConditionsList <a name="IamFolderAccessPolicyDetailsRulesConditionsList" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamFolderAccessPolicyDetailsRulesConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.get"></a>

```csharp
private IamFolderAccessPolicyDetailsRulesConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.property.internalValue"></a>

```csharp
public IResolvable|IamFolderAccessPolicyDetailsRulesConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>[]

---


### IamFolderAccessPolicyDetailsRulesConditionsOutputReference <a name="IamFolderAccessPolicyDetailsRulesConditionsOutputReference" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamFolderAccessPolicyDetailsRulesConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IamFolderAccessPolicyDetailsRulesConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>

---


### IamFolderAccessPolicyDetailsRulesList <a name="IamFolderAccessPolicyDetailsRulesList" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamFolderAccessPolicyDetailsRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.get"></a>

```csharp
private IamFolderAccessPolicyDetailsRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.property.internalValue"></a>

```csharp
public IResolvable|IamFolderAccessPolicyDetailsRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>[]

---


### IamFolderAccessPolicyDetailsRulesOperationOutputReference <a name="IamFolderAccessPolicyDetailsRulesOperationOutputReference" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamFolderAccessPolicyDetailsRulesOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions">ResetExcludedPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedPermissions` <a name="ResetExcludedPermissions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions"></a>

```csharp
private void ResetExcludedPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput">ExcludedPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions">ExcludedPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation">IamFolderAccessPolicyDetailsRulesOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedPermissionsInput`<sup>Optional</sup> <a name="ExcludedPermissionsInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput"></a>

```csharp
public string[] ExcludedPermissionsInput { get; }
```

- *Type:* string[]

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput"></a>

```csharp
public string[] PermissionsInput { get; }
```

- *Type:* string[]

---

##### `ExcludedPermissions`<sup>Required</sup> <a name="ExcludedPermissions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions"></a>

```csharp
public string[] ExcludedPermissions { get; }
```

- *Type:* string[]

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.internalValue"></a>

```csharp
public IamFolderAccessPolicyDetailsRulesOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation">IamFolderAccessPolicyDetailsRulesOperation</a>

---


### IamFolderAccessPolicyDetailsRulesOutputReference <a name="IamFolderAccessPolicyDetailsRulesOutputReference" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamFolderAccessPolicyDetailsRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.putOperation">PutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals">ResetExcludedPrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.putConditions"></a>

```csharp
private void PutConditions(IResolvable|IamFolderAccessPolicyDetailsRulesConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>[]

---

##### `PutOperation` <a name="PutOperation" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.putOperation"></a>

```csharp
private void PutOperation(IamFolderAccessPolicyDetailsRulesOperation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.putOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation">IamFolderAccessPolicyDetailsRulesOperation</a>

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludedPrincipals` <a name="ResetExcludedPrincipals" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals"></a>

```csharp
private void ResetExcludedPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList">IamFolderAccessPolicyDetailsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.operation">Operation</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference">IamFolderAccessPolicyDetailsRulesOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput">ExcludedPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.operationInput">OperationInput</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation">IamFolderAccessPolicyDetailsRulesOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals">ExcludedPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.conditions"></a>

```csharp
public IamFolderAccessPolicyDetailsRulesConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList">IamFolderAccessPolicyDetailsRulesConditionsList</a>

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.operation"></a>

```csharp
public IamFolderAccessPolicyDetailsRulesOperationOutputReference Operation { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference">IamFolderAccessPolicyDetailsRulesOperationOutputReference</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.conditionsInput"></a>

```csharp
public IResolvable|IamFolderAccessPolicyDetailsRulesConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `ExcludedPrincipalsInput`<sup>Optional</sup> <a name="ExcludedPrincipalsInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput"></a>

```csharp
public string[] ExcludedPrincipalsInput { get; }
```

- *Type:* string[]

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.operationInput"></a>

```csharp
public IamFolderAccessPolicyDetailsRulesOperation OperationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation">IamFolderAccessPolicyDetailsRulesOperation</a>

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.principalsInput"></a>

```csharp
public string[] PrincipalsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `ExcludedPrincipals`<sup>Required</sup> <a name="ExcludedPrincipals" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals"></a>

```csharp
public string[] ExcludedPrincipals { get; }
```

- *Type:* string[]

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IamFolderAccessPolicyDetailsRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>

---


### IamFolderAccessPolicyTimeoutsOutputReference <a name="IamFolderAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamFolderAccessPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IamFolderAccessPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a>

---



