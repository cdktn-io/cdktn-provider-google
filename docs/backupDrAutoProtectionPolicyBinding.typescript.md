# `backupDrAutoProtectionPolicyBinding` Submodule <a name="`backupDrAutoProtectionPolicyBinding` Submodule" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrAutoProtectionPolicyBinding <a name="BackupDrAutoProtectionPolicyBinding" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding google_backup_dr_auto_protection_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicyBinding } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding(scope: Construct, id: string, config: BackupDrAutoProtectionPolicyBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig">BackupDrAutoProtectionPolicyBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig">BackupDrAutoProtectionPolicyBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetWaitForDelete">resetWaitForDelete</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: BackupDrAutoProtectionPolicyBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWaitForDelete` <a name="resetWaitForDelete" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.resetWaitForDelete"></a>

```typescript
public resetWaitForDelete(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupDrAutoProtectionPolicyBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isConstruct"></a>

```typescript
import { backupDrAutoProtectionPolicyBinding } from '@cdktn/provider-google'

backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isTerraformElement"></a>

```typescript
import { backupDrAutoProtectionPolicyBinding } from '@cdktn/provider-google'

backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isTerraformResource"></a>

```typescript
import { backupDrAutoProtectionPolicyBinding } from '@cdktn/provider-google'

backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.generateConfigForImport"></a>

```typescript
import { backupDrAutoProtectionPolicyBinding } from '@cdktn/provider-google'

backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BackupDrAutoProtectionPolicyBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupDrAutoProtectionPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupDrAutoProtectionPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupDrAutoProtectionPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.bindingEvaluationSummary">bindingEvaluationSummary</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList">BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference">BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingIdInput">autoProtectionPolicyBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyIdInput">autoProtectionPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.waitForDeleteInput">waitForDeleteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingId">autoProtectionPolicyBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.waitForDelete">waitForDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bindingEvaluationSummary`<sup>Required</sup> <a name="bindingEvaluationSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.bindingEvaluationSummary"></a>

```typescript
public readonly bindingEvaluationSummary: BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList">BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.timeouts"></a>

```typescript
public readonly timeouts: BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference">BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `autoProtectionPolicyBindingIdInput`<sup>Optional</sup> <a name="autoProtectionPolicyBindingIdInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingIdInput"></a>

```typescript
public readonly autoProtectionPolicyBindingIdInput: string;
```

- *Type:* string

---

##### `autoProtectionPolicyIdInput`<sup>Optional</sup> <a name="autoProtectionPolicyIdInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyIdInput"></a>

```typescript
public readonly autoProtectionPolicyIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BackupDrAutoProtectionPolicyBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a>

---

##### `waitForDeleteInput`<sup>Optional</sup> <a name="waitForDeleteInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.waitForDeleteInput"></a>

```typescript
public readonly waitForDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoProtectionPolicyBindingId`<sup>Required</sup> <a name="autoProtectionPolicyBindingId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingId"></a>

```typescript
public readonly autoProtectionPolicyBindingId: string;
```

- *Type:* string

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyId"></a>

```typescript
public readonly autoProtectionPolicyId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `waitForDelete`<sup>Required</sup> <a name="waitForDelete" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.waitForDelete"></a>

```typescript
public readonly waitForDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary <a name="BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicyBinding } from '@cdktn/provider-google'

const backupDrAutoProtectionPolicyBindingBindingEvaluationSummary: backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary = { ... }
```


### BackupDrAutoProtectionPolicyBindingConfig <a name="BackupDrAutoProtectionPolicyBindingConfig" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicyBinding } from '@cdktn/provider-google'

const backupDrAutoProtectionPolicyBindingConfig: backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyBindingId">autoProtectionPolicyBindingId</a></code> | <code>string</code> | The ID of the binding. This becomes the final component of the binding's resource name. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>string</code> | The ID of the auto protection policy to bind. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.location">location</a></code> | <code>string</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.scope">scope</a></code> | <code>string</code> | The container that the policy is applied to, in the format 'projects/{project}'. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#id BackupDrAutoProtectionPolicyBinding#id}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#project BackupDrAutoProtectionPolicyBinding#project}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.waitForDelete">waitForDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Terraform should wait for the binding and all associated background resource unprotection operations to be completely deleted before returning. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoProtectionPolicyBindingId`<sup>Required</sup> <a name="autoProtectionPolicyBindingId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyBindingId"></a>

```typescript
public readonly autoProtectionPolicyBindingId: string;
```

- *Type:* string

The ID of the binding. This becomes the final component of the binding's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#auto_protection_policy_binding_id BackupDrAutoProtectionPolicyBinding#auto_protection_policy_binding_id}

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyId"></a>

```typescript
public readonly autoProtectionPolicyId: string;
```

- *Type:* string

The ID of the auto protection policy to bind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#auto_protection_policy_id BackupDrAutoProtectionPolicyBinding#auto_protection_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#location BackupDrAutoProtectionPolicyBinding#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The container that the policy is applied to, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#scope BackupDrAutoProtectionPolicyBinding#scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#deletion_policy BackupDrAutoProtectionPolicyBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#id BackupDrAutoProtectionPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#project BackupDrAutoProtectionPolicyBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BackupDrAutoProtectionPolicyBindingTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#timeouts BackupDrAutoProtectionPolicyBinding#timeouts}

---

##### `waitForDelete`<sup>Optional</sup> <a name="waitForDelete" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingConfig.property.waitForDelete"></a>

```typescript
public readonly waitForDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Terraform should wait for the binding and all associated background resource unprotection operations to be completely deleted before returning.

Setting
'wait_for_delete = true' will block the Terraform script/execution until all resources
are unprotected and the binding is fully removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#wait_for_delete BackupDrAutoProtectionPolicyBinding#wait_for_delete}

---

### BackupDrAutoProtectionPolicyBindingTimeouts <a name="BackupDrAutoProtectionPolicyBindingTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicyBinding } from '@cdktn/provider-google'

const backupDrAutoProtectionPolicyBindingTimeouts: backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#create BackupDrAutoProtectionPolicyBinding#create}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#delete BackupDrAutoProtectionPolicyBinding#delete}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#update BackupDrAutoProtectionPolicyBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#create BackupDrAutoProtectionPolicyBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#delete BackupDrAutoProtectionPolicyBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#update BackupDrAutoProtectionPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList <a name="BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicyBinding } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get"></a>

```typescript
public get(index: number): BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference <a name="BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicyBinding } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.failedResourceCount">failedResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.matchingResourceCount">matchingResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.protectedResourceCount">protectedResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary">BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failedResourceCount`<sup>Required</sup> <a name="failedResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.failedResourceCount"></a>

```typescript
public readonly failedResourceCount: string;
```

- *Type:* string

---

##### `matchingResourceCount`<sup>Required</sup> <a name="matchingResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.matchingResourceCount"></a>

```typescript
public readonly matchingResourceCount: string;
```

- *Type:* string

---

##### `protectedResourceCount`<sup>Required</sup> <a name="protectedResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.protectedResourceCount"></a>

```typescript
public readonly protectedResourceCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary">BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary</a>

---


### BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference <a name="BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicyBinding } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupDrAutoProtectionPolicyBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicyBinding.BackupDrAutoProtectionPolicyBindingTimeouts">BackupDrAutoProtectionPolicyBindingTimeouts</a>

---



