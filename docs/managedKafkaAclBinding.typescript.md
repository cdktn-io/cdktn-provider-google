# `managedKafkaAclBinding` Submodule <a name="`managedKafkaAclBinding` Submodule" id="@cdktn/provider-google.managedKafkaAclBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaAclBinding <a name="ManagedKafkaAclBinding" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding google_managed_kafka_acl_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer"></a>

```typescript
import { managedKafkaAclBinding } from '@cdktn/provider-google'

new managedKafkaAclBinding.ManagedKafkaAclBinding(scope: Construct, id: string, config: ManagedKafkaAclBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig">ManagedKafkaAclBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig">ManagedKafkaAclBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetPermissionType">resetPermissionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: ManagedKafkaAclBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPermissionType` <a name="resetPermissionType" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetPermissionType"></a>

```typescript
public resetPermissionType(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ManagedKafkaAclBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isConstruct"></a>

```typescript
import { managedKafkaAclBinding } from '@cdktn/provider-google'

managedKafkaAclBinding.ManagedKafkaAclBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformElement"></a>

```typescript
import { managedKafkaAclBinding } from '@cdktn/provider-google'

managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformResource"></a>

```typescript
import { managedKafkaAclBinding } from '@cdktn/provider-google'

managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport"></a>

```typescript
import { managedKafkaAclBinding } from '@cdktn/provider-google'

managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ManagedKafkaAclBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedKafkaAclBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedKafkaAclBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ManagedKafkaAclBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference">ManagedKafkaAclBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.aclIdInput">aclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.permissionTypeInput">permissionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.aclId">aclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.permissionType">permissionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedKafkaAclBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference">ManagedKafkaAclBindingTimeoutsOutputReference</a>

---

##### `aclIdInput`<sup>Optional</sup> <a name="aclIdInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.aclIdInput"></a>

```typescript
public readonly aclIdInput: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `permissionTypeInput`<sup>Optional</sup> <a name="permissionTypeInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.permissionTypeInput"></a>

```typescript
public readonly permissionTypeInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ManagedKafkaAclBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a>

---

##### `aclId`<sup>Required</sup> <a name="aclId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.aclId"></a>

```typescript
public readonly aclId: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.permissionType"></a>

```typescript
public readonly permissionType: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaAclBindingConfig <a name="ManagedKafkaAclBindingConfig" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.Initializer"></a>

```typescript
import { managedKafkaAclBinding } from '@cdktn/provider-google'

const managedKafkaAclBindingConfig: managedKafkaAclBinding.ManagedKafkaAclBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.aclId">aclId</a></code> | <code>string</code> | The ID of the acl this entry belongs to, which is the final component of the acl's name. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.cluster">cluster</a></code> | <code>string</code> | The cluster name. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.location">location</a></code> | <code>string</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.operation">operation</a></code> | <code>string</code> | The operation type. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.principal">principal</a></code> | <code>string</code> | The principal. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.host">host</a></code> | <code>string</code> | The host. Must be set to "*" for Managed Service for Apache Kafka. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#id ManagedKafkaAclBinding#id}. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.permissionType">permissionType</a></code> | <code>string</code> | The permission type. Accepted values are (case insensitive): ALLOW, DENY. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#project ManagedKafkaAclBinding#project}. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aclId`<sup>Required</sup> <a name="aclId" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.aclId"></a>

```typescript
public readonly aclId: string;
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

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#cluster ManagedKafkaAclBinding#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#location ManagedKafkaAclBinding#location}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.operation"></a>

```typescript
public readonly operation: string;
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

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

The principal.

Specified as a Google Cloud account, with the Kafka
StandardAuthorizer prefix "User:". For example:
"User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be
the wildcard "User:*" to refer to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#principal ManagedKafkaAclBinding#principal}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
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

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The host. Must be set to "*" for Managed Service for Apache Kafka.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#host ManagedKafkaAclBinding#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#id ManagedKafkaAclBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissionType`<sup>Optional</sup> <a name="permissionType" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.permissionType"></a>

```typescript
public readonly permissionType: string;
```

- *Type:* string

The permission type. Accepted values are (case insensitive): ALLOW, DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#permission_type ManagedKafkaAclBinding#permission_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#project ManagedKafkaAclBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedKafkaAclBindingTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#timeouts ManagedKafkaAclBinding#timeouts}

---

### ManagedKafkaAclBindingTimeouts <a name="ManagedKafkaAclBindingTimeouts" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.Initializer"></a>

```typescript
import { managedKafkaAclBinding } from '@cdktn/provider-google'

const managedKafkaAclBindingTimeouts: managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#create ManagedKafkaAclBinding#create}. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#delete ManagedKafkaAclBinding#delete}. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#update ManagedKafkaAclBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#create ManagedKafkaAclBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#delete ManagedKafkaAclBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/managed_kafka_acl_binding#update ManagedKafkaAclBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaAclBindingTimeoutsOutputReference <a name="ManagedKafkaAclBindingTimeoutsOutputReference" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { managedKafkaAclBinding } from '@cdktn/provider-google'

new managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedKafkaAclBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.managedKafkaAclBinding.ManagedKafkaAclBindingTimeouts">ManagedKafkaAclBindingTimeouts</a>

---



