# `resourceManagerBoundaryConfig` Submodule <a name="`resourceManagerBoundaryConfig` Submodule" id="@cdktn/provider-google.resourceManagerBoundaryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceManagerBoundaryConfigA <a name="ResourceManagerBoundaryConfigA" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config google_resource_manager_boundary_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer"></a>

```typescript
import { resourceManagerBoundaryConfig } from '@cdktn/provider-google'

new resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA(scope: Construct, id: string, config: ResourceManagerBoundaryConfigAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig">ResourceManagerBoundaryConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig">ResourceManagerBoundaryConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.putTimeouts"></a>

```typescript
public putTimeouts(value: ResourceManagerBoundaryConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResourceManagerBoundaryConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isConstruct"></a>

```typescript
import { resourceManagerBoundaryConfig } from '@cdktn/provider-google'

resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isTerraformElement"></a>

```typescript
import { resourceManagerBoundaryConfig } from '@cdktn/provider-google'

resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isTerraformResource"></a>

```typescript
import { resourceManagerBoundaryConfig } from '@cdktn/provider-google'

resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.generateConfigForImport"></a>

```typescript
import { resourceManagerBoundaryConfig } from '@cdktn/provider-google'

resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ResourceManagerBoundaryConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourceManagerBoundaryConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourceManagerBoundaryConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ResourceManagerBoundaryConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference">ResourceManagerBoundaryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceManagerBoundaryConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference">ResourceManagerBoundaryConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ResourceManagerBoundaryConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceManagerBoundaryConfigAConfig <a name="ResourceManagerBoundaryConfigAConfig" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.Initializer"></a>

```typescript
import { resourceManagerBoundaryConfig } from '@cdktn/provider-google'

const resourceManagerBoundaryConfigAConfig: resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.parent">parent</a></code> | <code>string</code> | The parent resource whose BoundaryConfig this is. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.tagKey">tagKey</a></code> | <code>string</code> | The namespaced name of the partitioning tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#id ResourceManagerBoundaryConfigA#id}. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent resource whose BoundaryConfig this is. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#parent ResourceManagerBoundaryConfigA#parent}

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

The namespaced name of the partitioning tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'.

Boundaries under this parent filter projects on this tag key.

The service also accepts the 'tagKeys/{numeric_id}' form here, but
Boundaries accept only the namespaced form and are validated against this
value verbatim. Storing the 'tagKeys/{numeric_id}' form therefore makes
every subsequent Boundary create fail with 'FAILED_PRECONDITION'. Always
use the namespaced form, for example
'google_tags_tag_key.example.namespaced_name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#tag_key ResourceManagerBoundaryConfigA#tag_key}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#deletion_policy ResourceManagerBoundaryConfigA#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#id ResourceManagerBoundaryConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceManagerBoundaryConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#timeouts ResourceManagerBoundaryConfigA#timeouts}

---

### ResourceManagerBoundaryConfigTimeouts <a name="ResourceManagerBoundaryConfigTimeouts" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts.Initializer"></a>

```typescript
import { resourceManagerBoundaryConfig } from '@cdktn/provider-google'

const resourceManagerBoundaryConfigTimeouts: resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#create ResourceManagerBoundaryConfigA#create}. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#delete ResourceManagerBoundaryConfigA#delete}. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#update ResourceManagerBoundaryConfigA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#create ResourceManagerBoundaryConfigA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#delete ResourceManagerBoundaryConfigA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#update ResourceManagerBoundaryConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceManagerBoundaryConfigTimeoutsOutputReference <a name="ResourceManagerBoundaryConfigTimeoutsOutputReference" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { resourceManagerBoundaryConfig } from '@cdktn/provider-google'

new resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceManagerBoundaryConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a>

---



