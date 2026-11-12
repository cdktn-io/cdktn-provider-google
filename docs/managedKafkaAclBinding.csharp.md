# `managedKafkaAclBinding` Submodule <a name="`managedKafkaAclBinding` Submodule" id="@cdktn/provider-google.managedKafkaAclBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaAclBinding <a name="ManagedKafkaAclBinding" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding google_managed_kafka_acl_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaAclBinding(Construct Scope, string Id, ManagedKafkaAclBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig">ManagedKafkaAclBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig">ManagedKafkaAclBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetPermissionType">ResetPermissionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(ManagedKafkaAclBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPermissionType` <a name="ResetPermissionType" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetPermissionType"></a>

```csharp
private void ResetPermissionType()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ManagedKafkaAclBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ManagedKafkaAclBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ManagedKafkaAclBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ManagedKafkaAclBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ManagedKafkaAclBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ManagedKafkaAclBinding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedKafkaAclBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedKafkaAclBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ManagedKafkaAclBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference">ManagedKafkaAclBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.aclIdInput">AclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.permissionTypeInput">PermissionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.aclId">AclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.permissionType">PermissionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.timeouts"></a>

```csharp
public ManagedKafkaAclBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference">ManagedKafkaAclBindingTimeoutsOutputReference</a>

---

##### `AclIdInput`<sup>Optional</sup> <a name="AclIdInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.aclIdInput"></a>

```csharp
public string AclIdInput { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `PermissionTypeInput`<sup>Optional</sup> <a name="PermissionTypeInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.permissionTypeInput"></a>

```csharp
public string PermissionTypeInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.timeoutsInput"></a>

```csharp
public IResolvable|ManagedKafkaAclBindingTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a>

---

##### `AclId`<sup>Required</sup> <a name="AclId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.aclId"></a>

```csharp
public string AclId { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `PermissionType`<sup>Required</sup> <a name="PermissionType" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.permissionType"></a>

```csharp
public string PermissionType { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaAclBindingConfig <a name="ManagedKafkaAclBindingConfig" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaAclBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AclId,
    string Cluster,
    string Location,
    string Operation,
    string Principal,
    string DeletionPolicy = null,
    string Host = null,
    string Id = null,
    string PermissionType = null,
    string Project = null,
    ManagedKafkaAclBindingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.aclId">AclId</a></code> | <code>string</code> | The ID of the acl this entry belongs to, which is the final component of the acl's name. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.cluster">Cluster</a></code> | <code>string</code> | The cluster name. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.location">Location</a></code> | <code>string</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.operation">Operation</a></code> | <code>string</code> | The operation type. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.principal">Principal</a></code> | <code>string</code> | The principal. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.host">Host</a></code> | <code>string</code> | The host. Must be set to "*" for Managed Service for Apache Kafka. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#id ManagedKafkaAclBinding#id}. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.permissionType">PermissionType</a></code> | <code>string</code> | The permission type. Accepted values are (case insensitive): ALLOW, DENY. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#project ManagedKafkaAclBinding#project}. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AclId`<sup>Required</sup> <a name="AclId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.aclId"></a>

```csharp
public string AclId { get; set; }
```

- *Type:* string

The ID of the acl this entry belongs to, which is the final component of the acl's name.

The structure of 'aclId' defines the Resource
Pattern (resource_type, resource_name, pattern_type) of the acl.
'aclId' is structured like one of the following:
For acls on the cluster: 'cluster'
For acls on a single resource within the cluster: 'topic/{resource_name}' 'consumerGroup/{resource_name}' 'transactionalId/{resource_name}'
For acls on all resources that match a prefix: 'topicPrefixed/{resource_name}' 'consumerGroupPrefixed/{resource_name}' 'transactionalIdPrefixed/{resource_name}'
For acls on all resources of a given type (i.e. the wildcard literal '*''): 'allTopics' (represents 'topic/*') 'allConsumerGroups' (represents 'consumerGroup/*') 'allTransactionalIds' (represents 'transactionalId/*').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#acl_id ManagedKafkaAclBinding#acl_id}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#cluster ManagedKafkaAclBinding#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#location ManagedKafkaAclBinding#location}

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

The operation type.

Allowed values are (case insensitive): ALL, READ,
WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS,
ALTER_CONFIGS, and IDEMPOTENT_WRITE. See
https://kafka.apache.org/documentation/#operations_resources_and_protocols
for valid combinations of resource_type and operation for different
Kafka API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#operation ManagedKafkaAclBinding#operation}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

The principal.

Specified as a Google Cloud account, with the Kafka
StandardAuthorizer prefix "User:". For example:
"User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be
the wildcard "User:*" to refer to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#principal ManagedKafkaAclBinding#principal}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#deletion_policy ManagedKafkaAclBinding#deletion_policy}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The host. Must be set to "*" for Managed Service for Apache Kafka.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#host ManagedKafkaAclBinding#host}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#id ManagedKafkaAclBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PermissionType`<sup>Optional</sup> <a name="PermissionType" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.permissionType"></a>

```csharp
public string PermissionType { get; set; }
```

- *Type:* string

The permission type. Accepted values are (case insensitive): ALLOW, DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#permission_type ManagedKafkaAclBinding#permission_type}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#project ManagedKafkaAclBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.timeouts"></a>

```csharp
public ManagedKafkaAclBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#timeouts ManagedKafkaAclBinding#timeouts}

---

### ManagedKafkaAclBindingTimeouts <a name="ManagedKafkaAclBindingTimeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaAclBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#create ManagedKafkaAclBinding#create}. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#delete ManagedKafkaAclBinding#delete}. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#update ManagedKafkaAclBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#create ManagedKafkaAclBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#delete ManagedKafkaAclBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#update ManagedKafkaAclBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaAclBindingTimeoutsOutputReference <a name="ManagedKafkaAclBindingTimeoutsOutputReference" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaAclBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedKafkaAclBindingTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a>

---



