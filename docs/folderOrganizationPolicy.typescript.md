# `folderOrganizationPolicy` Submodule <a name="`folderOrganizationPolicy` Submodule" id="@cdktn/provider-google.folderOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FolderOrganizationPolicy <a name="FolderOrganizationPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy google_folder_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

new folderOrganizationPolicy.FolderOrganizationPolicy(scope: Construct, id: string, config: FolderOrganizationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig">FolderOrganizationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig">FolderOrganizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putBooleanPolicy">putBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putListPolicy">putListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putRestorePolicy">putRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetBooleanPolicy">resetBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetListPolicy">resetListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetRestorePolicy">resetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBooleanPolicy` <a name="putBooleanPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putBooleanPolicy"></a>

```typescript
public putBooleanPolicy(value: FolderOrganizationPolicyBooleanPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putBooleanPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a>

---

##### `putListPolicy` <a name="putListPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putListPolicy"></a>

```typescript
public putListPolicy(value: FolderOrganizationPolicyListPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putListPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a>

---

##### `putRestorePolicy` <a name="putRestorePolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putRestorePolicy"></a>

```typescript
public putRestorePolicy(value: FolderOrganizationPolicyRestorePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: FolderOrganizationPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a>

---

##### `resetBooleanPolicy` <a name="resetBooleanPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetBooleanPolicy"></a>

```typescript
public resetBooleanPolicy(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetListPolicy` <a name="resetListPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetListPolicy"></a>

```typescript
public resetListPolicy(): void
```

##### `resetRestorePolicy` <a name="resetRestorePolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetRestorePolicy"></a>

```typescript
public resetRestorePolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FolderOrganizationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isConstruct"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

folderOrganizationPolicy.FolderOrganizationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformElement"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformResource"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FolderOrganizationPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FolderOrganizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FolderOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FolderOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference">FolderOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference">FolderOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference">FolderOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference">FolderOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.booleanPolicyInput">booleanPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.constraintInput">constraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.listPolicyInput">listPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.restorePolicyInput">restorePolicyInput</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `booleanPolicy`<sup>Required</sup> <a name="booleanPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.booleanPolicy"></a>

```typescript
public readonly booleanPolicy: FolderOrganizationPolicyBooleanPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference">FolderOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `listPolicy`<sup>Required</sup> <a name="listPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.listPolicy"></a>

```typescript
public readonly listPolicy: FolderOrganizationPolicyListPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference">FolderOrganizationPolicyListPolicyOutputReference</a>

---

##### `restorePolicy`<sup>Required</sup> <a name="restorePolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.restorePolicy"></a>

```typescript
public readonly restorePolicy: FolderOrganizationPolicyRestorePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference">FolderOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: FolderOrganizationPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference">FolderOrganizationPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `booleanPolicyInput`<sup>Optional</sup> <a name="booleanPolicyInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.booleanPolicyInput"></a>

```typescript
public readonly booleanPolicyInput: FolderOrganizationPolicyBooleanPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a>

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.constraintInput"></a>

```typescript
public readonly constraintInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listPolicyInput`<sup>Optional</sup> <a name="listPolicyInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.listPolicyInput"></a>

```typescript
public readonly listPolicyInput: FolderOrganizationPolicyListPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a>

---

##### `restorePolicyInput`<sup>Optional</sup> <a name="restorePolicyInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.restorePolicyInput"></a>

```typescript
public readonly restorePolicyInput: FolderOrganizationPolicyRestorePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FolderOrganizationPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FolderOrganizationPolicyBooleanPolicy <a name="FolderOrganizationPolicyBooleanPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy.Initializer"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

const folderOrganizationPolicyBooleanPolicy: folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy.property.enforced">enforced</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy.property.enforced"></a>

```typescript
public readonly enforced: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#enforced FolderOrganizationPolicy#enforced}

---

### FolderOrganizationPolicyConfig <a name="FolderOrganizationPolicyConfig" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.Initializer"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

const folderOrganizationPolicyConfig: folderOrganizationPolicy.FolderOrganizationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.constraint">constraint</a></code> | <code>string</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.folder">folder</a></code> | <code>string</code> | The resource name of the folder to set the policy for. Its format is folders/{folder_id}. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#id FolderOrganizationPolicy#id}. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.version">version</a></code> | <code>number</code> | Version of the Policy. Default version is 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#constraint FolderOrganizationPolicy#constraint}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The resource name of the folder to set the policy for. Its format is folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#folder FolderOrganizationPolicy#folder}

---

##### `booleanPolicy`<sup>Optional</sup> <a name="booleanPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.booleanPolicy"></a>

```typescript
public readonly booleanPolicy: FolderOrganizationPolicyBooleanPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#boolean_policy FolderOrganizationPolicy#boolean_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#deletion_policy FolderOrganizationPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#id FolderOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listPolicy`<sup>Optional</sup> <a name="listPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.listPolicy"></a>

```typescript
public readonly listPolicy: FolderOrganizationPolicyListPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#list_policy FolderOrganizationPolicy#list_policy}

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.restorePolicy"></a>

```typescript
public readonly restorePolicy: FolderOrganizationPolicyRestorePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#restore_policy FolderOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FolderOrganizationPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#timeouts FolderOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#version FolderOrganizationPolicy#version}

---

### FolderOrganizationPolicyListPolicy <a name="FolderOrganizationPolicyListPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.Initializer"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

const folderOrganizationPolicyListPolicy: folderOrganizationPolicy.FolderOrganizationPolicyListPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.allow">allow</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.deny">deny</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.inheritFromParent">inheritFromParent</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.suggestedValue">suggestedValue</a></code> | <code>string</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.allow"></a>

```typescript
public readonly allow: FolderOrganizationPolicyListPolicyAllow;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#allow FolderOrganizationPolicy#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.deny"></a>

```typescript
public readonly deny: FolderOrganizationPolicyListPolicyDeny;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#deny FolderOrganizationPolicy#deny}

---

##### `inheritFromParent`<sup>Optional</sup> <a name="inheritFromParent" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#inherit_from_parent FolderOrganizationPolicy#inherit_from_parent}

---

##### `suggestedValue`<sup>Optional</sup> <a name="suggestedValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.suggestedValue"></a>

```typescript
public readonly suggestedValue: string;
```

- *Type:* string

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#suggested_value FolderOrganizationPolicy#suggested_value}

---

### FolderOrganizationPolicyListPolicyAllow <a name="FolderOrganizationPolicyListPolicyAllow" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.Initializer"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

const folderOrganizationPolicyListPolicyAllow: folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.property.all">all</a></code> | <code>boolean \| cdktn.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.property.values">values</a></code> | <code>string[]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#all FolderOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#values FolderOrganizationPolicy#values}

---

### FolderOrganizationPolicyListPolicyDeny <a name="FolderOrganizationPolicyListPolicyDeny" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.Initializer"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

const folderOrganizationPolicyListPolicyDeny: folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.property.all">all</a></code> | <code>boolean \| cdktn.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.property.values">values</a></code> | <code>string[]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#all FolderOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#values FolderOrganizationPolicy#values}

---

### FolderOrganizationPolicyRestorePolicy <a name="FolderOrganizationPolicyRestorePolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy.Initializer"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

const folderOrganizationPolicyRestorePolicy: folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy.property.default">default</a></code> | <code>boolean \| cdktn.IResolvable</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#default FolderOrganizationPolicy#default}

---

### FolderOrganizationPolicyTimeouts <a name="FolderOrganizationPolicyTimeouts" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.Initializer"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

const folderOrganizationPolicyTimeouts: folderOrganizationPolicy.FolderOrganizationPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#create FolderOrganizationPolicy#create}. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#delete FolderOrganizationPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#read FolderOrganizationPolicy#read}. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#update FolderOrganizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#create FolderOrganizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#delete FolderOrganizationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#read FolderOrganizationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/folder_organization_policy#update FolderOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FolderOrganizationPolicyBooleanPolicyOutputReference <a name="FolderOrganizationPolicyBooleanPolicyOutputReference" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

new folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">enforcedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced">enforced</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforcedInput`<sup>Optional</sup> <a name="enforcedInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```typescript
public readonly enforcedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```typescript
public readonly enforced: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FolderOrganizationPolicyBooleanPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a>

---


### FolderOrganizationPolicyListPolicyAllowOutputReference <a name="FolderOrganizationPolicyListPolicyAllowOutputReference" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

new folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.allInput">allInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.all">all</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```typescript
public readonly allInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FolderOrganizationPolicyListPolicyAllow;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a>

---


### FolderOrganizationPolicyListPolicyDenyOutputReference <a name="FolderOrganizationPolicyListPolicyDenyOutputReference" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

new folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.allInput">allInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.all">all</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```typescript
public readonly allInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FolderOrganizationPolicyListPolicyDeny;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a>

---


### FolderOrganizationPolicyListPolicyOutputReference <a name="FolderOrganizationPolicyListPolicyOutputReference" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

new folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putDeny">putDeny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetDeny">resetDeny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">resetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">resetSuggestedValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllow` <a name="putAllow" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```typescript
public putAllow(value: FolderOrganizationPolicyListPolicyAllow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a>

---

##### `putDeny` <a name="putDeny" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```typescript
public putDeny(value: FolderOrganizationPolicyListPolicyDeny): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```typescript
public resetAllow(): void
```

##### `resetDeny` <a name="resetDeny" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```typescript
public resetDeny(): void
```

##### `resetInheritFromParent` <a name="resetInheritFromParent" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```typescript
public resetInheritFromParent(): void
```

##### `resetSuggestedValue` <a name="resetSuggestedValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```typescript
public resetSuggestedValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference">FolderOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference">FolderOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.allowInput">allowInput</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.denyInput">denyInput</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">inheritFromParentInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">suggestedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue">suggestedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```typescript
public readonly allow: FolderOrganizationPolicyListPolicyAllowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference">FolderOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```typescript
public readonly deny: FolderOrganizationPolicyListPolicyDenyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference">FolderOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```typescript
public readonly allowInput: FolderOrganizationPolicyListPolicyAllow;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a>

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```typescript
public readonly denyInput: FolderOrganizationPolicyListPolicyDeny;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a>

---

##### `inheritFromParentInput`<sup>Optional</sup> <a name="inheritFromParentInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```typescript
public readonly inheritFromParentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `suggestedValueInput`<sup>Optional</sup> <a name="suggestedValueInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```typescript
public readonly suggestedValueInput: string;
```

- *Type:* string

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `suggestedValue`<sup>Required</sup> <a name="suggestedValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```typescript
public readonly suggestedValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FolderOrganizationPolicyListPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a>

---


### FolderOrganizationPolicyRestorePolicyOutputReference <a name="FolderOrganizationPolicyRestorePolicyOutputReference" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

new folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.default">default</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FolderOrganizationPolicyRestorePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a>

---


### FolderOrganizationPolicyTimeoutsOutputReference <a name="FolderOrganizationPolicyTimeoutsOutputReference" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { folderOrganizationPolicy } from '@cdktn/provider-google'

new folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FolderOrganizationPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a>

---



