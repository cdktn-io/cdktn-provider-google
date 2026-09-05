# `accessContextManagerServicePerimeterDryRunResource` Submodule <a name="`accessContextManagerServicePerimeterDryRunResource` Submodule" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerServicePerimeterDryRunResource <a name="AccessContextManagerServicePerimeterDryRunResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/access_context_manager_service_perimeter_dry_run_resource google_access_context_manager_service_perimeter_dry_run_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer"></a>

```typescript
import { accessContextManagerServicePerimeterDryRunResource } from '@cdktn/provider-google'

new accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource(scope: Construct, id: string, config: AccessContextManagerServicePerimeterDryRunResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig">AccessContextManagerServicePerimeterDryRunResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig">AccessContextManagerServicePerimeterDryRunResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.putTimeouts"></a>

```typescript
public putTimeouts(value: AccessContextManagerServicePerimeterDryRunResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AccessContextManagerServicePerimeterDryRunResource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isConstruct"></a>

```typescript
import { accessContextManagerServicePerimeterDryRunResource } from '@cdktn/provider-google'

accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isTerraformElement"></a>

```typescript
import { accessContextManagerServicePerimeterDryRunResource } from '@cdktn/provider-google'

accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isTerraformResource"></a>

```typescript
import { accessContextManagerServicePerimeterDryRunResource } from '@cdktn/provider-google'

accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.generateConfigForImport"></a>

```typescript
import { accessContextManagerServicePerimeterDryRunResource } from '@cdktn/provider-google'

accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AccessContextManagerServicePerimeterDryRunResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessContextManagerServicePerimeterDryRunResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessContextManagerServicePerimeterDryRunResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/access_context_manager_service_perimeter_dry_run_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AccessContextManagerServicePerimeterDryRunResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.accessPolicyId">accessPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference">AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.perimeterNameInput">perimeterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.perimeterName">perimeterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.resource">resource</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.accessPolicyId"></a>

```typescript
public readonly accessPolicyId: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.timeouts"></a>

```typescript
public readonly timeouts: AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference">AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `perimeterNameInput`<sup>Optional</sup> <a name="perimeterNameInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.perimeterNameInput"></a>

```typescript
public readonly perimeterNameInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AccessContextManagerServicePerimeterDryRunResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `perimeterName`<sup>Required</sup> <a name="perimeterName" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.perimeterName"></a>

```typescript
public readonly perimeterName: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerServicePerimeterDryRunResourceConfig <a name="AccessContextManagerServicePerimeterDryRunResourceConfig" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.Initializer"></a>

```typescript
import { accessContextManagerServicePerimeterDryRunResource } from '@cdktn/provider-google'

const accessContextManagerServicePerimeterDryRunResourceConfig: accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.perimeterName">perimeterName</a></code> | <code>string</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.resource">resource</a></code> | <code>string</code> | A GCP resource that is inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/access_context_manager_service_perimeter_dry_run_resource#id AccessContextManagerServicePerimeterDryRunResource#id}. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `perimeterName`<sup>Required</sup> <a name="perimeterName" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.perimeterName"></a>

```typescript
public readonly perimeterName: string;
```

- *Type:* string

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/access_context_manager_service_perimeter_dry_run_resource#perimeter_name AccessContextManagerServicePerimeterDryRunResource#perimeter_name}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

A GCP resource that is inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/access_context_manager_service_perimeter_dry_run_resource#resource AccessContextManagerServicePerimeterDryRunResource#resource}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/access_context_manager_service_perimeter_dry_run_resource#deletion_policy AccessContextManagerServicePerimeterDryRunResource#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/access_context_manager_service_perimeter_dry_run_resource#id AccessContextManagerServicePerimeterDryRunResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AccessContextManagerServicePerimeterDryRunResourceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/access_context_manager_service_perimeter_dry_run_resource#timeouts AccessContextManagerServicePerimeterDryRunResource#timeouts}

---

### AccessContextManagerServicePerimeterDryRunResourceTimeouts <a name="AccessContextManagerServicePerimeterDryRunResourceTimeouts" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts.Initializer"></a>

```typescript
import { accessContextManagerServicePerimeterDryRunResource } from '@cdktn/provider-google'

const accessContextManagerServicePerimeterDryRunResourceTimeouts: accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/access_context_manager_service_perimeter_dry_run_resource#create AccessContextManagerServicePerimeterDryRunResource#create}. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/access_context_manager_service_perimeter_dry_run_resource#delete AccessContextManagerServicePerimeterDryRunResource#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/access_context_manager_service_perimeter_dry_run_resource#create AccessContextManagerServicePerimeterDryRunResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/access_context_manager_service_perimeter_dry_run_resource#delete AccessContextManagerServicePerimeterDryRunResource#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference <a name="AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { accessContextManagerServicePerimeterDryRunResource } from '@cdktn/provider-google'

new accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessContextManagerServicePerimeterDryRunResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a>

---



