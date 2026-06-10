# `projectOrganizationPolicy` Submodule <a name="`projectOrganizationPolicy` Submodule" id="@cdktn/provider-google.projectOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectOrganizationPolicy <a name="ProjectOrganizationPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy google_project_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

new projectOrganizationPolicy.ProjectOrganizationPolicy(scope: Construct, id: string, config: ProjectOrganizationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig">ProjectOrganizationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig">ProjectOrganizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putBooleanPolicy">putBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putListPolicy">putListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putRestorePolicy">putRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetBooleanPolicy">resetBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetListPolicy">resetListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetRestorePolicy">resetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBooleanPolicy` <a name="putBooleanPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putBooleanPolicy"></a>

```typescript
public putBooleanPolicy(value: ProjectOrganizationPolicyBooleanPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putBooleanPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a>

---

##### `putListPolicy` <a name="putListPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putListPolicy"></a>

```typescript
public putListPolicy(value: ProjectOrganizationPolicyListPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putListPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a>

---

##### `putRestorePolicy` <a name="putRestorePolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putRestorePolicy"></a>

```typescript
public putRestorePolicy(value: ProjectOrganizationPolicyRestorePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: ProjectOrganizationPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a>

---

##### `resetBooleanPolicy` <a name="resetBooleanPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetBooleanPolicy"></a>

```typescript
public resetBooleanPolicy(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetListPolicy` <a name="resetListPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetListPolicy"></a>

```typescript
public resetListPolicy(): void
```

##### `resetRestorePolicy` <a name="resetRestorePolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetRestorePolicy"></a>

```typescript
public resetRestorePolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ProjectOrganizationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isConstruct"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

projectOrganizationPolicy.ProjectOrganizationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformElement"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformResource"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.generateConfigForImport"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

projectOrganizationPolicy.ProjectOrganizationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ProjectOrganizationPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectOrganizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ProjectOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference">ProjectOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference">ProjectOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference">ProjectOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference">ProjectOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.booleanPolicyInput">booleanPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.constraintInput">constraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.listPolicyInput">listPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.restorePolicyInput">restorePolicyInput</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `booleanPolicy`<sup>Required</sup> <a name="booleanPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.booleanPolicy"></a>

```typescript
public readonly booleanPolicy: ProjectOrganizationPolicyBooleanPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference">ProjectOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `listPolicy`<sup>Required</sup> <a name="listPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.listPolicy"></a>

```typescript
public readonly listPolicy: ProjectOrganizationPolicyListPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference">ProjectOrganizationPolicyListPolicyOutputReference</a>

---

##### `restorePolicy`<sup>Required</sup> <a name="restorePolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.restorePolicy"></a>

```typescript
public readonly restorePolicy: ProjectOrganizationPolicyRestorePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference">ProjectOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: ProjectOrganizationPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference">ProjectOrganizationPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `booleanPolicyInput`<sup>Optional</sup> <a name="booleanPolicyInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.booleanPolicyInput"></a>

```typescript
public readonly booleanPolicyInput: ProjectOrganizationPolicyBooleanPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a>

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.constraintInput"></a>

```typescript
public readonly constraintInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listPolicyInput`<sup>Optional</sup> <a name="listPolicyInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.listPolicyInput"></a>

```typescript
public readonly listPolicyInput: ProjectOrganizationPolicyListPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `restorePolicyInput`<sup>Optional</sup> <a name="restorePolicyInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.restorePolicyInput"></a>

```typescript
public readonly restorePolicyInput: ProjectOrganizationPolicyRestorePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ProjectOrganizationPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectOrganizationPolicyBooleanPolicy <a name="ProjectOrganizationPolicyBooleanPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy.Initializer"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

const projectOrganizationPolicyBooleanPolicy: projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy.property.enforced">enforced</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy.property.enforced"></a>

```typescript
public readonly enforced: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#enforced ProjectOrganizationPolicy#enforced}

---

### ProjectOrganizationPolicyConfig <a name="ProjectOrganizationPolicyConfig" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.Initializer"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

const projectOrganizationPolicyConfig: projectOrganizationPolicy.ProjectOrganizationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.constraint">constraint</a></code> | <code>string</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.project">project</a></code> | <code>string</code> | The project ID. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.booleanPolicy">booleanPolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#id ProjectOrganizationPolicy#id}. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.listPolicy">listPolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.restorePolicy">restorePolicy</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.version">version</a></code> | <code>number</code> | Version of the Policy. Default version is 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#constraint ProjectOrganizationPolicy#constraint}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#project ProjectOrganizationPolicy#project}

---

##### `booleanPolicy`<sup>Optional</sup> <a name="booleanPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.booleanPolicy"></a>

```typescript
public readonly booleanPolicy: ProjectOrganizationPolicyBooleanPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#boolean_policy ProjectOrganizationPolicy#boolean_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#deletion_policy ProjectOrganizationPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#id ProjectOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listPolicy`<sup>Optional</sup> <a name="listPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.listPolicy"></a>

```typescript
public readonly listPolicy: ProjectOrganizationPolicyListPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#list_policy ProjectOrganizationPolicy#list_policy}

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.restorePolicy"></a>

```typescript
public readonly restorePolicy: ProjectOrganizationPolicyRestorePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#restore_policy ProjectOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ProjectOrganizationPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#timeouts ProjectOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#version ProjectOrganizationPolicy#version}

---

### ProjectOrganizationPolicyListPolicy <a name="ProjectOrganizationPolicyListPolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.Initializer"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

const projectOrganizationPolicyListPolicy: projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.allow">allow</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.deny">deny</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.inheritFromParent">inheritFromParent</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.suggestedValue">suggestedValue</a></code> | <code>string</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.allow"></a>

```typescript
public readonly allow: ProjectOrganizationPolicyListPolicyAllow;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#allow ProjectOrganizationPolicy#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.deny"></a>

```typescript
public readonly deny: ProjectOrganizationPolicyListPolicyDeny;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#deny ProjectOrganizationPolicy#deny}

---

##### `inheritFromParent`<sup>Optional</sup> <a name="inheritFromParent" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#inherit_from_parent ProjectOrganizationPolicy#inherit_from_parent}

---

##### `suggestedValue`<sup>Optional</sup> <a name="suggestedValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.suggestedValue"></a>

```typescript
public readonly suggestedValue: string;
```

- *Type:* string

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#suggested_value ProjectOrganizationPolicy#suggested_value}

---

### ProjectOrganizationPolicyListPolicyAllow <a name="ProjectOrganizationPolicyListPolicyAllow" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.Initializer"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

const projectOrganizationPolicyListPolicyAllow: projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.property.all">all</a></code> | <code>boolean \| cdktn.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.property.values">values</a></code> | <code>string[]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#all ProjectOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#values ProjectOrganizationPolicy#values}

---

### ProjectOrganizationPolicyListPolicyDeny <a name="ProjectOrganizationPolicyListPolicyDeny" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.Initializer"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

const projectOrganizationPolicyListPolicyDeny: projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.property.all">all</a></code> | <code>boolean \| cdktn.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.property.values">values</a></code> | <code>string[]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#all ProjectOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#values ProjectOrganizationPolicy#values}

---

### ProjectOrganizationPolicyRestorePolicy <a name="ProjectOrganizationPolicyRestorePolicy" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy.Initializer"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

const projectOrganizationPolicyRestorePolicy: projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy.property.default">default</a></code> | <code>boolean \| cdktn.IResolvable</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#default ProjectOrganizationPolicy#default}

---

### ProjectOrganizationPolicyTimeouts <a name="ProjectOrganizationPolicyTimeouts" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.Initializer"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

const projectOrganizationPolicyTimeouts: projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#create ProjectOrganizationPolicy#create}. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#delete ProjectOrganizationPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#read ProjectOrganizationPolicy#read}. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#update ProjectOrganizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#create ProjectOrganizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#delete ProjectOrganizationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#read ProjectOrganizationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/project_organization_policy#update ProjectOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectOrganizationPolicyBooleanPolicyOutputReference <a name="ProjectOrganizationPolicyBooleanPolicyOutputReference" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

new projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">enforcedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforced">enforced</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforcedInput`<sup>Optional</sup> <a name="enforcedInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```typescript
public readonly enforcedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```typescript
public readonly enforced: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectOrganizationPolicyBooleanPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a>

---


### ProjectOrganizationPolicyListPolicyAllowOutputReference <a name="ProjectOrganizationPolicyListPolicyAllowOutputReference" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

new projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.allInput">allInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.all">all</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```typescript
public readonly allInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectOrganizationPolicyListPolicyAllow;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a>

---


### ProjectOrganizationPolicyListPolicyDenyOutputReference <a name="ProjectOrganizationPolicyListPolicyDenyOutputReference" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

new projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.allInput">allInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.all">all</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```typescript
public readonly allInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectOrganizationPolicyListPolicyDeny;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a>

---


### ProjectOrganizationPolicyListPolicyOutputReference <a name="ProjectOrganizationPolicyListPolicyOutputReference" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

new projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putDeny">putDeny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetDeny">resetDeny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">resetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">resetSuggestedValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllow` <a name="putAllow" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```typescript
public putAllow(value: ProjectOrganizationPolicyListPolicyAllow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a>

---

##### `putDeny` <a name="putDeny" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```typescript
public putDeny(value: ProjectOrganizationPolicyListPolicyDeny): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```typescript
public resetAllow(): void
```

##### `resetDeny` <a name="resetDeny" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```typescript
public resetDeny(): void
```

##### `resetInheritFromParent` <a name="resetInheritFromParent" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```typescript
public resetInheritFromParent(): void
```

##### `resetSuggestedValue` <a name="resetSuggestedValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```typescript
public resetSuggestedValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference">ProjectOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference">ProjectOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.allowInput">allowInput</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.denyInput">denyInput</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">inheritFromParentInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">suggestedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValue">suggestedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```typescript
public readonly allow: ProjectOrganizationPolicyListPolicyAllowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference">ProjectOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```typescript
public readonly deny: ProjectOrganizationPolicyListPolicyDenyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference">ProjectOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```typescript
public readonly allowInput: ProjectOrganizationPolicyListPolicyAllow;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a>

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```typescript
public readonly denyInput: ProjectOrganizationPolicyListPolicyDeny;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a>

---

##### `inheritFromParentInput`<sup>Optional</sup> <a name="inheritFromParentInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```typescript
public readonly inheritFromParentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `suggestedValueInput`<sup>Optional</sup> <a name="suggestedValueInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```typescript
public readonly suggestedValueInput: string;
```

- *Type:* string

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `suggestedValue`<sup>Required</sup> <a name="suggestedValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```typescript
public readonly suggestedValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectOrganizationPolicyListPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a>

---


### ProjectOrganizationPolicyRestorePolicyOutputReference <a name="ProjectOrganizationPolicyRestorePolicyOutputReference" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

new projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.default">default</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectOrganizationPolicyRestorePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a>

---


### ProjectOrganizationPolicyTimeoutsOutputReference <a name="ProjectOrganizationPolicyTimeoutsOutputReference" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { projectOrganizationPolicy } from '@cdktn/provider-google'

new projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectOrganizationPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a>

---



